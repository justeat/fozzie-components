import { shallowMount, createLocalVue } from '@vue/test-utils';
import { VueI18n } from '@justeat/f-globalisation';
import VLink from '../Link.vue';
import tenantConfigs from '../../tenants';

const localVue = createLocalVue();
localVue.use(VueI18n);

const i18n = {
    locale: 'en-GB',
    messages: {
        'en-GB': tenantConfigs['en-GB'].messages
    }
};

const linkText = 'This is a Link';

describe('Link', () => {
    it('should be defined', () => {
        const propsData = {linkText};

        const wrapper = shallowMount(VLink, {
            propsData,
            i18n,
            localVue
        });
        expect(wrapper.exists()).toBe(true);
    });

    describe('computed :: ', () => {
        describe('ariaLabel :: ', () => {
            const newLocationMessage = `${linkText} - Opens in a new window/screen/tab`;
            const externalLinkMessage = `${linkText} - Opens an external site in a new window/screen/tab`;

            it.each([
                [null, false, false],
                [newLocationMessage, false, true],
                [externalLinkMessage, true, false],
                [externalLinkMessage, true, true]
            ])('should return `%s` when `isExternal` is %s AND `opensInNewLocationTab` is $s', (expected, isExternal, opensInNewLocation) => {
                const propsData = {
                    linkText,
                    isExternal,
                    opensInNewLocation
                };

                const wrapper = shallowMount(VLink, {
                    propsData,
                    i18n,
                    localVue
                });

                expect(wrapper.vm.ariaLabel).toEqual(expected);
            });
        });

        describe('target :: ', () => {
            it.each([
                ['_blank', true],
                [null, false]
            ])('should return %s when `isExternal` is %s', (expected, isExternal) => {
                const propsData = {
                    linkText,
                    isExternal
                };

                const wrapper = shallowMount(VLink, {
                    propsData,
                    i18n,
                    localVue
                });

                expect(wrapper.vm.target).toEqual(expected);
            });

            it.each([
                ['_blank', true],
                [null, false]
            ])('should return %s when `opensInNewLocation` is %s', (expected, opensInNewLocation) => {
                const propsData = {
                    linkText,
                    opensInNewLocation
                };

                const wrapper = shallowMount(VLink, {
                    propsData,
                    i18n,
                    localVue
                });

                expect(wrapper.vm.target).toEqual(expected);
            });
        });

        describe('rel :: ', () => {
            it.each([
                ['noopener', true],
                [null, false]
            ])('should return %s when `isExternal` is %s', (expected, isExternal) => {
                const propsData = {
                    linkText,
                    isExternal
                };

                const wrapper = shallowMount(VLink, {
                    propsData,
                    i18n,
                    localVue
                });

                expect(wrapper.vm.rel).toEqual(expected);
            });
        });
    });
});
