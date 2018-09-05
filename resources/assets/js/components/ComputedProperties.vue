<template>
    <div class="col-md-12">
        <input type="text" name="reversed" v-model="message">
    
        <p class="mt-3" v-text="reversedMessage"></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: ''
        }
    },

    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        }
    }
}
</script>

