import {mount} from '@vue/test-utils';
import Message from '../../resources/assets/js/components/Message.vue';
import expect from 'expect';
import Helpers from 'mwangaben-vthelpers';
 
 
describe('Message', () => {
    let  wrapper, b;
    beforeEach(() => {
        wrapper = mount(Message, {
           propsData : {title: 'Hello World', body: 'My body' }
        });
        b = new Helpers(wrapper, expect);
    });
   

    it('shows the message component', () => {
         b.see('Hello World')
         b.see('My body');
     });

     it('can close the message component', () => {
          b.click('.delete');

          b.doNotSee('Hello World');
      });
    
});