import { DefaultTheme } from 'vitepress'

const navbar: DefaultTheme.NavItem[] = [
    { text: '首页', link: '/' },
    { text: '学习计划', link: '/handbook/notes/web.md' },
    {
        text: 'Violet',
        items: [
            { text: 'Github', link: 'https://github.com/VioletEvelgadn' },
            { text: '掘金', link: 'https://juejin.cn/user/1533144281127661' }
        ]
    },
    { text: '作者简介', link: '/resume/' }
]

export default navbar
