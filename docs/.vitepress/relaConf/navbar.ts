import { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/' },
  { text: 'Examples', link: '/markdown-examples' },
  { text: '关于我', items: [
    { text: 'Github', link: 'https://github.com/SuperMeloSeven' },
  ] },
]