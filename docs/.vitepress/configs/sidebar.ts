import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {

    '/daily-share/': [
        {
            text: '每日分享',
            collapsed: false,
            items: [
                { text: '202607 每日分享', link: '/daily-share/202607.md' },
            ]
        }
    ],

    '/resource-share/': [
        {
            text: '资源分享',
            collapsed: false,
            items: [
                { text: '202607 每日分享', link: '/resource-share/202607.md' },
            ]
        }
    ],

    '/hot-picks/': [
        {
            text: '热门精选',
            collapsed: false,
            items: [
                { text: '购物省钱 App', link: '/hot-picks/20260721-shopping-app.md' },
            ]
        }
    ],

}