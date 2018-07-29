import Vue from 'vue';
import VueRouter from 'vue-router';
import {
    router
} from './router/router';
import iView from 'iview';
import '../node_modules/iview/dist/styles/iview.css';
import Vuex from 'vuex';
import '@/util/date.js';
import {
    store
} from '@/store/store.js';
import * as Cookies from "js-cookie";
import './message/stomp.js';

Vue.use(iView);
Vue.prototype.$cookie = Cookies;
new Vue({
    router: router,
    store: store,
    data() {
        return {
            a: 'main1'
        };
    },
    mounted: function() {
        console.log('aaaa');
        var url = "ws://localhost:61614/stomp";
        var client = Stomp.client(url);
        var connect_callback = function() {
            console.log('connected......');
            client.send("/queue/test", {
                priority: 9
            }, "Hello, STOMP");
        }
        client.connect('admin', 'admin', connect_callback);
    }
}).$mount('#app');
