---
home: true
isShowTitleInHome: true
modules:
  - BannerBrand
#  - MdContent
  - Footer
bannerBrand:
  title: 雨润服务器 Wiki
  description: '欢迎来到 RSerene Wiki 主页'
  tagline: 一个随着Minecraft版本更新而更新的Minecraft服务器。
  bgImage: /bg.svg
  # bgImageStyle:
  #   height: 450px
  buttons:
    # - { text: 收到, icon: 'EarthFilled', link: '/blogs/category1/blog2' }
    - { text: 开始阅读, link: '/blogs/category1/blog2' }
    - { text: 下载客户端, link: '/blogs/category1/blog2', type: 'plain', icon: 'Alien' }
    # - { text: safsdfdsfdssdsdfsdf, link: '/blogs/category1/blog2', type: 'text', icon: 'Alien' }
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://GitHub.com/Rain-Serenity/RSerene-Wiki/' }
    # - { icon: 'LogoTwitter', link: 'https://twitter.com/reco_luan' }
footer: # 底部模块的配置
  startYear: 2020
features:
  - title: 过去
    details: 开发一款看着开心、写着顺手的 vuepress 博客主题。
  - title: 当下
    details: 帮助更多的朋友节省时间去用心书写内容，而不是仅仅配置一个博客去孤芳自赏。
  - title: 未来
    details: 吸引更多的朋友参与到开发中来，继续强大功能。
---
## 快速开始

**npx**

```bash
npx @vuepress-reco/theme-cli init
```

**npm**

```bash
# 初始化
npm install @vuepress-reco/theme-cli -g
theme-cli init
```

**yarn**

```bash
# 初始化
yarn global add @vuepress-reco/theme-cli
theme-cli init
```