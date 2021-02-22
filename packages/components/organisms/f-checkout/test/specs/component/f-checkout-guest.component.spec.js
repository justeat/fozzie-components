import forEach from 'mocha-each';
const Checkout = require('../../../test-utils/component-objects/f-checkout.component');
const checkout = new Checkout();

describe('f-checkout component tests', () => {
    before(() => {

        const checkoutData = {
            type: 'delivery', 
            isAuthenticated: false, 
            isValid: true
        }

        checkout.open(checkoutData);
        checkout.waitForComponent();
    });

    it('should display the guest checkout header component', () => {
        // Assert
        expect(checkout.isGuestCheckoutHeaderDisplayed()).toBe(true);
    });

    it('should display the guest checkout login button', () => {
        // Assert
        expect(checkout.isGuestCheckoutLoginButtonDisplayed()).toBe(true);
    });

    forEach(['firstName', 'lastName', 'emailAddress'])
    .it('should show the guest checkout fields', field => {
        // Assert
        expect(checkout.doesFieldExist(field)).toBe(true);
    });

    forEach(['firstName', 'lastName', 'emailAddress'])
    .it('should display each fields error message', field => {
        // Act
        checkout.clearCheckoutForm(field);
        checkout.goToPayment();

        // Assert
        expect(checkout.isFieldErrorDisplayed(field)).toBe(true);
    });

    it('should prevent user from submitting an invalid email address', () => {
        // Arrange
        const emailAddress = {
            emailAddress: 'abc@abc'
        };

        // Act
        checkout.populateCheckoutForm(emailAddress);
        checkout.goToPayment();

        // Assert
        expect(checkout.isFieldErrorDisplayed('emailAddress')).toBe(true);
    });


    it('should navigate to correct url when the login link is clicked', () => {
        // Arrange
        const loginPath = '/login';

        // Act
        checkout.clickGuestCheckoutLoginButton();
        const { pathname } = new URL(browser.getUrl());

        // Assert
        expect(pathname).toEqual(loginPath);
    });
});
