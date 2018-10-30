export default {
    user: {
        username: '',
        password: '',
        lastLoginTime: '',
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
    },
    isCollapsed: false,
    mainPageType: ''

}
