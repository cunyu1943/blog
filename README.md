# 村雨遥的博客

> 「公众号：村雨遥」的大本营，除此之外还能找到更多关于公众号不方便分享出来的内容。

---

## 一、关于我

嗨，我是 **村雨遥**。

坐标江苏，做 Java 后端工程师第五年。白天制造 Bug，晚上写点乱七八糟的东西。

- GitHub：[cunyu1943](https://github.com/cunyu1943)
- 公众号：村雨遥
- 微信：coder_cunYu

## 二、关于本项目

好记性不如烂笔头，要在互联网留下关于我自己的印记，证明我曾存在。

本项目是一个基于 [VitePress](https://vitepress.dev/) 构建的个人博客，用于记录日常分享、资源整理与生活福利，所有内容均可离线浏览与本地部署。

## 三、你能在这里看到什么

- **每日分享**：每天为你搜罗互联网上新鲜有趣的网站、工具与资源，涵盖影视、软件、学习等各个方面。
- **资源分享**：精选各类实用资源合集，包括经典影视剧集、优质写真、实用软件工具等，并附带详细的获取与安装教程。
- **精选福利**：独家整理的省钱秘籍与生活福利，分享各类返利优惠平台与省钱攻略，让日常消费更实惠。

## 四、项目结构

```text
blog/
├── docs/               # VitePress 文档目录
│   ├── src/            # 博客源文件
│   │   ├── index.md    # 首页（含 features 特性卡片）
│   │   ├── daily-share/    # 每日分享
│   │   ├── resource-share/ # 资源分享
│   │   └── hot-picks/      # 精选福利
│   └── .vitepress/     # VitePress 配置目录
├── package.json        # 项目依赖与脚本
└── README.md           # 项目说明
```

## 五、技术栈

- **VitePress**：静态站点生成器，基于 Vue + Vite
- **vitepress-plugin-git-changelog**：文章更新日志插件
- **vitepress-plugin-group-icons**：代码块文件图标插件
- **pagefind**：站内全文搜索
- **vitepress-plugin-rss**：RSS 订阅支持
- **vitepress-plugin-sponsor**：赞助展示插件

## 六、本地运行

本项目使用 `pnpm` 作为包管理器，请确保已安装 Node.js 与 pnpm。

```bash
# 安装依赖
pnpm install

# 本地开发预览
pnpm docs:dev

# 构建静态站点
pnpm docs:build

```

## 七、如何找到我

- GitHub：[村雨遥](https://github.com/cunyu1943)
- 公众号：村雨遥
- 微信：coder_cunYu

<img src="./docs/src/public/imgs/contact/contact.png" width="50%" />



## 八、许可证

本项目遵循仓库中的 `LICENSE` 协议开源，转载请注明出处。

## 九、协作贡献指南

欢迎大家一起共建这个博客！无论是补充内容、修正错误，还是分享好资源，都非常期待你的参与。

### 9.1 如何贡献

1. **提交 Issue**：发现内容有误、链接失效或有新的建议，欢迎在仓库 [Issues](https://github.com/cunyu1943/blog/issues) 中提出。
2. **投稿资源**：发现不错的资源，可直接在 [weekly 仓库 Issues](https://github.com/cunyu1943/blog/issues) 中快速投稿，我们会筛选后整理到对应栏目。
3. **提交 PR**：
   - Fork 本仓库并克隆到本地；
   - 基于 `main` 分支新建特性分支（如 `feat/add-resource`）；
   - 在 `docs/src` 对应栏目目录下新增或编辑 Markdown 文件；
   - 提交改动并发起 Pull Request，描述清楚本次变更内容。

### 9.2 内容规范

- 文章请使用 **Markdown** 格式编写，标题层级清晰、排版统一。
- 资源类内容建议包含简介、获取方式（链接 / 网盘）及必要的使用说明。
- 文件命名尽量语义化，如 `YYYYMMDD-主题.md`。
- 新增资源请放到对应分类目录（`daily-share` / `resource-share` / `hot-picks`）。

### 9.3 本地预览

提交前建议先在本地启动预览，确认内容显示正常：

```bash
pnpm install
pnpm docs:dev
```

### 9.4 行为准则

请保持友善、尊重的交流氛围，共同维护一个开放、包容的协作环境。

