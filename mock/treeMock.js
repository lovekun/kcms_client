import Mock from 'mockjs';

export default Mock.mock(baseURL + '/getTree', {
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
