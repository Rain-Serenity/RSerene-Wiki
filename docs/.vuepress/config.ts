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
    '/zh-tw/': {
      lang: 'zh-TW',
      title: '雨潤伺服器 Wiki',
      description: '歡迎來到 RSerene Wiki 首頁',
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
    '/ko-kr/': {
      lang: 'ko-KR',
      title: 'RSerene Wiki',
      description: 'RSerene Wiki 홈페이지에 오신 것을 환영합니다',
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
            children: ['/about/introduction.md', '/about/history.md', '/about/contributions.md', '/about/rules.md', '/about/sponsor.md'],
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
              content: `🎉🎉🎉 服务器已经更新到26.2。`,
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
      '/zh-tw/': {
        logo: "/images/logo.png",
        selectLanguageName: '繁體中文',
        selectLanguageText: '選擇語言',
        lastUpdatedText: "最後更新",
        series: {
          '/zh-tw/survival/': [{
            text: '純淨生存',
            children: ['/zh-tw/survival/introduction.md', '/zh-tw/survival/settings.md', '/zh-tw/survival/command.md', '/zh-tw/survival/faq.md'],
          }],
          '/zh-tw/island/': [{
            text: '空島生存',
            children: ['/zh-tw/island/introduction.md', '/zh-tw/island/settings.md', '/zh-tw/island/command.md', '/zh-tw/island/faq.md'],
          }],
          '/zh-tw/about/': [{
            text: '關於我們',
            children: ['/zh-tw/about/introduction.md', '/zh-tw/about/history.md', '/zh-tw/about/contributions.md', '/zh-tw/about/rules.md', '/zh-tw/about/sponsor.md'],
          }],
        },
        navbar: [
          { text: "首頁", link: "/zh-tw/" },
          { text: '純淨生存', children: [ {text: '簡單介紹', link: '/zh-tw/survival/introduction.html'}, {text: '基本設定', link: '/zh-tw/survival/settings.html'}, {text: '指令列表', link: '/zh-tw/survival/command.html'}, {text: '常見問題', link: '/zh-tw/survival/faq.html'} ] },
          { text: '空島生存', children: [ {text: '簡單介紹', link: '/zh-tw/island/introduction.html'}, {text: '基本設定', link: '/zh-tw/island/settings.html'}, {text: '指令列表', link: '/zh-tw/island/command.html'}, {text: '常見問題', link: '/zh-tw/island/faq.html'} ] },
          { text: '關於我們', children: [ {text: '伺服器介紹', link: '/zh-tw/about/introduction.html'}, {text: '伺服器歷史', link: '/zh-tw/about/history.html'}, {text: '伺服器貢獻者', link: '/zh-tw/about/contributions.html'}, {text: '伺服器管理條例', link: '/zh-tw/about/rules.html'}, {text: '贊助伺服器', link: '/zh-tw/about/sponsor.html'} ] },
          { text: '相關連結', children: [ {text: '伺服器封禁列表', link: 'https://Bans.RSerene.com/'}, {text: 'GitHub', link: 'https://GitHub.com/Rain-Serenity/'}, {text: 'MCBBS紀念版', link: 'https://www.MCBBS.co/thread-5031-1-1.html'}, {text: 'MineBBS', link: 'https://www.MineBBS.com/threads/1-21-1.28390/'}, {text: 'Minecraft Wiki', link: 'https://Minecraft.Wiki/'} ]}
        ],
        bulletin: {
          body: [
            {
              type: 'text',
              content: `🎉🎉🎉 伺服器已經更新到26.1.2。`,
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
                { text: '贊助', link: '/zh-tw/about/sponsor.html' }
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
          '/en-us/survival/': [{
            text: 'Survival Mode',
            children: ['/en-us/survival/introduction.md', '/en-us/survival/settings.md', '/en-us/survival/command.md', '/en-us/survival/faq.md'],
          }],
          '/en-us/island/': [{
            text: 'Skyblock Mode',
            children: ['/en-us/island/introduction.md', '/en-us/island/settings.md', '/en-us/island/command.md', '/en-us/island/faq.md'],
          }],
          '/en-us/about/': [{
            text: 'About Server',
            children: ['/en-us/about/introduction.md', '/en-us/about/rules.md', '/en-us/about/history.md', '/en-us/about/contributions.md', '/en-us/about/sponsor.md'],
          }],
        },
        navbar: [
          { text: "Home", link: "/en-us/" },
          { text: 'Survival Mode', children: [ {text: 'Introduction', link: '/en-us/survival/introduction.html'}, {text: 'Settings', link: '/en-us/survival/settings.html'}, {text: 'Command List', link: '/en-us/survival/command.html'}, {text: 'FAQ', link: '/en-us/survival/faq.html'} ] },
          { text: 'Skyblock Mode', children: [ {text: 'Introduction', link: '/en-us/island/introduction.html'}, {text: 'Settings', link: '/en-us/island/settings.html'}, {text: 'Command List', link: '/en-us/island/command.html'}, {text: 'FAQ', link: '/en-us/island/faq.html'} ] },
          { text: 'About Us', children: [ {text: 'Server Introduction', link: '/en-us/about/introduction.html'}, {text: 'Server Rules', link: '/en-us/about/rules.html'}, {text: 'Server History', link: '/en-us/about/history.html'}, {text: 'Contributors', link: '/en-us/about/contributions.html'}, {text: 'Sponsor', link: '/en-us/about/sponsor.html'} ] },
          { text: 'Related Links', children: [ {text: 'Ban List', link: 'https://Bans.RSerene.com/'}, {text: 'GitHub', link: 'https://GitHub.com/Rain-Serenity/'}, {text: 'MCBBS Memorial', link: 'https://www.MCBBS.co/thread-5031-1-1.html'}, {text: 'MineBBS', link: 'https://www.MineBBS.com/threads/1-21-1.28390/'}, {text: 'Minecraft Wiki', link: 'https://Minecraft.Wiki/'} ]}
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
          '/ru-ru/survival/': [{
            text: 'Режим выживания',
            children: ['/ru-ru/survival/introduction.md', '/ru-ru/survival/settings.md', '/ru-ru/survival/command.md', '/ru-ru/survival/faq.md'],
          }],
          '/ru-ru/island/': [{
            text: 'Островной режим',
            children: ['/ru-ru/island/introduction.md', '/ru-ru/island/settings.md', '/ru-ru/island/command.md', '/ru-ru/island/faq.md'],
          }],
          '/ru-ru/about/': [{
            text: 'О сервере',
            children: ['/ru-ru/about/introduction.md', '/ru-ru/about/rules.md', '/ru-ru/about/history.md', '/ru-ru/about/contributions.md', '/ru-ru/about/sponsor.md'],
          }],
        },
        navbar: [
          { text: "Главная", link: "/ru-ru/" },
          { text: 'Выживание', children: [ {text: 'Введение', link: '/ru-ru/survival/introduction.html'}, {text: 'Настройки', link: '/ru-ru/survival/settings.html'}, {text: 'Команды', link: '/ru-ru/survival/command.html'}, {text: 'FAQ', link: '/ru-ru/survival/faq.html'} ] },
          { text: 'Островной режим', children: [ {text: 'Введение', link: '/ru-ru/island/introduction.html'}, {text: 'Настройки', link: '/ru-ru/island/settings.html'}, {text: 'Команды', link: '/ru-ru/island/command.html'}, {text: 'FAQ', link: '/ru-ru/island/faq.html'} ] },
          { text: 'О нас', children: [ {text: 'О сервере', link: '/ru-ru/about/introduction.html'}, {text: 'Правила', link: '/ru-ru/about/rules.html'}, {text: 'История', link: '/ru-ru/about/history.html'}, {text: 'Авторы', link: '/ru-ru/about/contributions.html'}, {text: 'Спонсорство', link: '/ru-ru/about/sponsor.html'} ] },
          { text: 'Ссылки', children: [ {text: 'Список банов', link: 'https://Bans.RSerene.com/'}, {text: 'GitHub', link: 'https://GitHub.com/Rain-Serenity/'}, {text: 'MCBBS Memorial', link: 'https://www.MCBBS.co/thread-5031-1-1.html'}, {text: 'MineBBS', link: 'https://www.MineBBS.com/threads/1-21-1.28390/'}, {text: 'Minecraft Wiki', link: 'https://Minecraft.Wiki/'} ]}
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
          '/ja-jp/survival/': [{
            text: 'サバイバルモード',
            children: ['/ja-jp/survival/introduction.md', '/ja-jp/survival/settings.md', '/ja-jp/survival/command.md', '/ja-jp/survival/faq.md'],
          }],
          '/ja-jp/island/': [{
            text: 'スカイブロックモード',
            children: ['/ja-jp/island/introduction.md', '/ja-jp/island/settings.md', '/ja-jp/island/command.md', '/ja-jp/island/faq.md'],
          }],
          '/ja-jp/about/': [{
            text: 'サーバーについて',
            children: ['/ja-jp/about/introduction.md', '/ja-jp/about/rules.md', '/ja-jp/about/history.md', '/ja-jp/about/contributions.md', '/ja-jp/about/sponsor.md'],
          }],
        },
        navbar: [
          { text: "ホーム", link: "/ja-jp/" },
          { text: 'サバイバル', children: [ {text: '紹介', link: '/ja-jp/survival/introduction.html'}, {text: '設定', link: '/ja-jp/survival/settings.html'}, {text: 'コマンド一覧', link: '/ja-jp/survival/command.html'}, {text: 'FAQ', link: '/ja-jp/survival/faq.html'} ] },
          { text: 'スカイブロック', children: [ {text: '紹介', link: '/ja-jp/island/introduction.html'}, {text: '設定', link: '/ja-jp/island/settings.html'}, {text: 'コマンド一覧', link: '/ja-jp/island/command.html'}, {text: 'FAQ', link: '/ja-jp/island/faq.html'} ] },
          { text: 'サーバーについて', children: [ {text: 'サーバー紹介', link: '/ja-jp/about/introduction.html'}, {text: 'ルール', link: '/ja-jp/about/rules.html'}, {text: '歴史', link: '/ja-jp/about/history.html'}, {text: '貢献者', link: '/ja-jp/about/contributions.html'}, {text: 'スポンサー', link: '/ja-jp/about/sponsor.html'} ] },
          { text: '関連リンク', children: [ {text: 'BANリスト', link: 'https://Bans.RSerene.com/'}, {text: 'GitHub', link: 'https://GitHub.com/Rain-Serenity/'}, {text: 'MCBBS Memorial', link: 'https://www.MCBBS.co/thread-5031-1-1.html'}, {text: 'MineBBS', link: 'https://www.MineBBS.com/threads/1-21-1.28390/'}, {text: 'Minecraft Wiki', link: 'https://Minecraft.Wiki/'} ]}
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
      '/ko-kr/': {
        logo: "/images/logo.png",
        selectLanguageName: '한국어',
        selectLanguageText: '언어 선택',
        lastUpdatedText: "마지막 업데이트",
        series: {
          '/ko-kr/survival/': [{
            text: '서바이벌 모드',
            children: ['/ko-kr/survival/introduction.md', '/ko-kr/survival/settings.md', '/ko-kr/survival/command.md', '/ko-kr/survival/faq.md'],
          }],
          '/ko-kr/island/': [{
            text: '스카이블록 모드',
            children: ['/ko-kr/island/introduction.md', '/ko-kr/island/settings.md', '/ko-kr/island/command.md', '/ko-kr/island/faq.md'],
          }],
          '/ko-kr/about/': [{
            text: '서버 소개',
            children: ['/ko-kr/about/introduction.md', '/ko-kr/about/rules.md', '/ko-kr/about/history.md', '/ko-kr/about/contributions.md', '/ko-kr/about/sponsor.md'],
          }],
        },
        navbar: [
          { text: "홈", link: "/ko-kr/" },
          { text: '서바이벌', children: [ {text: '소개', link: '/ko-kr/survival/introduction.html'}, {text: '설정', link: '/ko-kr/survival/settings.html'}, {text: '명령어 목록', link: '/ko-kr/survival/command.html'}, {text: 'FAQ', link: '/ko-kr/survival/faq.html'} ] },
          { text: '스카이블록', children: [ {text: '소개', link: '/ko-kr/island/introduction.html'}, {text: '설정', link: '/ko-kr/island/settings.html'}, {text: '명령어 목록', link: '/ko-kr/island/command.html'}, {text: 'FAQ', link: '/ko-kr/island/faq.html'} ] },
          { text: '서버 정보', children: [ {text: '서버 소개', link: '/ko-kr/about/introduction.html'}, {text: '규칙', link: '/ko-kr/about/rules.html'}, {text: '역사', link: '/ko-kr/about/history.html'}, {text: '기여자', link: '/ko-kr/about/contributions.html'}, {text: '후원', link: '/ko-kr/about/sponsor.html'} ] },
          { text: '관련 링크', children: [ {text: '밴 목록', link: 'https://Bans.RSerene.com/'}, {text: 'GitHub', link: 'https://GitHub.com/Rain-Serenity/'}, {text: 'MCBBS Memorial', link: 'https://www.MCBBS.co/thread-5031-1-1.html'}, {text: 'MineBBS', link: 'https://www.MineBBS.com/threads/1-21-1.28390/'}, {text: 'Minecraft Wiki', link: 'https://Minecraft.Wiki/'} ]}
        ],
        bulletin: {
          body: [
            {
              type: 'text',
              content: `🎉🎉🎉 서버가 26.1.2로 업데이트되었습니다.`,
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
                { text: '후원', link: '/ko-kr/about/sponsor.html' }
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
