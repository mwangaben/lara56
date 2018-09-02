import {
    mount
} from '@vue/test-utils';
import TasksComponent from '../../resources/assets/js/components/TasksComponent.vue';
import expect from 'expect';
import Helpers from 'mwangaben-vthelpers';


describe('TasksComponent', () => {
    let wrapper, b;
    beforeEach(() => {
        wrapper = mount(TasksComponent);
        b = new Helpers(wrapper, expect);
    });

    it('shows all tasks', () => {
        b.see('Go to the store');
    });

    it('shows completed tasks', () => {
        b.see('Go to work', '#completed-tasks')
        b.see('Go to the store', '#completed-tasks')
    });

    it('shows incompleted tasts', () => {
         b.see('Go to the bank', '#incompleted-tasks');
     });


});
