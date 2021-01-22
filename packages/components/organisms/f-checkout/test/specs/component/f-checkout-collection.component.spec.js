import forEach from 'mocha-each';
import CheckoutComponent from '../../../test-utils/component-objects/f-checkout.component';
import { COLLECTION } from '../../../test-utils/component-objects/f-checkout-selectors';
import { ORGANISMS } from '../../../../../../../url.selectors'

describe('f-checkout "collection" component tests', () => {
    before(() => {
        browser.url(`${ORGANISMS}checkout-component${COLLECTION}`);
    });

    it('should display "mobileNumber" error message when collection method is set and number is incorrect', () => {
        // Arrange
        const addressDetails = {
            mobileNumber: '1234'
        };

        // Act
        CheckoutComponent.populateCollectionCheckoutForm(addressDetails);
        CheckoutComponent.goToPayment();

        // Assert
        expect(CheckoutComponent.isFieldErrorDisplayed('mobileNumber')).toBe(true);
    });

    forEach(['addressLine1', 'addressLine2', 'addressCity', 'addressPostcode'])
    .it('address fields should not exist', field => {
        // Assert
        expect(CheckoutComponent.doesFieldExist(field)).toBe(false);
    });

    it('should display the mandatory "mobileNumber" field', () => {
        // Assert
        expect(CheckoutComponent.isFieldDisplayed('mobileNumber')).toBe(true);
    });
});
