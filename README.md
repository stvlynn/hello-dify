# Hello Dify

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">中文</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pt.md">Português</a>
</p>

<p align="center">
  <a href="https://discord.gg/PwZDHH4mv3"><img src="https://img.shields.io/badge/Discord-Join%20Community-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  <a href="https://twitter.com/FirstLabAI"><img src="https://img.shields.io/badge/Twitter-Follow%20@FirstLabAI-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"></a>
</p>

<p align="center">
  <img src="./public/images/hello-dify.png" alt="Hello Dify Logo" width="180" />
</p>

<p align="center">
  Free online tutorials, guides, and best practices for building AI workflows and applications with Dify.
</p>

<p align="center">
  <a href="https://hellodify.com">Visit Now</a>
  ·
  <a href="https://github.com/stvlynn/hello-dify/issues">Report Bug</a>
  ·
  <a href="https://github.com/stvlynn/hello-dify/issues">Contribute Usecases</a>
</p>

## What is this?

Hello Dify is a documentation website. It serves as:

- **Learning Resource**: A collection of tutorials and best practices for Dify plugin development
- **Reference Implementation**: A modern, responsive website demonstrating Fumadocs capabilities
- **Community Project**: A collaborative effort by FirstLab community members
- **Interactive Documentation**: Includes real-time interactive demos to help you learn by doing

## Features

- 🌐 **Multilingual Support**: Available in English, Chinese, and Japanese
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🔍 **Full-text Search**: Quickly find the content you need
- 🎨 **Modern UI**: Clean, accessible interface with dark mode support
- 📚 **Comprehensive Guides**: Step-by-step tutorials for beginners and advanced users

## Contributing

Want to contribute to Hello Dify? Here's how you can help:

- **Fork & Clone**: Fork the repository and clone it to your local machine
- **Create Content**: Add your examples or improvements following our document structure
- **Multi-language Support**: You must create all three language versions of each document:
  - English (base version): `document.mdx`
  - Chinese: `document.zh.mdx`
  - Japanese: `document.ja.mdx`
- **Test Your Changes**: Run `yarn build` to ensure everything compiles correctly (**all three language files are required for successful compilation**)
- **Submit PR**: Create a branch and submit a pull request with your changes

For detailed contribution guidelines, see our [contribution documentation](content/docs/contributing.mdx).

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Documentation**: [Fumadocs](https://fumadocs.vercel.app/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Remix Icon](https://remixicon.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Join FirstLab

FirstLab is a community of developers interested in AI development and Dify ecosystem.

- **Discord**: Join our [Discord server](https://discord.gg/PwZDHH4mv3) to connect with other developers
- **X (Twitter)**: Follow [@FirstLabAI](https://twitter.com/FirstLabAI) for updates

## Project Structure

```
hello-dify/
├── app/                  # Next.js app directory
│   ├── [lang]/           # Multilingual route handling
│   ├── api/              # API routes
│   └── global.css        # Global styles
├── content/              # Documentation content (MDX files)
│   ├── docs/             # Main documentation
│   ├── plugin/           # Plugin-specific documentation
│   └── workflow/         # Workflow guides
├── public/               # Static assets
│   └── images/           # Image files
└── lib/                  # Shared utilities
    └── fumadocs/         # Documentation configuration
```

## Contributors

[![Contributors](https://contrib.rocks/image?repo=stvlynn/hello-dify)](https://github.com/stvlynn/hello-dify/graphs/contributors)

## License

This project is licensed under [CC-BY-SA-4.0](./LICENSE).

## Support

If you find this project helpful, consider:

- Starring the repository ⭐
- Sharing it with others who might benefit
- [Buying me a coffee](https://www.buymeacoffee.com/stvlynn) ☕