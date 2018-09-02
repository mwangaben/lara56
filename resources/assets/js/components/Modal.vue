<template>
    <div class="container">
        <div v-if="showModal" class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <h1 class="display-4">{{ title }}</h1>

                    <p class="mt-2">{{ body }}</p>
                </div>
            </div>
            <button @click="showModal = false" class=" modal-close is-large" aria-label="close"></button>
        </div>
        <button @click="showModal = true" class="btn btn-primary show-modal">Show Modal</button>
    </div>
</template>

<script>
    export default {
        props: ['dataTitle', 'dataBody'],
        data() {
            return {
                title    : this.dataTitle,
                body     : this.dataBody,
                showModal: false
            }
        }
    
    
    }
</script>

