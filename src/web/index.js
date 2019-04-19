import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont'
Vue.use(Vuetify);

import App from './app.vue';
import './style.scss';


new Vue(App).$mount('#vueapp');