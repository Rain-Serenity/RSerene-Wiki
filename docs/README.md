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
    - { text: 开始阅读, link: '/survival/introduction' }
    - { text: 下载客户端, link: 'https://www.mcmod.cn/modpack/467.html', type: 'plain' }
    # - { text: safsdfdsfdssdsdfsdf, link: '/blogs/category1/blog2', type: 'text', icon: 'Alien' }
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://GitHub.com/Rain-Serenity/RSerene-Wiki/' }
    # - { icon: 'LogoTwitter', link: 'https://twitter.com/reco_luan' }
footer: # 底部模块的配置
  startYear: 2020
  record: 粤ICP备2026085798号-1
  recordLink: http://beian.miit.gov.cn
features:
  - title: 过去
    details: 开发一款有特别玩法的服务器。
  - title: 当下
    details: 完善现有服务器玩法，打造出一款一流的服务器。
  - title: 未来
    details: 开发更多特别玩法，做到久玩不腻。
---
## 快速开始

**npm**

```bash
# 初始化
npm install
# 运行文档
npm run docs:dev