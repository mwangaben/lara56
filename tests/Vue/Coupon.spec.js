import {
    mount
} from '@vue/test-utils';
import Coupon from '../../resources/assets/js/components/Coupon.vue';
import expect from 'expect';
import Helpers from 'mwangaben-vthelpers';


describe('Coupon', () => {
    let wrapper, b;
    beforeEach(() => {
        wrapper = mount(Coupon);
        b = new Helpers(wrapper, expect);
    });

    it('presents the coupon', () => {
        b.domHas('input[name="coupon"]');
    });

    it('validate the coupon when applied', () => {
        b.type('50OFF', '#coupon');

        b.click('button');

        b.see('Coupon applied: 50% OFF');
    });

    it('broadcasts when a coupon is applied', () => {
        b.type('50OFF', '#coupon');

        b.click('button');

        b.emitted('applied', 50);

    });

});

