<template>
    <div>

        <input type="text" name="coupon" id="coupon" v-model="code">
        <button @click="validate">Submit</button>

        <p v-if="valid">Coupon applied: {{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            code   : '',
            coupons: [
                {
                code    : "50OFF",
                message : "50% OFF",
                discount: 50
            },

            {
                code    : "ENTIRELYFREE",
                message : "Entirely free",
                discount: 100
            }
            ], 
            valid: false
        }

    },

    computed: {
        message(){
        return this.selectedCoupon.message

        }, 

        selectedCoupon() {
            return this.coupons.find(coupon => coupon.code == this.code);
        }
    },
    
    methods: {
        validate() {
            this.valid = !! this.selectedCoupon;
            
            if (this.valid) {
                this.$emit('applied', this.selectedCoupon.discount);
            }
        },

    }
}
</script>

