import AxeReports from 'axe-reports';
import { getAccessibilityTestResults } from '../../../../../test/utils/axe-helper.js';

describe('Axe accessibility tests', () => {
    beforeEach(() => {
        // Arrange
        browser.url('http://localhost:8081');
    });

    it('should test f-registration component WCAG compliance', () => {
        // Act
        const axeResults = getAccessibilityTestResults();

        // Assert
        if (axeResults.violations.length > 0) {
            AxeReports.processResults(axeResults, 'csv', 'f-registration-a11y-violations');
            console.error(`Expected no accessibility violations. Found: ${axeResults.violations.length}`);
        }
        expect(axeResults.violations.length).toBe(0);
    });
});
