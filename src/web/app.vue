<template lang="pug">
    v-app
        v-toolbar(app)
            v-toolbar-side-icon
            v-toolbar-title Home
            v-spacer
            v-toolbar-items
                v-btn(flat to="/") home
                v-btn(flat to="/profile") profile
                v-btn(flat to="/about") about    
        
        v-navigation-drawer(v-model="drawer" app fixed mobile-break-point=640)
            v-list()               
                v-list-tile( to="/profile")
                    v-list-tile-action
                        v-icon account_circle
                    v-list-tile-title John
              
                v-divider
                
                v-list-tile(to="/" exact)
                    v-list-tile-action
                        v-icon home
                    v-list-tile-title Home

                v-list-tile(to="/about" exact)
                    v-list-tile-action
                        v-icon notes
                    v-list-tile-title about 
        
        
        v-content           
            router-view
</template>


<script>
    import Vue from "vue";
    import {router} from './_router.js';
    import {store} from './_store.js'
   
    export default Vue.extend({ 
        data: () => ({drawer: null}),

        store: store,
        router: router    
    });    
</script>