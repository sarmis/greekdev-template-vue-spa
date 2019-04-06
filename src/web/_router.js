import Vue from "vue";
    
import VueRouter from 'vue-router';

Vue.use(VueRouter)


// 1. Import Components
import home    from './vues/home.vue'
import about   from './vues/about.vue'
import profile from './vues/profile.vue'


// 2. Define some routes
const routes = [
    { path: '/'       , component: home    },   
    { path: '/profile', component: profile },
    { path: '/about'  , component: about   }
]


// 3. Create & Export the router 
export const router = new VueRouter({
    routes: routes
})

