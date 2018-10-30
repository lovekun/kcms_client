import Vue from 'vue';
import '../../node_modules/iview/dist/styles/iview.css';
import Vuex from 'vuex';
import '@/util/date.js';
import state from './state';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions
});

export {
    store
}
