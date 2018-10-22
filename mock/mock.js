import Mock from 'mockjs';

var login =  Mock.mock(baseURL + '/login', {
	'name': 'lovekun1',
	'age|1-100': 100,
	'color': '@color',
	'data': 'success'
});

var list = Mock.mock(baseURL + 'getList', {
    'data': [
    {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park'
    },
    {
        name: 'Jim Green',
        age: 24,
        address: 'London No. 1 Lake Park'
    },
    {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park'
    },
    {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park'
    }
    ]
});

var tree = Mock.mock(baseURL + '/getTree', {
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
});

export {login, list, tree}
