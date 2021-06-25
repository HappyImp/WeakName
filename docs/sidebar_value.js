// 侧边栏配置
module.exports={
    '/Note/Android':[
        {
            title: 'Android 学习',
            collapsable: true,
            children: ['test02', 'test03']

        }
    ],
    '/Note/':[
        {
            title: 'Java 学习',
            collapsable: false,
            children: [
                'Java/test01','Java/JavaString'
            ]
        },
        {
            title: 'Android 学习',
            collapsable: false,
            children: [
                'Android/Jetpack开发笔记','Android/test02'
            ]
        }
    ],
    '/Note/Java':[
        {
            title: 'Java 学习',
            collapsable: true,
            children: ['test01','JavaString']

        }
    ],
    '/': [''] //不能放在数组第一个，否则会导致右侧栏无法使用
};

// export var sidebar =




