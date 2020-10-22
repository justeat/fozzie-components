import { shallowMount } from '@vue/test-utils';
import VueSearchbox from '../Searchbox.vue';

describe('Searchbox', () => {
    it('should be defined', () => {
        const propsData = {};
        const wrapper = shallowMount(VueSearchbox, { propsData });
        expect(wrapper.exists()).toBe(true);
    });
});
