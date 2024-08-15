import { defineUserConfig } from "vuepress";
import { recoTheme } from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/en/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
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
    authorAvatar: "/head.png",
    docsRepo: "https://GitHub.com/Rain-Serenity/RSerene-Wiki",
    docsBranch: "main",
    docsDir: "/docs",
    locales: {
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        lastUpdatedText: "Last Updated",
        series: {
          "/theme-reco/": [
            {
              text: "module one",
              children: ["home", "theme"],
            },
//            {
//              text: "module two",
//              children: ["api", "plugin"],
//            },
          ],
        },
        navbar: [
          { text: "Home", link: "/" },
          {
            text: "Docs",
            children: [
              { text: "vuepress-reco", link: "/theme-reco/theme" },
              { text: "vuepress-theme-reco", link: "/other/guide" },
            ],
          },
        ],
      },
      '/': {
        selectLanguageName: '简体中文',
        lastUpdatedText: "最后更新",
        selectLanguageText: '选择语言',
        // series 为原 sidebar
        series: {
          "/theme-reco/": [
            {
              text: "module one",
              children: ["home", "theme"],
            },
//            {
//              text: "module two",
//              children: ["api", "plugin"],
//            },
          ],
        },
        navbar: [
          { text: "Home", link: "/" },
          {
            text: "Docs",
            children: [
              { text: "vuepress-reco", link: "/theme-reco/theme" },
              { text: "vuepress-theme-reco", link: "/other/guide" },
            ],
          },
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
