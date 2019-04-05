import Vue from "vue";
    
import VueRouter from 'vue-router';

Vue.use(VueRouter)


// Import Components
import home from './vues/home.vue'
import about from './vues/about.vue'
import bar from './vues/bar.vue'

// 2. Define some routes
const routes = [
  { path: '/'      , component: home  },
  { path: '/about' , component: about },
  { path: '/bar'   , component: bar   }
]

// 3. Create & Exprot the router 
export const router = new VueRouter({
  routes: routes
})

