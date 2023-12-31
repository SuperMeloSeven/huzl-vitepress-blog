import { defineConfig } from 'vitepress'
import { nav } from './relaConf'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/huzl-vitepress-blog/',
  title: "Huzl-Blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // logo: '/avatar.png',
  }
})
