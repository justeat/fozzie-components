const Checkout = require('../../test-utils/component-objects/f-checkout.component');

const checkout = new Checkout();

describe('f-checkout "dinein" component tests', () => {
    beforeEach(() => {
        const checkoutData = {
            type: 'dinein',
            isAuthenticated: true,
            isValid: true
        };

        checkout.open(checkoutData);
        checkout.waitForComponent();
    });

    it('should enable a user to submit a table identifier with correct characters', () => {
        // Arrange
        const customerInfo = {
            tableIdentifier: '22'
        };

        // Act
        checkout.populateDineInCheckoutForm(customerInfo);
        checkout.goToPayment();

        // Assert
        expect(checkout.isTableIdentifierMaxLengthErrorDisplayed()).toBe(false);
    });

    it('should prevent a user from entering more than 12 characters in the tableIdentifier field', () => {
        // Arrange
        const maxlength = 12;

        checkout.clearCheckoutForm('tableIdentifier');
        const tableEntry = 'A'.repeat(maxlength + 1); // Enter more than allowed

        // Act
        checkout.setFieldValue('tableIdentifier', tableEntry);

        // Assert
        expect(checkout.getFieldValue('tableIdentifier').length).toEqual(maxlength);
    });
});
