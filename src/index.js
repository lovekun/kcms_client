import Vue from "vue";
import {
	router
} from "./router/router";
import iView from "iview";
import "../node_modules/iview/dist/styles/iview.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/util/date.js";
import {
	store
} from "@/store/store.js";
import * as Cookies from "js-cookie";
import "./message/stomp.js";

Vue.use(iView);
Vue.use(ElementUI);
Vue.prototype.$cookie = Cookies;
new Vue({
	router: router,
	store: store,
	data() {
		return {
			a: "main1"
		};
	},
	methods: {
		init() {
			this.$store.state.mainPageType = "main0";
		}
	},
	mounted: function() {
		this.init();
		// var url = "ws://localhost:61614/stomp";
		// var client = Stomp.client(url);
		// var connect_callback = function() {
		//     console.log('connected......');
		//     client.send("/queue/test", {
		//         priority: 9
		//     }, "Hello, STOMP");
		// }
		// client.connect('admin', 'admin', connect_callback);
	}
}).$mount("#app");
