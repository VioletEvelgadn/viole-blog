import { defineConfig } from 'vitepress'
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineConfig(
    {
        title: 'Violet 总结文档',
        lang: 'zh-CN',
        base: '/ viole-blog/',
        head: [
            ['link', { rel: 'icon', href: '/publice/top1.png' }],
        ],
        // 主题配置
        themeConfig: {
            logo: '/',
            outline: [2, 3],
            nav: navbar,
            sidebar:sidebar,
            // 底部
            footer: {
                message: '总结文档',
                copyright: 'Copyright © 2023 Powered by Violet',
            },
            // 底部文案
            docFooter: {
                next: '下一篇',
                prev: '上一篇'
            }
        }
    }
)

