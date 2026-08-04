import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {

    '/daily-share/': [
        {
            text: '每日分享',
            collapsed: false,
            items: [
                {
                    text: '2026 每日分享',
                    collapsed: true,
                    items: [
                        { text: '202607 每日分享', link: '/daily-share/202607.md' },
                        { text: '202608 每日分享', link: '/daily-share/202608.md' },
                    ]
                }
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
                    collapsed: true,
                    items: [
                        { text: '《老千》三部曲', link: '/resource-share/movie/20260722-the-war-of-flower.md' },
                        { text: '《毒枭》三季全', link: '/resource-share/movie/20260725-narcos.md' },
                        { text: '《神探夏洛克》四季全', link: '/resource-share/movie/20260725-sherlock.md' },
                        { text: '《黄石》五季全', link: '/resource-share/movie/20260725-yellow-stone.md' },
                        { text: '《破产姐妹》六季全', link: '/resource-share/movie/20260725-broke-girls.md' },
                        { text: '《白夜追凶》两季全', link: '/resource-share/movie/20260725-day-and-night.md' },
                        { text: '《死神来了》六部全', link: '/resource-share/movie/20260725-final-destination.md' },
                        { text: '《扫毒风暴》', link: '/resource-share/movie/20260725-the-narcotic-operation.md' },
                        { text: '《暗黑》三季全', link: '/resource-share/movie/20260725-dark.md' },
                        { text: '《爱情公寓》五季全', link: '/resource-share/movie/20260725-ipartment.md' },
                        { text: '《爱，死亡和机器人》四季全', link: '/resource-share/movie/20260725-love-death-robots.md' },
                    ],
                },

                {
                    text: '美女',
                    collapsed: true,
                    items: [
                        { text: '斗鱼温柠热舞', link: '/resource-share/beauty/20260725-wenning-dance.md' },
                        { text: '金琳性感舞蹈', link: '/resource-share/beauty/20260725-jinlin-sexy-dance.md' },
                        { text: '萌七舞蹈热舞', link: '/resource-share/beauty/20260728-mengqi.md' },
                        { text: '韩国丰满女神', link: '/resource-share/beauty/20260801-velvettube.md' },
                        { text: '孙允珠写真合集', link: '/resource-share/beauty/20260804-son-youn-ju.md' },
                    ],
                },

                {
                    text: '软件',
                    collapsed: true,
                    items: [
                        { text: '谷歌三件套', link: '/resource-share/software/20260728-google-suits.md' },
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
                {
                    text: '省钱秘籍',
                    collapsed: true,
                    items: [
                        { text: '购物省钱 App', link: '/hot-picks/20260721-shopping-app.md' },
                    ],
                }
            ]
        }
    ],

}