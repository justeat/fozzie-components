import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import { VALID_CHECKOUT_METHOD } from '../../constants';
import VueCheckout from '../Checkout.vue';

describe('Checkout', () => {
    it('should be defined', () => {
        const propsData = {};
        const wrapper = shallowMount(VueCheckout, { propsData });
        expect(wrapper.exists()).toBe(true);
    });

    describe('props ::', () => {
        describe('checkoutMethod ::', () => {
            it.each(VALID_CHECKOUT_METHOD)('should update the Selector `ordermethod` attribute to match checkoutMethod=%p', definedType => {
                // Arrange
                const propsData = {
                    checkoutMethod: definedType
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
                    checkoutMethod: 'Delivery'
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
                    checkoutMethod: 'Collection'
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
        const propsData = {};
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

    describe('with a working checkout service', () => {
        describe('when checkoutMethod set to `Collection`', () => {
            const propsData = { checkoutMethod: 'Collection' };

            it('should show error message and emit failure event when the mobile number field is not populated', async () => {
                // Arrange
                const wrapper = shallowMount(VueCheckout, { propsData });

                // Act
                await wrapper.vm.onFormSubmit();
                await flushPromises();
                await wrapper.vm.$nextTick();

                // Assert
                expect(wrapper.vm.shouldShowMobileNumberRequiredError).toBe(true);
                // expect(wrapper.emitted(EventNames.CreateAccountFailure).length).toBe(1);
                // expect(wrapper.emitted(EventNames.CreateAccountFailure)[0][0].invalidFields).toContain('firstName');
            });

            it('should not show error message or emit failure event when the address input fields are not populated', async () => {
                // Arrange
                const wrapper = shallowMount(VueCheckout, { propsData });

                // Act
                await wrapper.vm.onFormSubmit();
                await flushPromises();
                await wrapper.vm.$nextTick();

                // Assert
                expect(wrapper.vm.shouldShowAddressLine1RequiredError).toBe(false);
                expect(wrapper.vm.shouldShowAddressCityRequiredError).toBe(false);
                expect(wrapper.vm.shouldShowAddressPostcodeRequiredError).toBe(false);
                expect(wrapper.vm.shouldShowAddressPostcodeTypeError).toBe(false);

                // expect(wrapper.emitted(EventNames.CreateAccountFailure).length).toBe(1);
                // expect(wrapper.emitted(EventNames.CreateAccountFailure)[0][0].invalidFields).toContain('firstName');
            });
        });
    });
});
