import Vue from 'vue';
import VueRouter from 'vue-router';
import {router} from './router/router';
import iView from 'iview';
import '../node_modules/iview/dist/styles/iview.css';
import Vuex from 'vuex';
import '@/util/date.js';

Vue.use(iView);
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: {
            username: '',
            password: '',
            loginTime: '',
            loginPosition: ''
        },
        count: 0,
        menuList: [],
        tagList: [],
        currentPath: [
            {
                path: '/main/index',
                name: 'index',
                title: '首页'
            }
        ],
        columnName: [],
        listData: [],
        currentPage: '',
        treeData: {
            title: 'root',
            children: [
                {
                    title: 'child-1',
                    children: [
                        {
                            title: 'child-1-1',
                        },
                        {
                            title: 'child-1-2'
                        }
                    ]
                },
                {
                    'title': 'child-2'
                }
            ]
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },
        updateMenuList() {

        },
        updateTagList(state, payload) {
            this.state.tagList.push(payload);
        },
        removeTagList(state, payload) {
            this.state.tagList.forEach((item, index) => {
                if(item === payload) {
                    this.state.tagList.splice(index, 1);
                }
            });
        },
        removeOtherTagList(state, payload) {
            if (payload === 'index') {
                this.state.tagList = ['index'];
            } else {
                for(var i = this.state.tagList.length -1; i >= 0 ; i--){
                    if(this.state.tagList[i] !== payload && this.state.tagList[i] !== 'index'){
                        this.state.tagList.splice(i, 1);
                    }
                }
            }
        },
        removeAllTagList() {
            this.state.tagList = ['index'];
        },
        setCurrentPath(state, payload) {
            if (payload == 'setting') {
                this.state.currentPath = [
                    {
                        path: '/main/index',
                        name: 'index',
                        title: '首页'
                    },
                    {
                        path: '/main/setting',
                        name: 'setting',
                        title: '设置'
                    }
                ]
            } else if(payload == 'userCenter') {
                this.state.currentPath = [
                    {
                        path: '/main/index',
                        name: 'index',
                        title: '首页'
                    },
                    {
                        path: '/main/userCenter',
                        name: 'userCenter',
                        title: '用户中心'
                    }
                ]
            } else if(payload == 'index') {
                this.state.currentPath = [
                    {
                        path: '/main/index',
                        name: 'index',
                        title: '首页'
                    }
                ]
            } else if(payload == 'tree') {
                this.state.currentPath = [
                    {
                        path: '/main/index',
                        name: 'index',
                        title: '首页'
                    },
                    {
                        path: '/main/components/',
                        name: '',
                        title: '组件'
                    },
                    {
                        path: '/main/components/tree',
                        name: 'tree',
                        title: '树形组件'
                    }
                ]
            } else if(payload == 'list') {
                this.state.currentPath = [
                    {
                        path: '/main/index',
                        name: 'index',
                        title: '首页'
                    },
                    {
                        path: '/main/components/',
                        name: '',
                        title: '组件'
                    },
                    {
                        path: '/main/components/list',
                        name: 'list',
                        title: '列表组件'
                    }
                ]
            } else if(payload == 'chart') {
                this.state.currentPath = [
                    {
                        path: '/main/index',
                        name: 'index',
                        title: '首页'
                    },
                    {
                        path: '/main/components/',
                        name: '',
                        title: '组件'
                    },
                    {
                        path: '/main/components/chart',
                        name: 'chart',
                        title: '图表组件'
                    }
                ]
            } else if(payload == 'dragComponent') {
                this.state.currentPath = [
                    {
                        path: '/main/index',
                        name: 'index',
                        title: '首页'
                    },
                    {
                        path: '/main/components/',
                        name: '',
                        title: '组件'
                    },
                    {
                        path: '/main/components/dragComponent',
                        name: 'dragComponent',
                        title: '可拖动组件'
                    }
                ]
            }
        }
    },
    actions: {
        login(context, payload) {
            if(payload.user == 'admin' && payload.password == "admin123") {
                console.log('login success');
                this.state.user.loginTime = new Date().Format("yyyy-MM-dd");
            } else {
                console.log('login failed');
            }
        },
        getList(context, payload) {
            var vx = this;
            $.ajax({
                url: 'list.json',
                dataType: "json",
                success: function(data) {
                    vx.state.columnName = data.columns4;
                    vx.state.listData = data.data1;
                },
                error: function() {
                    console.log('fail');
                }
            })
        },
        getUser(context, payload) {
            var vx = this;
            $.ajax({
                url: 'user.json',
                dataType: "json",
                success: function(data) {
                    vx.state.user.username = data.username;
                    vx.state.user.loginPosition = data.loginPosition;
                },
                error: function() {
                    console.log('fail');
                }
            })
        },
        getTreeData(context, payload) {
            return this.state.treeData;            
        }
    }
});

new Vue({
    router: router,
    store,
    data() {
        return {
            a: 'main1'
        };
    }
}).$mount('#app')
