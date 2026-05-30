import { defineUserConfig } from "vuepress";
import { recoTheme } from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '雨润服务器 Wiki',
      description: '欢迎来到 RSerene Wiki 主页',
    },
    '/en-us/': {
      lang: 'en-US',
      title: 'RSerene Wiki',
      description: 'Welcome to the RSerene Wiki homepage',
    },
  },
  bundler: viteBundler(),
  theme: recoTheme({
    logo: "/images/logo.png",
    author: "Chosen_1st",
    docsBranch: "main",
    docsDir: "/docs",
    docsRepo: 'https://github.com/Rain-Serenity/RSerene-Wiki',
    locales: {
      '/': {
        logo: "/images/logo.png",
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        lastUpdatedText: "最后更新",
        // series 为原 sidebar
        series: {
          '/guide/': [{
            text: '玩家手册',
            children: ['/guide/introduction.md', '/guide/settings.md', '/guide/command.md', '/guide/faq.md'],
          }],
          '/about/': [{
            text: '关于服务器',
            children: ['/about/rules.md', '/about/history.md', '/about/contributions.md', '/about/sponsor.md'],
          }],
        },
        navbar: [
          { text: "主页", link: "/" },
          { text: '玩家手册', children: [ {text: '简单介绍', link: '/guide/introduction.html'}, {text: '基本设定', link: '/guide/settings.html'}, {text: '指令列表', link: '/guide/command.html'}, {text: '常见问题', link: '/guide/faq.html'} ] },
          { text: '关于我们', children: [ {text: '服务器规定', link: '/about/rules.html'}, {text: '服务器历史', link: '/about/history.html'}, {text: '服务器贡献者', link: '/about/contributions.html'}, {text: '赞助服务器', link: '/about/sponsor.html'} ] },
          { text: '相关链接', children: [ {text: 'GitHub', link: 'https://GitHub.com/Rain-Serenity/'}, {text: 'MCBBS纪念版', link: 'https://www.MCBBS.co/thread-5031-1-1.html'}, {text: 'MineBBS', link: 'https://www.MineBBS.com/threads/1-21-1.28390/'}, {text: 'Minecraft Wiki', link: 'https://Minecraft.Wiki/'} ]}
        ],
        bulletin: {
          body: [
            {
              type: 'text',
              content: `🎉🎉🎉 服务器已经更新到26.1.2。`,
              style: 'font-size: 12px;'
            },
            { type: 'hr' },
            { type: 'title', content: 'QQ 群' },
            {
              type: 'text',
              content: `
          <ul>
            <li>QQ群：902620497</li>
          </ul>`,
              style: 'font-size: 12px;'
            },
            { type: 'hr', },
            {
              type: 'buttongroup',
              children: [
                { text: '赞助', link: '/about/sponsor.html' }
              ]
            }
          ],
        }
      },
      '/en-us/': {
        logo: "/images/logo.png",
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        lastUpdatedText: "Last Updated",
        series: {
          '/en-us/guide/': [{
            text: 'Player Manual',
            children: ['/en-us/guide/introduction.md', '/en-us/guide/settings.md', '/en-us/guide/command.md', '/en-us/guide/faq.md'],
          }],
          '/en-us/about/': [{
            text: 'About Server',
            children: ['/en-us/about/rules.md', '/en-us/about/history.md', '/en-us/about/contributions.md', '/en-us/about/sponsor.md'],
          }],
        },
        navbar: [
          { text: "Home", link: "/en-us/" },
          { text: 'Player Manual', children: [ {text: 'Introduction', link: '/en-us/guide/introduction.html'}, {text: 'Settings', link: '/en-us/guide/settings.html'}, {text: 'Command List', link: '/en-us/guide/command.html'}, {text: 'FAQ', link: '/en-us/guide/faq.html'} ] },
          { text: 'About Us', children: [ {text: 'Server Rules', link: '/en-us/about/rules.html'}, {text: 'Server History', link: '/en-us/about/history.html'}, {text: 'Contributors', link: '/en-us/about/contributions.html'}, {text: 'Sponsor', link: '/en-us/about/sponsor.html'} ] },
          { text: 'Related Links', children: [ {text: 'GitHub', link: 'https://GitHub.com/Rain-Serenity/'}, {text: 'MineBBS', link: 'https://www.MineBBS.com/threads/1-21-1.28390/'}, {text: 'Minecraft Wiki', link: 'https://Minecraft.Wiki/'} ]}
        ],
        bulletin: {
          body: [
            {
              type: 'text',
              content: `🎉🎉🎉 The server has been updated to 26.1.2.`,
              style: 'font-size: 12px;'
            },
            { type: 'hr' },
            { type: 'title', content: 'QQ Group' },
            {
              type: 'text',
              content: `
      <ul>
        <li>QQ Group: 902620497</li>
      </ul>`,
              style: 'font-size: 12px;'
            },
            { type: 'hr', },
            {
              type: 'buttongroup',
              children: [
                { text: 'Sponsor', link: '/en-us/about/sponsor.html' }
              ]
            }
          ],
        }
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