import axios from 'axios';
import user from '@/data/user.js';

export default {
    login(context, payload) {
        if (HAS_SERVER) {
            axios.post('/login', {
                    username: payload.username,
                    password: payload.password
                })
                .then(function(response) {
                    if (response.data == 'success') {
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve()
                            }, 1000)
                        });
                    } else {
                        return new Promise((resolve, reject) => {
                            reject();
                        });
                    }
                })
                .catch(function(error) {
                    console.log(error + "=======");
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
