import { defineConfig } from 'vitepress'

export default defineConfig(
    {
        title: 'Violet 总结文档',
        lang: 'zh-CN',
        themeConfig: {
            nav: [
                { text: '首页', link: '/' },
                {
                    text: 'Violet',
                    items: [
                        { text: 'Github', link: 'https://github.com/VioletEvelgadn' },
                        { text: '掘金', link: 'https://juejin.cn/user/1533144281127661' }
                    ]
                }
            ]
        }
    }
)
