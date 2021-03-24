const UserMessage = require ('../../../test-utils/component-objects/f-user-message.component');
const { buildUrl } = require('../../../../../../services/f-wdio-utils/src/storybook-extensions.js');

const userMessage = new UserMessage('molecule', 'user-message-component');

describe('f-user-message component tests', () => {
    beforeEach(() => {
        const pageUrl = buildUrl(userMessage.componentType, userMessage.componentName, userMessage.path);

        userMessage.open(pageUrl)
            .waitForComponent();
    });

    it('should display the user message component', () => {
        // Assert
        expect(userMessage.isComponentDisplayed()).toBe(true);
    });

    it('should display the user message content', () => {
        // Assert
        expect(userMessage.isContentDisplayed()).toBe(true);
    });
});
