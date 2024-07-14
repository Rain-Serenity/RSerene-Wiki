import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from '@vuepress/cli'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { viteBundler } from '@vuepress/bundler-vite'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default defineUserConfig({
  head:[["link", { rel: "icon", href: "/favicons.ico" }]],
  bundler: viteBundler(),
  description: '欢迎来到 RSerene Wiki 主页',
  lang: 'zh-CN',
  plugins: [
    backToTopPlugin(),
    mediumZoomPlugin({
      // 配置项
      selector: 'img.img-zoomable',
      zoomOptions: {
        margin: 16
      }
    }),
    nprogressPlugin(),
    registerComponentsPlugin({
      // 配置项
    }),
    searchPlugin({
      // 配置项
      locales: {
        '/': {placeholder: '搜索'}
      },
    }),
  ],

  theme: defaultTheme({
    logo: '/images/ico.png',
    navbar: [
      { text: '首页', link: '/' },
      { text: '玩家手册', children: [ {text: '简单介绍', link: '/guide/introduction.html'}, {text: '基本设定', link: '/guide/settings.html'}, {text: '指令列表', link: '/guide/command.html'}, {text: '常见问题', link: '/guide/faq.html'} ] },
      { text: '相关链接', children: [ {text: 'MineBBS', link: 'https://www.MineBBS.com/threads/1-21.28390/'}, {text: 'GitHub', link: 'https://GitHub.com/Rain-Serenity/'}, {text: 'Minecraft Wiki', link: 'https://Minecraft.Wiki/'} ]}
    ],
    sidebar: {
      '/guide/': [{
        text: '玩家手册',
        children: ['/guide/introduction.md', '/guide/settings.md', '/guide/command.md', '/guide/faq.md', '/guide/sponsor.md'],
      }],
    },
  }),

  title: '雨润服务器 Wiki',
})
