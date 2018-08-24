<template>
    <div>

        <input type="text" name="coupon" id="coupon" v-model="code">
        <button @click="validate">Submit</button>

        <p v-text="feedback"></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            code   : '',
            coupons: [
                {
                code    : "60OFF",
                message : "60% OFF",
                discount: 60
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

        feedback() {
            return this.valid ? `Coupon applied: ${this.message}`: `Invalid coupon`;
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

