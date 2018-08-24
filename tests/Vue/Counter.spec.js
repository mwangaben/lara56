import {
    mount
} from '@vue/test-utils';
import Counter from '../../resources/assets/js/components/Counter.vue';
import expect from 'expect';
import Helpers from 'mwangaben-vthelpers';


describe('Counter', () => {
    let wrapper, b;
    beforeEach(() => {
        wrapper = mount(Counter);
        b       = new Helpers(wrapper, expect);
    });


    it('presents the current count', () => {
        b.see(0, '.count');
    });

    it('can increase count when an increment butto is clicked', () => {
        b.click('button#increament');
        b.see(1);
    });

    it('can reduce the count when a decreament is clicked', () => {

        wrapper.setData({
            count: 5
        });

        b.click('button#decreament');

        b.see(4);
    });



    it('does not show the decreament button when the count is zero', () => {
         wrapper.setData({count:0});

         b.domHasNot('button#decreament')
     });


});
