import VueRouter from 'vue-router';
import Vue from 'vue';
import login from '@/views/login.vue';
import main from '@/views/layout/main.vue';
import setting from '@/views/components/setting.vue';
import manage from '@/views/components/manage.vue';
import index from '@/views/index.vue';
import infos from '@/views/components/infos.vue';
import list from '@/views/list/list.vue';
import global_ from '@/util/global.vue';
import userCenter from '@/views/components/userCenter.vue';
import tree1 from '@/views/tree/tree1.vue';
import chart from '@/views/chart/chart.vue';
import dragComponent from '@/views/draggable/dragComponent.vue';
import tree0 from '@/views/tree/custom/tree0.vue';
import treeShow from '@/views/showPage/treeShow.vue';
import card from '@/views/card/card.vue';
import markdown from "@/views/editor/markdown.vue";
import pageList from "@/views/list/pageList.vue";
import horizontalScrollList from "@/views/list/horizontalScrollList.vue"
import editableList from "@/views/list/editableList.vue"
import exportableList from "@/views/list/exportableList.vue"
import multiShowList from "@/views/list/multiShowList.vue"
import locking from "@/views/components/components/locking-page.vue";
import message from "@/views/message/message.vue";

Vue.use(VueRouter);
Vue.use(global_);

const lockingRouter = {
    path: '/locking',
    name: 'locking',
    component: locking
};


const indexRouter = {
    path: '/',
    name: 'indexpage',
    meta: {
        title: '默认页面'
    },
    component: main
};

const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: login
};

const mainRouter = {
    path: '/main',
    name: 'main',
    meta: {
        title: 'Main - 首页'
    },
    component: main,
    children: [{
            path: 'infos',
            name: 'infos',
            component: infos
        },
        {
            path: 'setting',
            name: 'setting',
            component: setting,
            children: [{
                path: 'manage',
                name: 'manage0',
                component: manage
            }]
        },
        {
            path: 'manage',
            name: 'manage',
            component: manage
        },
        {
            path: 'userCenter',
            name: 'userCenter',
            component: userCenter,
            meta: {
                title: '用户中心'
            },
        },
        {
            path: 'message',
            name: 'message',
            component: message
        },
        {
            path: 'components/tree',
            name: 'tree',
            // component: tree
            component: treeShow
        },
        {
            path: 'components/list',
            name: 'list',
            component: list
        },
        {
            path: 'components/chart',
            name: 'chart',
            component: chart
        },
        {
            path: 'components/dragComponent',
            name: 'dragComponent',
            component: dragComponent
        },
        {
            path: 'components/markdown',
            name: 'markdown',
            component: markdown
        },
        {
            path: 'components/testPage',
            name: 'test',
            component: multiShowList
        },
        {
            path: 'table/horizontalScrollList',
            name: 'horizontalScrollList',
            component: horizontalScrollList
        },
        {
            path: 'table/editableList',
            name: 'editableList',
            component: editableList
        },
        {
            path: 'table/exportableList',
            name: 'exportableList',
            component: exportableList
        },
        {
            path: 'table/multiShowList',
            name: 'multiShowList',
            component: multiShowList
        },
        {
            path: 'index',
            name: 'index',
            meta: {
                title: 'Main - 首页'
            },
            component: index
        }


    ]
};

const routers = [
    indexRouter,
    loginRouter,
    mainRouter,
    lockingRouter
];

const RouterConfig = {
    routes: routers
};

export const router = new VueRouter(RouterConfig)
