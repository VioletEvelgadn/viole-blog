import { DefaultTheme }  from 'vitepress'

const frameworkMiniSidebar: DefaultTheme.SidebarItem [] = [
    {
        text: ' 学习趋势',
        items:[
            { text: '前端学习路线', link: '/handbook/notes/web.md' },
            { text: '学习CSS3', link: '/handbook/notes/css.md' },
            { text: '学习javaScript', link: '/handbook/notes/javaScript.md' },
            { text: '学习TypeScript', link: '/handbook/notes/TypeScript.md' },
            { text: '学习vue', link: '/handbook/notes/vue.md' },
            { text: '学习React', link: '/handbook/notes/react.md' },
            { text: '学习Node.js', link: '/handbook/notes/node.md' }
        ]
    }
]

export default frameworkMiniSidebar
