const MegaModal = require('../../../test-utils/component-objects/f-mega-modal.component');
const { buildUrl } = require('../../../../../../services/f-wdio-utils/src/storybook-extensions.js');

const megaModal = new MegaModal('molecule', 'mega-modal-component');

describe('f-mega-modal component tests', () => {
    beforeEach(() => {
        const pageUrl = buildUrl(megaModal.componentType, megaModal.componentName, megaModal.path);

        megaModal.open(pageUrl)
            .waitForComponent();
    });

    it('should display Alert', () => {
        // Assert
        expect(megaModal.isComponentDisplayed()).toBe(true);
    });

    it('should display the title', () => {
        // Assert
        expect(megaModal.isTitleDisplayed()).toBe(true);
    });

    it('should display the content', () => {
        // Assert
        expect(megaModal.isContentDisplayed()).toBe(true);
    });
});
