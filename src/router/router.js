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
import tree from '@/views/tree/tree.vue';
import chart from '@/views/chart/chart.vue';
import dragComponent from '@/views/draggable/dragComponent.vue';
import mytree from '@/views/tree/custom/mytree.vue'

Vue.use(VueRouter);
Vue.use(global_);


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
    children: [
        {
            path: 'infos',
            name: 'infos',
            component: infos
        },
        {
            path: 'setting',
            name: 'setting',
            component: setting,
            children: [
                {
                    path: 'manage',
                    name: 'manage0',
                    component: manage
                }
            ]
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
            path: 'components/tree',
            name: 'tree',
            // component: tree
            component: mytree
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
            path: 'componenets/testPage',
            name: 'mytree',
            component: mytree
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
    mainRouter
];

const RouterConfig = {
    routes: routers
};

export const router = new VueRouter(RouterConfig)
