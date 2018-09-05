import {mount} from '@vue/test-utils';
import ComputedProperties from '../../resources/assets/js/components/ComputedProperties.vue';
import expect from 'expect';
import Helpers from 'mwangaben-vthelpers';
 
 
describe('ComputedProperties', () => {
    let  wrapper, b;
    beforeEach(() => {
        wrapper = mount(ComputedProperties);
        b = new Helpers(wrapper, expect);
    });
   
    it('reverses a given message', () => {
         b.type('Mwanga', 'input[name="reversed"]');
        

         b.see('agnawM');

         
     });
});