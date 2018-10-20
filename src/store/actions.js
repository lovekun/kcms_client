import axios from 'axios';
import user from '@/data/user.js';
import mutations from './mutations';
import {
	store
} from './store.js';

export default {
	login(context, payload) {
		var vx = this;
		return new Promise(function(resolve, reject) {
			axios.post(baseURL + '/login', {
				username: payload.username,
                password: payload.password
			}).then(function(response) {
				console.log(response);
				if (response.data.data == 'success') {
					store.commit('updateUserInfo', user);
					resolve('success')
				} else {
					console.log('dev server: login failed');
					reject('password is incorrect');
				}
			})
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
