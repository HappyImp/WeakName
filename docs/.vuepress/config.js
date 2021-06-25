// <script src="../sidebar_value.js" type="model"/>
// import {sidebar} from '../sidebar_value.js';
let sidebar = require('../sidebar_value.js')

module.exports = {
    title: 'Hi Kyluzoier',
    description: '欢迎来到我的 Blog',
    base: "/kyluzoi.io/",
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    // base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        // lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
        displayAllHeaders: true,
        nav: [
            { text: '首页', link: '/' },
            { text: 'Java', link: '/Note/Java/' },
            { text: 'Android', link: '/Note/Android/' },
            // { text: '代码规范', link: '/standard/' },
            // { text: '已封装组件清单', link: '/components/' },
            // { text: '战略合作伙伴', link: 'https://www.baidu.com' },
        ],
        sidebar: {
            '/Note/':[
                {
                    title: 'Java 学习',
                    collapsable: true,
                    children: [
                        'Java/JavaString'
                    ]
                },
                {
                    title: 'Android 学习',
                    collapsable: true,
                    children: [
                        'Android/Jetpack开发笔记','Android/test02'
                    ]
                }
            ],
            '/': [''] //不能放在数组第一个，否则会导致右侧栏无法使用
        }
    },
    // plugins: {
    //     "vuepress-plugin-auto-sidebar": {}
    // }
};





