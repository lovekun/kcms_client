import VueRouter from "vue-router";
import Vue from "vue";
import login from "@/views/login.vue";
import main from "@/views/main.vue";
import setting from "@/views/setting.vue";
import index from "@/views/index.vue";
import list from "@/views/list.vue";
import global_ from "@/util/global.vue";
import chart from "@/views/chart.vue";
import dragComponent from "@/views/dragComponent.vue";
import treeShow from "@/views/treeShow.vue";
import markdown from "@/views/markdown.vue";
import horizontalScrollList from "@/views/horizontalScrollList.vue";
import editableList from "@/views/editableList.vue";
import exportableList from "@/views/exportableList.vue";
import multiShowList from "@/views/multiShowList.vue";

Vue.use(VueRouter);
Vue.use(global_);

const indexRouter = {
	path: "/",
	name: "indexpage",
	meta: {
		title: "默认页面"
	},
	component: main
};

const loginRouter = {
	path: "/login",
	name: "login",
	meta: {
		title: "Login - 登录"
	},
	component: login
};

const mainRouter = {
	path: "/main",
	name: "main",
	meta: {
		title: "Main - 首页"
	},
	component: main,
	children: [
	{
		path: "setting",
		name: "setting",
		component: setting
	},
	{
		path: "components/tree",
		name: "tree",
		component: treeShow
	},
	{
		path: "components/list",
		name: "list",
		component: list
	},
	{
		path: "components/chart",
		name: "chart",
		component: chart
	},
	{
		path: "components/dragComponent",
		name: "dragComponent",
		component: dragComponent
	},
	{
		path: "components/markdown",
		name: "markdown",
		component: markdown
	},
	{
		path: "components/testPage",
		name: "test",
		component: multiShowList
	},
	{
		path: "table/horizontalScrollList",
		name: "horizontalScrollList",
		component: horizontalScrollList
	},
	{
		path: "table/editableList",
		name: "editableList",
		component: editableList
	},
	{
		path: "table/exportableList",
		name: "exportableList",
		component: exportableList
	},
	{
		path: "table/multiShowList",
		name: "multiShowList",
		component: multiShowList
	},
	{
		path: "index",
		name: "index",
		meta: {
			title: "Main - 首页"
		},
		component: index
	}


	]
};

const routers = [
	indexRouter,
	loginRouter,
	mainRouter
];

const RouterConfig = {
	routes: routers
};

export const router = new VueRouter(RouterConfig);
