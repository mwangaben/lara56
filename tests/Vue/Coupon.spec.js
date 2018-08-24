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

        wrapper.setData({ coupons : [
                {
                    code: "50OFF",
                    message: "50% OFF",
                    discount: 50
                }
        ] })
    });

    it('presents the coupon', () => {
        b.domHas('input[name="coupon"]');
    });

    it('validate a real coupon when applied', () => {
        b.type('50OFF', '#coupon');

        b.click('button');

        b.see('Coupon applied: 50% OFF');
    });

    it('validates a fake coupon code', () => {
         b.type('45)FF', '#coupon');

         b.click('button');

         b.see('Invalid coupon')
     });

    it('broadcasts when a coupon is applied', () => {
        b.type('50OFF', '#coupon');

        b.click('button');

        b.emitted('applied', 50);

    });

});

