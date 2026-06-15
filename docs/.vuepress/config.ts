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
    '/ru-ru/': {
      lang: 'ru-RU',
      title: 'RSerene Wiki',
      description: 'Добро пожаловать на главную страницу RSerene Wiki',
    },
    '/ja-jp/': {
      lang: 'ja-JP',
      title: 'RSerene Wiki',
      description: 'RSerene Wiki ホームページへようこそ',
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
          '/survival/': [{
            text: '纯净生存',
            children: ['/survival/introduction.md', '/survival/settings.md', '/survival/command.md', '/survival/faq.md'],
          }],
          '/island/': [{
            text: '空岛生存',
            children: ['/island/introduction.md', '/island/settings.md', '/island/command.md', '/island/faq.md'],
          }],
          '/about/': [{
            text: '关于我们',
            children: ['/about/rules.md', '/about/history.md', '/about/contributions.md', '/about/sponsor.md'],
          }],
        },
        navbar: [
          { text: "主页", link: "/" },
          { text: '纯净生存', children: [ {text: '简单介绍', link: '/survival/introduction.html'}, {text: '基本设定', link: '/survival/settings.html'}, {text: '指令列表', link: '/survival/command.html'}, {text: '常见问题', link: '/survival/faq.html'} ] },
          { text: '空岛生存', children: [ {text: '简单介绍', link: '/island/introduction.html'}, {text: '基本设定', link: '/island/settings.html'}, {text: '指令列表', link: '/island/command.html'}, {text: '常见问题', link: '/island/faq.html'} ] },
          { text: '关于我们', children: [ {text: '服务器介绍', link: '/about/introduction.html'}, {text: '服务器历史', link: '/about/history.html'}, {text: '服务器贡献者', link: '/about/contributions.html'}, {text: '服务器管理条例', link: '/about/rules.html'}, {text: '赞助服务器', link: '/about/sponsor.html'} ] },
          { text: '相关链接', children: [ {text: '服务器封禁列表', link: 'https://Bans.RSerene.com/'}, {text: 'GitHub', link: 'https://GitHub.com/Rain-Serenity/'}, {text: 'MCBBS纪念版', link: 'https://www.MCBBS.co/thread-5031-1-1.html'}, {text: 'MineBBS', link: 'https://www.MineBBS.com/threads/1-21-1.28390/'}, {text: 'Minecraft Wiki', link: 'https://Minecraft.Wiki/'} ]}
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
            children: ['/en-us/survival/introduction.md', '/en-us/survival/settings.md', '/en-us/survival/command.md', '/en-us/survival/faq.md'],
          }],
          '/en-us/about/': [{
            text: 'About Server',
            children: ['/en-us/about/rules.md', '/en-us/about/history.md', '/en-us/about/contributions.md', '/en-us/about/sponsor.md'],
          }],
        },
        navbar: [
          { text: "Home", link: "/en-us/" },
          { text: 'Player Manual', children: [ {text: 'Introduction', link: '/en-us/survival/introduction.html'}, {text: 'Settings', link: '/en-us/survival/settings.html'}, {text: 'Command List', link: '/en-us/survival/command.html'}, {text: 'FAQ', link: '/en-us/survival/faq.html'} ] },
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
      '/ru-ru/': {
        logo: "/images/logo.png",
        selectLanguageName: 'Русский',
        selectLanguageText: 'Языки',
        lastUpdatedText: "Последнее обновление",
        series: {
          '/ru-ru/guide/': [{
            text: 'Руководство игрока',
            children: ['/ru-ru/survival/introduction.md', '/ru-ru/survival/settings.md', '/ru-ru/survival/command.md', '/ru-ru/survival/faq.md'],
          }],
          '/ru-ru/about/': [{
            text: 'О сервере',
            children: ['/ru-ru/about/rules.md', '/ru-ru/about/history.md', '/ru-ru/about/contributions.md', '/ru-ru/about/sponsor.md'],
          }],
        },
        navbar: [
          { text: "Главная", link: "/ru-ru/" },
          { text: 'Руководство', children: [ {text: 'Введение', link: '/ru-ru/survival/introduction.html'}, {text: 'Настройки', link: '/ru-ru/survival/settings.html'}, {text: 'Команды', link: '/ru-ru/survival/command.html'}, {text: 'FAQ', link: '/ru-ru/survival/faq.html'} ] },
          { text: 'О нас', children: [ {text: 'Правила', link: '/ru-ru/about/rules.html'}, {text: 'История', link: '/ru-ru/about/history.html'}, {text: 'Авторы', link: '/ru-ru/about/contributions.html'}, {text: 'Спонсорство', link: '/ru-ru/about/sponsor.html'} ] },
          { text: 'Ссылки', children: [ {text: 'GitHub', link: 'https://GitHub.com/Rain-Serenity/'}, {text: 'MineBBS', link: 'https://www.MineBBS.com/threads/1-21-1.28390/'}, {text: 'Minecraft Wiki', link: 'https://Minecraft.Wiki/'} ]}
        ],
        bulletin: {
          body: [
            {
              type: 'text',
              content: `🎉🎉🎉 Сервер обновлён до версии 26.1.2.`,
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
                { text: 'Спонсорство', link: '/ru-ru/about/sponsor.html' }
              ]
            }
          ],
        }
      },
      '/ja-jp/': {
        logo: "/images/logo.png",
        selectLanguageName: '日本語',
        selectLanguageText: '言語',
        lastUpdatedText: "最終更新",
        series: {
          '/ja-jp/guide/': [{
            text: 'プレイヤーマニュアル',
            children: ['/ja-jp/survival/introduction.md', '/ja-jp/survival/settings.md', '/ja-jp/survival/command.md', '/ja-jp/survival/faq.md'],
          }],
          '/ja-jp/about/': [{
            text: 'サーバーについて',
            children: ['/ja-jp/about/rules.md', '/ja-jp/about/history.md', '/ja-jp/about/contributions.md', '/ja-jp/about/sponsor.md'],
          }],
        },
        navbar: [
          { text: "ホーム", link: "/ja-jp/" },
          { text: 'プレイヤーマニュアル', children: [ {text: '紹介', link: '/ja-jp/survival/introduction.html'}, {text: '設定', link: '/ja-jp/survival/settings.html'}, {text: 'コマンド一覧', link: '/ja-jp/survival/command.html'}, {text: 'FAQ', link: '/ja-jp/survival/faq.html'} ] },
          { text: 'サーバーについて', children: [ {text: 'ルール', link: '/ja-jp/about/rules.html'}, {text: '歴史', link: '/ja-jp/about/history.html'}, {text: '貢献者', link: '/ja-jp/about/contributions.html'}, {text: 'スポンサー', link: '/ja-jp/about/sponsor.html'} ] },
          { text: '関連リンク', children: [ {text: 'GitHub', link: 'https://GitHub.com/Rain-Serenity/'}, {text: 'MineBBS', link: 'https://www.MineBBS.com/threads/1-21-1.28390/'}, {text: 'Minecraft Wiki', link: 'https://Minecraft.Wiki/'} ]}
        ],
        bulletin: {
          body: [
            {
              type: 'text',
              content: `🎉🎉🎉 サーバーは26.1.2に更新されました。`,
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
                { text: 'スポンサー', link: '/ja-jp/about/sponsor.html' }
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