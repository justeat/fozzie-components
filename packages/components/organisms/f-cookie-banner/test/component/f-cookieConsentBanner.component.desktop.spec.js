import forEach from 'mocha-each';

const { buildUrl } = require('@justeat/f-wdio-utils/src/storybook-extensions.js');
const CookieBanner = require('../../test-utils/component-objects/f-cookieConsentBanner.component');

let cookieBanner;


describe('New - f-cookieBanner component tests - @browserstack', () => {
    beforeEach(() => {
        cookieBanner = new CookieBanner('organism', 'cookie-banner-component');
        cookieBanner.withQuery('&knob-Locale', 'en-IE');
        const pageUrl = buildUrl(cookieBanner.componentType, cookieBanner.componentName, cookieBanner.path);

        cookieBanner.open(pageUrl);
        cookieBanner.waitForComponent();
    });

    forEach(['full', 'necessary'])
    .it('should set "je-cookie_banner" and "je-cookieConsent" to expected cookie values for "%s"', expectedCookieValue => {
        // Act
        cookieBanner.acceptCookies(expectedCookieValue);

        // Arrange
        const bannerCookie = browser.getCookies().filter(cookie => cookie.name === 'je-banner_cookie')[0];
        const bannerConsent = browser.getCookies().filter(cookie => cookie.name === 'je-cookieConsent')[0];

        // Assert
        expect(bannerCookie.value).toBe('130315');
        expect(bannerConsent.value).toBe(expectedCookieValue);
        expect(cookieBanner.isCookieBannerComponentDisplayed()).toBe(false);
    });
});


describe('New - Multi-tenant - f-cookieBanner component tests', () => {
    forEach([
        ['es', 'es/info/politica-de-cookies'],
        // ['dk', 'dk/cookie-erklaering'],
        ['ie', 'ie/info/cookies-policy'],
        ['it', 'it/informazioni/politica-dei-cookie']
        // ['no', 'no/informasjonskapselerklaering']  'dk' and 'no' disabled for now
    ])
    .it('should go to the correct cookie policy page', (tenant, expectedCookiePolicyUrl) => {
        // Arrange
        const countryFormatted = tenant.toUpperCase();
        let formattedLocale = '';
        switch (countryFormatted) {
            case 'IE':
                formattedLocale = `en-${countryFormatted}`;
                break;
            case 'DK':
                formattedLocale = `da-${countryFormatted}`;
                break;
            case 'ES':
                formattedLocale = `es-${countryFormatted}`;
                break;
            case 'IT':
                formattedLocale = `it-${countryFormatted}`;
                break;
            case 'NO':
                formattedLocale = `nb-${countryFormatted}`;
                break;
            default:
                throw new Error(`locale ${countryFormatted} is not supported`);
        }

        cookieBanner = new CookieBanner('organism', 'cookie-banner-component');
        cookieBanner.withQuery('&knob-Locale', formattedLocale);
        const pageUrl = buildUrl(cookieBanner.componentType, cookieBanner.componentName, cookieBanner.path);

        cookieBanner.open(pageUrl);
        browser.deleteAllCookies();
        browser.refresh();
        cookieBanner.waitForComponent();

        // Act
        cookieBanner.clickCookiePolicyLink();
        browser.switchWindow(new RegExp(`^.*${expectedCookiePolicyUrl}.*$`));

        // Assert
        expect(browser.getUrl()).toContain(expectedCookiePolicyUrl);
    });
});
