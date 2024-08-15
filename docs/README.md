---
home: true
isShowTitleInHome: true
modules:
  - BannerBrand
  - Features
  - Footer
  #  - MdContent
bannerBrand:
  title: 雨润服务器 Wiki
  description: '欢迎来到 RSerene Wiki 主页'
  tagline: 一个随着Minecraft版本更新而更新的Minecraft服务器。
  bgImage: /bg.svg
  # bgImageStyle:
  #   height: 450px
  buttons:
    # - { text: 收到, icon: 'EarthFilled', link: '/blogs/category1/blog2' }
    - { text: 开始阅读, link: '/guide/introduction.html' }
    - { text: 下载客户端, link: '/guide/introduction.html', type: 'plain', icon: 'Alien' }
    # - { text: safsdfdsfdssdsdfsdf, link: '/blogs/category1/blog2', type: 'text', icon: 'Alien' }
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://GitHub.com/Rain-Serenity/RSerene-Wiki/' }
    # - { icon: 'LogoTwitter', link: 'https://twitter.com/reco_luan' }
footer: # 底部模块的配置
  startYear: 2020
features:
  - title: 过去
    details: 开发一款有特别玩法的服务器。
  - title: 当下
    details: 不在弄特别的玩法，追求纯净流畅的生存。
  - title: 未来
    details: 吸引更多的玩家参与到服务器来，继续完善服务器。
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