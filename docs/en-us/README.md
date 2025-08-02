---
home: true
isShowTitleInHome: true
modules:
  - BannerBrand
  - Features
  - Footer
  #  - MdContent
bannerBrand:
  title: RSerene Wiki
  description: 'Welcome to the RSerene Wiki homepage'
  tagline: A Minecraft server that updates with Minecraft versions.
  bgImage: /bg.svg
  # bgImageStyle:
  #   height: 450px
  buttons:
    # - { text: Received, icon: 'EarthFilled', link: '/blogs/category1/blog2' }
    - { text: Start Reading, link: '/en-us/guide/introduction.html' }
    - { text: Download Client, link: 'https://www.mcmod.cn/modpack/467.html', type: 'plain' }
    # - { text: safsdfdsfdssdsdfsdf, link: '/blogs/category1/blog2', type: 'text', icon: 'Alien' }
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://GitHub.com/Rain-Serenity/RSerene-Wiki/' }
    # - { icon: 'LogoTwitter', link: 'https://twitter.com/reco_luan' }
footer: # Configuration for the footer module
  startYear: 2020
features:
  - title: Past
    details: Developing a server with unique gameplay.
  - title: Present
    details: No longer focusing on special gameplay, pursuing pure and smooth survival.
  - title: Future
    details: Attracting more players to participate in the server and continuing to improve it.
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