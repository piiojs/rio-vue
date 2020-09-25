import { shallowMount } from '@vue/test-utils';
import PiioElement from '@/components/piio/piioElement.vue';

describe('piioElement.vue', () => {

    function tagMatchTest(tag) {
        const lower = tag ? tag.toLowerCase() : 'div';

        it(`renders a <${lower}> element when passed "${tag || ''}" as the tag value`, () => {
            const wrapper = shallowMount(PiioElement, {
                propsData: { 
                    tag,
                    id: 'piiotest'
                }
            });

            const $el = wrapper.find('#piiotest')

            expect(
                $el.element.tagName.toLowerCase()
            ).toBe(lower);
        });
    }

    ['img', 'IMG', 'source', 'SOURCE', 'div', 'DIV', undefined].forEach((tag) => {
        tagMatchTest(tag);
    });

})
