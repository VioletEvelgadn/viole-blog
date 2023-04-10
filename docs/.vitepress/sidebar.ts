import { DefaultTheme } from 'vitepress'
import learnSidebar from '../handbook/sidebar'

const sidebar: DefaultTheme.Sidebar = {
    // 学习趋势
    '/handbook/': learnSidebar,
}

export default sidebar
