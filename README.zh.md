# Hello Dify

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">中文</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pt.md">Português</a>
</p>

<p align="center">
  <a href="https://discord.gg/PwZDHH4mv3"><img src="https://img.shields.io/badge/Discord-加入社区-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  <a href="https://twitter.com/FirstLabAI"><img src="https://img.shields.io/badge/Twitter-关注@FirstLabAI-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"></a>
</p>

<p align="center">
  <img src="./public/images/hello-dify.png" alt="Hello Dify Logo" width="180" />
</p>

<p align="center">
  免费在线教程、指南和构建 Dify AI 工作流和应用程序的最佳实践。
</p>

<p align="center">
  <a href="https://hellodify.com">立即访问</a>
  ·
  <a href="https://github.com/stvlynn/hello-dify/issues">报告问题</a>
  ·
  <a href="https://github.com/stvlynn/hello-dify/issues">贡献用例</a>
</p>

## 这是什么？

Hello Dify 是一个文档网站，它的作用是：

- **学习资源**：收集了 Dify 插件开发的教程和最佳实践
- **参考实现**：展示 Fumadocs 功能的现代、响应式网站
- **社区项目**：FirstLab 社区成员的协作成果
- **交互式文档**：包含实时交互式演示，帮助您通过实践学习

## 特性

- 🌐 **多语言支持**：提供英语、中文和日语版本
- 📱 **响应式设计**：在桌面、平板和移动设备上无缝工作
- 🔍 **全文搜索**：快速找到您需要的内容
- 🎨 **现代界面**：干净、易用的界面，支持暗黑模式
- 📚 **全面指南**：为初学者和高级用户提供逐步教程

## 贡献

想要为 Hello Dify 做出贡献？以下是您可以帮助的方式：

- **Fork 和克隆**：Fork 仓库并将其克隆到本地机器
- **创建内容**：按照我们的文档结构添加示例或改进
- **多语言支持**：您必须创建每个文档的三种语言版本：
  - 英文（基础版本）：`document.mdx`
  - 中文：`document.zh.mdx`
  - 日文：`document.ja.mdx`
- **测试更改**：运行 `yarn build` 确保一切正确编译（**成功编译需要所有三种语言文件**）
- **提交 PR**：创建分支并提交您的更改

详细的贡献指南，请参阅我们的[贡献文档](content/docs/contributing.mdx)。

## 技术栈

- **框架**：[Next.js](https://nextjs.org/)
- **文档**：[Fumadocs](https://fumadocs.vercel.app/)
- **样式**：[Tailwind CSS](https://tailwindcss.com/)
- **图标**：[Remix Icon](https://remixicon.com/)
- **部署**：[Vercel](https://vercel.com/)

## 加入 FirstLab

FirstLab 是一个对 AI 开发和 Dify 生态系统感兴趣的开发者社区。

- **Discord**：加入我们的 [Discord 服务器](https://discord.gg/PwZDHH4mv3)与其他开发者交流
- **X (Twitter)**：关注 [@FirstLabAI](https://twitter.com/FirstLabAI) 获取更新

## 项目结构

```
hello-dify/
├── app/                  # Next.js 应用目录
│   ├── [lang]/           # 多语言路由处理
│   ├── api/              # API 路由
│   └── global.css        # 全局样式
├── content/              # 文档内容 (MDX 文件)
│   ├── docs/             # 主要文档
│   ├── plugin/           # 插件相关文档
│   └── workflow/         # 工作流指南
├── public/               # 静态资源
│   └── images/           # 图片文件
└── lib/                  # 共享工具
    └── fumadocs/         # 文档配置
```

## 贡献者

[![Contributors](https://contrib.rocks/image?repo=stvlynn/hello-dify)](https://github.com/stvlynn/hello-dify/graphs/contributors)

## 许可证

本项目采用 [CC-BY-SA-4.0](./LICENSE) 许可。

## 支持

如果您觉得这个项目有帮助，可以考虑：

- 为仓库点星 ⭐
- 与可能受益的人分享
- [给我买杯咖啡](https://www.buymeacoffee.com/stvlynn) ☕ 