import { defineUserConfig } from "vuepress";
import { recoTheme } from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '雨润服务器 Wiki',
      description: '欢迎来到 RSerene Wiki 主页',
    },
    '/en-us/': {
      lang: 'en-US',
      title: 'RSerene Server Wiki',
      description: 'Welcome to the RSerene Wiki homepage',
    },
  },
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    logo: "/favicons.ico",
    author: "Chosen_1st",
    docsBranch: "main",
    docsDir: "/docs",
    docsRepo: 'https://github.com/Rain-Serenity/RSerene-Wiki',
    locales: {
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
          '/changelog/': [{
            text: '更新日志',
            children: ['/changelog/changelog.md'],
          }],
        },
        navbar: [
          { text: "主页", link: "/" },
          { text: '玩家手册', children: [ {text: '简单介绍', link: '/guide/introduction.html'}, {text: '基本设定', link: '/guide/settings.html'}, {text: '指令列表', link: '/guide/command.html'}, {text: '常见问题', link: '/guide/faq.html'} ] },
          { text: '更新日志', children: [ {text: '服务器更新日志', link: '/changelog/changelog.html'} ] },
          { text: '相关链接', children: [ {text: 'Copilot', link: 'https://Copilot.RSerene.com/'}, {text: 'GitHub', link: 'https://GitHub.com/Rain-Serenity/'}, {text: 'MineBBS', link: 'https://www.MineBBS.com/threads/1-21-1.28390/'}, {text: 'Minecraft Wiki', link: 'https://Minecraft.Wiki/'}, {text: 'Status', link: 'https://Stats.UptimeRobot.com/ErgTAP18m2'} ]}
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
                { text: '赞助', link: '/guide/sponsor.html' }
              ]
            }
          ],
        }
      },
      '/en-us/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        lastUpdatedText: "Last Updated",
        series: {
          '/en-us/guide/': [{
            text: 'Player Manual',
            children: ['/en-us/guide/introduction.md', '/en-us/guide/settings.md', '/en-us/guide/command.md', '/en-us/guide/faq.md', '/en-us/guide/sponsor.md'],
          }],
          '/en-us/changelog/': [{
            text: 'Changelog',
            children: ['/en-us/changelog/changelog.md'],
          }],
        },
        navbar: [
          { text: "Home", link: "/en-us/" },
          { text: 'Player Manual', children: [ {text: 'Introduction', link: '/en-us/guide/introduction.html'}, {text: 'Settings', link: '/en-us/guide/settings.html'}, {text: 'Command List', link: '/en-us/guide/command.html'}, {text: 'FAQ', link: '/en-us/guide/faq.html'} ] },
          { text: 'Changelog', children: [ {text: 'Server Changelog', link: '/en-us/changelog/changelog.html'} ] },
          { text: 'Related Links', children: [ {text: 'Copilot', link: 'https://Copilot.RSerene.com/'}, {text: 'GitHub', link: 'https://GitHub.com/Rain-Serenity/'}, {text: 'MineBBS', link: 'https://www.MineBBS.com/threads/1-21-1.28390/'}, {text: 'Minecraft Wiki', link: 'https://Minecraft.Wiki/'}, {text: 'Status', link: 'https://Stats.UptimeRobot.com/ErgTAP18m2'} ]}
        ],
        bulletin: {
          body: [
            {
              type: 'text',
              content: `🎉🎉🎉 The server has been updated to 1.21.1.`,
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
                { text: 'Sponsor', link: '/en-us/guide/sponsor.html' }
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