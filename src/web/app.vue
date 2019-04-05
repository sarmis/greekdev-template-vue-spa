<template lang="pug">
    div
        nav.navbar
            router-link(to="/") home
            router-link(to="/about") about
            router-link(to="/bar") bar
        router-view
</template>


<script>
    import Vue from "vue";
    import {router} from './_router.js';
   
    export default Vue.extend({ 
        router: router,       
    });    
</script>


<style lang="scss" scoped>
    
    .navbar {
        text-align: center;
        
        * + * {
            margin-left: 8px;
        }
    }
</style>