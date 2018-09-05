import {mount} from '@vue/test-utils';
import Modal from '../../resources/assets/js/components/Modal.vue';
import expect from 'expect';
import Helpers from 'mwangaben-vthelpers';
 
 
describe('Modal', () => {
    let  wrapper, b;
    beforeEach(() => {
        wrapper = mount(Modal, {
            propsData: {
                dataTitle: 'I am modal',
                dataBody: 'The message body'
            }
        });
        b = new Helpers(wrapper, expect);
    });
   
    it('activates the modal', () => {
         b.click('.show-modal');

         b.see('I am modal');

         b.see('The message body');

     });

     it('hides the modal when a closed button is clicked', () => {
          b.click('.show-modal');

          b.see('I am modal');

          b.click('.modal-close');


          b.doNotSee('I am modal');
      });
});