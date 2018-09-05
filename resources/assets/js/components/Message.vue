<template>
    <div class="container">
        <article v-if="show" class="message">
            <div class="message-header">
                <p>{{ title }}</p>
                <button @click="show =false" class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    </div>
</template>

<script>
export default {
    props: ['title','body'],

    data() {
        return {
            show: true
        }
    }

}
</script>

