import {mount} from '@vue/test-utils';
import Reminder from '../../resources/assets/js/components/Reminder.vue';
import expect from 'expect';
import Helpers from 'mwangaben-vthelpers';
 
 
describe('Reminder', () => {
    let  wrapper, b;
    beforeEach(() => {
        wrapper = mount(Reminder);
        b       = new Helpers(wrapper, expect);
    });
   
    it('does not display the reminder if there are none', () => {
         b.domHasNot('#reminders');
     });

     it('adds new reminders', () => {

        wrapper.setData({ reminders : ['Go to the store']});
        b.type('Go to work', '#new-reminder'); 
        b.click('button#reminder');
        
        b.see('Go to work');
     });

     it('removes the reminders', () => {
          wrapper.setData({ reminders: [' Go to work', 'Go fishing']});

          b.see('Go to work');
          b.see('Go fishing');
          
          b.click('button#remove');
          
          b.doNotSee('Go to work');
          b.see('Go fishing');
      });
});