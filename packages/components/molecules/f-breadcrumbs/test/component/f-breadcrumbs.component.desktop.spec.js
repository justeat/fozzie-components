const { buildUrl } = require('@justeat/f-wdio-utils/src/storybook-extensions.js');


const breadcrumbs = new Breadcrumbs('molecule', 'breadcrumbs-component');

describe('f-breadcrumbs component tests', () => {
    beforeEach(() => {
        const pageUrl = buildUrl(breadcrumbs.componentType, breadcrumbs.componentName, breadcrumbs.path);

        breadcrumbs.open(pageUrl);
        breadcrumbs.waitForComponent();
    });
    it('should display the f-breadcrumbs component', () => {
        // Assert
        expect(breadcrumbs.isComponentDisplayed()).toBe(true);
    });
});
