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
                {
                    text: '影视',
                    collapsed: false,
                    items: [
                        { text: '《老千》三部曲', link: '/resource-share/movie/20260722-the-war-of-flower.md' },
                        { text: '《毒枭》三季全', link: '/resource-share/movie/20260725-narcos.md' },
                        { text: '《神探夏洛克》四季全', link: '/resource-share/movie/20260725-sherlock.md' },
                        { text: '《黄石》五季全', link: '/resource-share/movie/20260725-yellow-stone.md' },
                        { text: '《破产姐妹》六季全', link: '/resource-share/movie/20260725-broke-girls.md' },
                        { text: '《白夜追凶》', link: '/resource-share/movie/20260725-day-and-night.md' },
                    ],
                },
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