import FormFieldComponent from '../../../test-utils/component-objects/f-form-field.component';
import { ATOMS } from '../../../../../../../url.selectors';

describe('f-form-field component tests', () => {
    beforeEach(() => {
        browser.url(`${ATOMS}form-field-component`);
    });

    it('should display f-form-field', () => {
        // Assert
        expect(FormFieldComponent.isFormFieldDisplayed()).toBe(true);
    });

    it('should display Label', () => {
        // Assert
        expect(FormFieldComponent.isLabelDisplayed()).toBe(true);
    });

    it('should display user input', () => {
        // Arrange
        const userInput = {
            firstName: 'abcd'
        };

        // Assert
        expect(FormFieldComponent.displayUserInput(userInput)).toBeVisible;
    });
});
