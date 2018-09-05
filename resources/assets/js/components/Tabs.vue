<template>
    <div class="container">
         <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
                        <a :href="tab.href" @click="selectedTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
                <img :src="imageLink" alt="">
        </div>

        <div class="tab-details">
            <slot></slot>
        </div>
        
    </div>
</template>

<script>
import Tab from "./Tab";
export default {
    components: {Tab},

    data() {
        return {
            tabs: [],

            imageLink: '/img/apple.png'
           
            
        }  
    },
    
    created() {
        this.tabs = this.$children
        
        
    }, 
    methods: {
        selectedTab(clickedTab) {
    
             this.tabs.forEach(tab => {
               tab.isActive = (tab.name == clickedTab.name)
            });
        }
    }
}
</script>
