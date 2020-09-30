import { AxeReports } from 'axe-reports';

import { AxeHelper } from '../../../test-utils/helpers/axe-helper';
import RegistrationComponent from '../../../test-utils/component-objects/f-registration.component';

describe('Axe accessibility tests', () => {
    beforeEach(() => {
        // Arrange
        browser.url('http://localhost:8081');
    });

    it('should test f-registration component WCAG compliance', () => {
        // Act
        const axeResults = AxeHelper.getAccessibilityTestResults();

        // Assert
        if (axeResults.violations.length > 0) {
            AxeReports.processResults(axeResults, 'csv', 'registration-violations');
            console.error(`Expected no accessibility violations. Found: ${axeResults.violations.length}`);
        }
        expect(axeResults.violations.length).toBe(0);
    });
});
