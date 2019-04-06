<template lang="pug">
    div
        nav.navbar
            router-link(to="/") home
            router-link(to="/profile") profile
            router-link(to="/about") about
        router-view
</template>


<script>
    import Vue from "vue";
    import {router} from './_router.js';
    import {store} from './_store.js'
   
    export default Vue.extend({ 
        store: store,
        router: router    
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