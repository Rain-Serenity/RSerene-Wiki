import { defineUserConfig } from "vuepress";
import { recoTheme } from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/en/': {
      lang: 'en-US',
      title: '雨润服务器 Wiki',
      description: '欢迎来到 RSerene Wiki 主页',
    },
    '/': {
      lang: 'zh-CN',
      title: '雨润服务器 Wiki',
      description: '欢迎来到 RSerene Wiki 主页',
    },
  },
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/favicons.ico",
    author: "Chosen_1st",
    docsBranch: "main",
    docsDir: "/docs",
    locales: {
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        lastUpdatedText: "Last Updated",
        series: {
          '/guide/': [{
            text: '玩家手册',
            children: ['/guide/introduction.md', '/guide/settings.md', '/guide/command.md', '/guide/faq.md', '/guide/sponsor.md'],
          }],
        },
        navbar: [
          { text: "主页", link: "/" },
          { text: '玩家手册', children: [ {text: '简单介绍', link: '/guide/introduction.html'}, {text: '基本设定', link: '/guide/settings.html'}, {text: '指令列表', link: '/guide/command.html'}, {text: '常见问题', link: '/guide/faq.html'} ] },
          { text: '相关链接', children: [ {text: 'MineBBS', link: 'https://www.MineBBS.com/threads/1-21.28390/'}, {text: 'GitHub', link: 'https://GitHub.com/Rain-Serenity/'}, {text: 'Minecraft Wiki', link: 'https://Minecraft.Wiki/'} ]}
        ],
      },
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        lastUpdatedText: "最后更新",
        // series 为原 sidebar
        series: {
          '/guide/': [{
            text: '玩家手册',
            children: ['/guide/introduction.md', '/guide/settings.md', '/guide/command.md', '/guide/faq.md', '/guide/sponsor.md'],
          }],
        },
        navbar: [
          { text: "主页", link: "/" },
          { text: '玩家手册', children: [ {text: '简单介绍', link: '/guide/introduction.html'}, {text: '基本设定', link: '/guide/settings.html'}, {text: '指令列表', link: '/guide/command.html'}, {text: '常见问题', link: '/guide/faq.html'} ] },
          { text: '相关链接', children: [ {text: 'MineBBS', link: 'https://www.MineBBS.com/threads/1-21.28390/'}, {text: 'GitHub', link: 'https://GitHub.com/Rain-Serenity/'}, {text: 'Minecraft Wiki', link: 'https://Minecraft.Wiki/'} ]}
        ],
      },
    },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
