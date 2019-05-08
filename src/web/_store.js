import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        drawer: null, // state of app drawer (null -> always open in large displays)
        name: 'Unknown'
    },

    // Usege: $store.commit('mutationan', parameter)
    mutations: {
        drawerToggle(state) {
        },
        setName(state, name) {
            Vue.set(state, 'name', name);
        }
    }


});