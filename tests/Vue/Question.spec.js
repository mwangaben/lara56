import {
    mount
} from '@vue/test-utils';
import Question from '../../resources/assets/js/components/Question.vue';
import expect from 'expect';
import Helpers from 'mwangaben-vthelpers';
import  moxios  from "moxios";


describe('Question', () => {
    let wrapper, b;
    beforeEach(() => {
        moxios.install();
        wrapper = mount(Question, {
            propsData: {
                dataQuestion: {
                    title: 'The title',
                    body: 'The body'
                }
            }
        });

        b = new Helpers(wrapper, expect);

    });

    afterEach(() => {
        moxios.uninstall();
    })

    it('presents the title and the body', () => {
        b.see('The title', '#title');
        b.see('The body', '#body');
    });

    it('can be edited', () => {
         b.click('#edit');

         b.domHas('input[name="title"]');
         b.domHas('textarea[name="body"]')
     });

     it('hides the  edit button when on the editting mode', () => {
          b.click('#edit');

          b.domHasNot('#edit')
      });

      it('can update the question', (done) => {
           b.click('#edit');

           b.type('Edited title', '#title');
           
           moxios.stubRequest(/[a-z]\/+\d/, {
               status : 200, 
               response: {
                   title: 'Changed title', 
                   body:'Changed body'
               }
           })

           b.click('#update');

           moxios.wait(() => {
               b.see('Your question has been updated', 'p#feedback');
               b.see('Edited title', 'h2#title')
               
               done()
            })

       });

       it('cancels the editing when a cancel is clicked', () => {
            b.click('#edit');

            b.type('New title', '#title');

            b.click('#cancel');

            b.see('The title', 'h2#title')
        });


        


});
