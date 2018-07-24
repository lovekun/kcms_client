import axios from 'axios';
import user from '@/data/user.js';

export default {
    login(context, payload) {
        console.log('==================');
        if(HAS_SERVER) {
            axios.post('/login', {username: payload.username, password: payload.password})
                .then(function(response) {
                    if(response.data == 'success') {
                        console.log("response:----" + response);
                    } else {
                        console.log(response);
                        console.log('login fail' + response);
                    }
                })
                .catch(function(error){
                    console.log(error);
                })
        } else {
            console.log(user.username + "====" + user.password);
            if(payload.username == 'admin' && payload.password == "admin123") {
                console.log('dev server: login success');
                this.state.user.loginTime = new Date().Format("yyyy-MM-dd");
            } else {
                console.log('dev server: login failed');
            }
        }
    },
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
}
