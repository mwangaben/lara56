
<template>
    <div>
        <p class="count" v-text="count"></p>
        <button @click="count++" id="increament">Increament</button>
        <button  v-if="count > 0" @click="count--" id="decreament">Decreament</button>
    </div>
</template>

<script>
export default {
    data() {
         return {
             count: 0
         }
    }
}
</script>

