import axios from 'axios';
import user from '@/data/user.js';
import mutations from './mutations';
import {store} from './store.js';

export default {
    login(context, payload) {
        var vx = this;
        return new Promise( function (resolve, reject) {
            if (HAS_SERVER) {
                axios.post('/login', {
                    username: payload.username,
                    password: payload.password
                }).then(function(response) {
                    if(response.data == 'success') {
                        let user = {"username": payload.username, "password": payload.password};
                        store.commit('updateUserInfo', user);  
                        resolve('success')
                    } else {
                        reject('password is incorrect');
                    }
                })
            } else {
                console.log(user.username + "====" + user.password);
                if (payload.username == 'admin' && payload.password == "admin123") {
                    console.log('dev server: login success');
                    this.state.user.loginTime = new Date().Format("yyyy-MM-dd");
                } else {
                    console.log('dev server: login failed');
                }
            }
        })
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
    getTreeData(context, payload) {
        return this.state.treeData;
    }
}
