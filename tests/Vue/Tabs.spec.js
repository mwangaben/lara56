import {mount} from '@vue/test-utils';
import Tabs from '../../resources/assets/js/components/Tabs.vue';
import expect from 'expect';
import Helpers from 'mwangaben-vthelpers';
 
 
describe('Tabs', () => {
    let  wrapper, b;
    beforeEach(() => {
        wrapper = mount(Tabs);

        wrapper.setData({
            tabs : [
                {name : 'About Us', isActive: true},
                {name : 'Music', isActive: false},
                {name : 'Pictures', isActive:false}
            ]
        })
        b = new Helpers(wrapper, expect);
    });
   
    it('it displays tabs', () => {
         b.see('About Us');
     });

     it('adds is-active class to the first element by default', () => {
         b.hasAClass('is-active', "li:first-child");

     });

     it('can change the active tab to a selected', () => {
          b.click('li:nth-child(2) a');
          b.hasAClass('is-active', 'li:nth-child(2)');
      });

      it('has a link that reflects the tab name', () => {
           b.click('li:nth-child(1) a');


        //    hasAttribute('about-us', 'href', 'li:first-child a')
       });


       it('checks if the bound data image works', () => {
            hasAttribute('/img/apple.png', 'src', 'img');
        });


       let hasAttribute = ((itsValue, attr,  element) => {
           
              let node = b.find(element);
           
              expect(node.attributes()[attr]).toBe(itsValue);
       })
        
});