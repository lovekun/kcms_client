import Mock from 'mockjs';

export default Mock.mock(baseURL + '/login', {
	'name': 'lovekun',
	'age|1-100': 100,
	'color': '@color',
	'data': 'success'
});
