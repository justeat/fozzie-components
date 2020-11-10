import { shallowMount, mount } from '@vue/test-utils';
import { VALID_CHECKOUT_METHOD } from '../../constants';
import VueCheckout from '../Checkout.vue';
import CheckoutServiceApi from '../../services/CheckoutServiceApi';
import EventNames from '../../event-names';

jest.mock('../../services/CheckoutServiceApi', () => ({ submitCheckout: jest.fn() }));

describe('Checkout', () => {
    const checkoutUrl = 'http://localhost/account/register';

    it('should be defined', () => {
        const propsData = { checkoutUrl };
        const wrapper = shallowMount(VueCheckout, { propsData });
        expect(wrapper.exists()).toBe(true);
    });

    describe('props ::', () => {
        describe('checkoutMethod ::', () => {
            it.each(VALID_CHECKOUT_METHOD)('should update the Selector `ordermethod` attribute to match checkoutMethod=%p', definedType => {
                // Arrange
                const propsData = {
                    checkoutMethod: definedType,
                    checkoutUrl
                };

                // Act
                const wrapper = shallowMount(VueCheckout, { propsData });
                const selectorComponent = wrapper.find('[data-test-id="selector"]');

                // Assert
                expect(selectorComponent.attributes('ordermethod')).toEqual(definedType);
            });

            it('should display the address block if set to `Delivery`', () => {
                // Arrange
                const propsData = {
                    checkoutMethod: 'Delivery',
                    checkoutUrl
                };

                // Act
                const wrapper = shallowMount(VueCheckout, { propsData });
                const addressBlock = wrapper.find('[data-test-id="address-block"]');

                // Assert
                expect(addressBlock.exists()).toBe(true);
            });

            it('should not display the address block if set to `Collection`', () => {
                // Arrange
                const propsData = {
                    checkoutMethod: 'Collection',
                    checkoutUrl
                };

                // Act
                const wrapper = shallowMount(VueCheckout, { propsData });
                const addressBlock = wrapper.find('[data-test-id="address-block"]');

                // Assert
                expect(addressBlock.exists()).toBe(false);
            });
        });
    });

    describe('computed ::', () => {
        const propsData = { checkoutUrl };
        const data = { firstName: 'name' };

        describe('name ::', () => {
            it('should capitalize `firstName` data', async () => {
                // Arrange
                const wrapper = shallowMount(VueCheckout, { propsData });
                const name = wrapper.find("[data-test-id='checkout-card-component']");

                // Act
                wrapper.setData(data);
                await wrapper.vm.$nextTick();

                // Assert
                expect(name.props('cardHeading')).toContain('Name');
            });
        });

        describe('title ::', () => {
            it('should add `name` to title text', async () => {
                // Arrange
                const wrapper = shallowMount(VueCheckout, { propsData });
                const name = wrapper.find("[data-test-id='checkout-card-component']");

                // Act
                wrapper.setData(data);
                await wrapper.vm.$nextTick();

                // Assert
                expect(name.props('cardHeading')).toEqual('Name, confirm your details');
            });
        });
    });

    describe('when form submitted', () => {
        const mobileNumber = '07777777777';

        const address = {
            line1: 'Fleet Place House',
            city: 'London',
            postcode: 'EC4M 7RF'
        };

        describe('if checkoutMethod set to `Collection`', () => {
            const propsData = {
                checkoutMethod: 'Collection',
                checkoutUrl
            };

            let wrapper;

            beforeEach(() => {
                CheckoutServiceApi.submitCheckout.mockClear();
                CheckoutServiceApi.submitCheckout.mockImplementation(async () => Promise.resolve());

                wrapper = mount(VueCheckout, { propsData });
            });

            it('should emit success event when all fields are populated correctly', async () => {
                // Arrange
                wrapper.find('[data-test-id="input-mobile-number"]').setValue(mobileNumber);

                // Act
                await wrapper.vm.onFormSubmit();

                // Assert
                expect(wrapper.emitted(EventNames.CheckoutSuccess).length).toBe(1);
                expect(wrapper.emitted(EventNames.CheckoutFailure)).toBeUndefined();
            });

            it('should show error message and emit failure event when the mobile number field is not populated', async () => {
                // Arrange && Act
                await wrapper.vm.onFormSubmit();
                const mobileNumberEmptyMessage = wrapper.find('[data-test-id="error-mobile-number"]');

                // Assert
                expect(wrapper.vm.isMobileNumberValid).toBe(false);
                expect(mobileNumberEmptyMessage).toMatchSnapshot();
                expect(wrapper.emitted(EventNames.CheckoutFailure).length).toBe(1);
                expect(wrapper.emitted(EventNames.CheckoutFailure)[0][0].invalidFields).toContain('mobileNumber');
            });

            it('should show error message and emit failure event when the mobile number field is populated with a < 10 numbers', async () => {
                // Arrange
                wrapper.find('[data-test-id="input-mobile-number"]').setValue('077777');

                // Act
                await wrapper.vm.onFormSubmit();
                const mobileNumberEmptyMessage = wrapper.find('[data-test-id="error-mobile-number"]');

                // Assert
                expect(wrapper.vm.isMobileNumberValid).toBe(false);
                expect(mobileNumberEmptyMessage).toMatchSnapshot();
                expect(wrapper.emitted(EventNames.CheckoutFailure).length).toBe(1);
                expect(wrapper.emitted(EventNames.CheckoutFailure)[0][0].invalidFields).toContain('mobileNumber');
            });

            it('should show error message and emit failure event when the mobile number field is populated with non numeric value', async () => {
                // Arrange
                wrapper.find('[data-test-id="input-mobile-number"]').setValue('hs;-j`$e&1l');

                // Act
                await wrapper.vm.onFormSubmit();
                const mobileNumberEmptyMessage = wrapper.find('[data-test-id="error-mobile-number"]');

                // Assert
                expect(wrapper.vm.isMobileNumberValid).toBe(false);
                expect(mobileNumberEmptyMessage).toMatchSnapshot();
                expect(wrapper.emitted(EventNames.CheckoutFailure).length).toBe(1);
                expect(wrapper.emitted(EventNames.CheckoutFailure)[0][0].invalidFields).toContain('mobileNumber');
            });

            it('should not show error message or emit failure event when the address input fields are not populated', async () => {
                // Arrange
                wrapper.find('[data-test-id="input-mobile-number"]').setValue(mobileNumber);

                // Act
                await wrapper.vm.onFormSubmit();

                // Assert
                expect(wrapper.emitted(EventNames.CheckoutSuccess).length).toBe(1);
                expect(wrapper.emitted(EventNames.CheckoutFailure)).toBeUndefined();
            });

            it('should not create validations for address', () => {
                // Assert
                expect(wrapper.vm.$v.address).toBeUndefined();
            });
        });

        describe('if checkoutMethod set to `Delivery`', () => {
            const propsData = {
                checkoutMethod: 'Delivery',
                checkoutUrl
            };

            let wrapper;

            beforeEach(() => {
                CheckoutServiceApi.submitCheckout.mockClear();
                CheckoutServiceApi.submitCheckout.mockImplementation(async () => Promise.resolve());

                wrapper = mount(VueCheckout, { propsData });
            });

            it('should emit success event when all fields are populated correctly', async () => {
                // Arrange
                wrapper.find('[data-test-id="input-mobile-number"]').setValue(mobileNumber);
                wrapper.find('[data-test-id="input-address-line-1"]').setValue(address.line1);
                wrapper.find('[data-test-id="input-address-city"]').setValue(address.city);
                wrapper.find('[data-test-id="input-address-postcode"]').setValue(address.postcode);

                // Act
                await wrapper.vm.onFormSubmit();

                // Assert
                expect(wrapper.emitted(EventNames.CheckoutSuccess).length).toBe(1);
                expect(wrapper.emitted(EventNames.CheckoutFailure)).toBeUndefined();
            });

            it('should emit failure event and display error message when address line1 input field is empty', async () => {
                // Arrange && Act
                await wrapper.vm.onFormSubmit();
                const addressLine1EmptyMessage = wrapper.find('[data-test-id="error-address-line1-empty"]');

                // Assert
                expect(addressLine1EmptyMessage).toMatchSnapshot();
                expect(wrapper.emitted(EventNames.CheckoutFailure).length).toBe(1);
                expect(wrapper.emitted(EventNames.CheckoutFailure)[0][0].invalidFields).toContain('address');
            });

            it('should emit failure event and display error message when city input field is empty', async () => {
                // Arrange && Act
                await wrapper.vm.onFormSubmit();
                const addressCityEmptyMessage = wrapper.find('[data-test-id="error-address-city-empty"]');

                // Assert
                expect(addressCityEmptyMessage).toMatchSnapshot();
                expect(wrapper.emitted(EventNames.CheckoutFailure).length).toBe(1);
                expect(wrapper.emitted(EventNames.CheckoutFailure)[0][0].invalidFields).toContain('address');
            });

            it('should emit failure event and display error message when postcode input field is empty', async () => {
                // Arrange && Act
                await wrapper.vm.onFormSubmit();
                const addressPostcodeEmptyMessage = wrapper.find('[data-test-id="error-address-postcode-empty"]');

                // Assert
                expect(addressPostcodeEmptyMessage).toMatchSnapshot();
                expect(wrapper.emitted(EventNames.CheckoutFailure).length).toBe(1);
                expect(wrapper.emitted(EventNames.CheckoutFailure)[0][0].invalidFields).toContain('address');
            });

            it('should emit failure event and display error message when postcode contains incorrect characters', async () => {
                // Arrange
                wrapper.find('[data-test-id="input-address-postcode"]').setValue('?!hdb-se');

                // Act
                await wrapper.vm.onFormSubmit();
                const addressPostcodeTypeErrorMessage = wrapper.find('[data-test-id="error-address-postcode-type-error"]');

                // Assert
                expect(addressPostcodeTypeErrorMessage).toMatchSnapshot();
                expect(wrapper.emitted(EventNames.CheckoutFailure).length).toBe(1);
                expect(wrapper.emitted(EventNames.CheckoutFailure)[0][0].invalidFields).toContain('address');
            });


            it('should emit failure event and display error message when postcode contains incorrect characters', async () => {
                // Arrange
                wrapper.find('[data-test-id="input-address-postcode"]').setValue('EC4M 7R');

                // Act
                await wrapper.vm.onFormSubmit();
                const addressPostcodeTypeErrorMessage = wrapper.find('[data-test-id="error-address-postcode-type-error"]');

                // Assert
                expect(addressPostcodeTypeErrorMessage).toMatchSnapshot();
                expect(wrapper.emitted(EventNames.CheckoutFailure).length).toBe(1);
                expect(wrapper.emitted(EventNames.CheckoutFailure)[0][0].invalidFields).toContain('address');
            });

            it('should create validations for address', () => {
                // Assert
                expect(wrapper.vm.$v.address.line1).toBeDefined();
                expect(wrapper.vm.$v.address.city).toBeDefined();
                expect(wrapper.vm.$v.address.postcode).toBeDefined();
            });
        });
    });
});
