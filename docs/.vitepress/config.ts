import { defineConfig } from 'vitepress'
import navbar from "./navbar";

export default defineConfig(
    {
        title: 'Violet 总结文档',
        lang: 'zh-CN',
        themeConfig: {
            logo: '/',
            nav: navbar
        }
    }
)

//https://avatars.githubusercontent.com/u/128378853?v=4
