import axios from 'axios';
import user from '@/data/user.js';
import mutations from './mutations';
import {
	store
} from './store.js';
import data from '@/../mock/mock.js';
import data1 from '@/../mock/listMock.js';
import treeData from '@/../mock/treeMock.js';

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
		return new Promise(function(resolve, reject) {
			axios.post(baseURL + 'getList', {

			}).then(function(response) {
				console.log(response);
                resolve(response.data.data);
			})
		})
	},
	getTreeData(context, payload) {
        var vx = this;
		return new Promise(function(resolve, reject) {
			axios.post(baseURL + 'getTree', {

			}).then(function(response) {
				console.log(response);
                resolve(response.data.data);
			})
		})
		// return this.state.treeData;
	}
}
