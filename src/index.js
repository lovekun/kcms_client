import Vue from 'vue';
import VueRouter from 'vue-router';
import {router} from './router/router';
import iView from 'iview';
import '../node_modules/iview/dist/styles/iview.css';
import Vuex from 'vuex';
import '@/util/date.js';
import {store} from '@/store/store.js';
import * as Cookies from "js-cookie";


Vue.use(iView);
Vue.prototype.$cookie = Cookies
new Vue({
    router: router,
    store: store,
    data() {
        return {
            a: 'main1'
        };
    }
}).$mount('#app')
