import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        name: 'Unknown'
    },

    mutations: {
        setName(state, name) {
            Vue.set(state, 'name', name);
        }
    }


});