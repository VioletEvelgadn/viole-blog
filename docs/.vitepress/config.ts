import { defineConfig } from 'vitepress'
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineConfig(
    {
        title: 'Violet 总结文档',
        lang: 'zh-CN',
        // 主题配置
        themeConfig: {
            logo: '/',
            outline: [2, 3],
            nav: navbar,
            sidebar:sidebar
        }
    }
)

