import { getAccessibilityTestResults } from '../../../../../../../test/utils/axe-helper';
import ErrorMessageComponent from '../../../test-utils/component-objects/f-error-message.component';

describe('Accessibility tests', () => {
    beforeEach(() => {
        browser.url('?path=/story/components-atoms--error-message-component');
        browser.switchToFrame(0);
        ErrorMessageComponent.waitForErrorMessage();
    });

    it('a11y - should test f-formField component WCAG compliance', () => {
        // Act
        const axeResults = getAccessibilityTestResults('f-error-message');
        // Assert
        expect(axeResults.violations.length).toBe(0);
    });
});
