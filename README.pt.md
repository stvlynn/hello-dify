# Hello Dify

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">中文</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pt.md">Português</a>
</p>

<p align="center">
  <a href="https://discord.gg/PwZDHH4mv3"><img src="https://img.shields.io/badge/Discord-Junte--se%20à%20Comunidade-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  <a href="https://twitter.com/FirstLabAI"><img src="https://img.shields.io/badge/Twitter-Siga%20@FirstLabAI-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"></a>
</p>

<p align="center">
  <img src="./public/images/hello-dify.png" alt="Hello Dify Logo" width="180" />
</p>

<p align="center">
  Tutoriais online gratuitos, guias e melhores práticas para construir fluxos de trabalho e aplicações com IA usando Dify.
</p>

<p align="center">
  <a href="https://hellodify.com">Visite Agora</a>
  ·
  <a href="https://github.com/stvlynn/hello-dify/issues">Reportar Bug</a>
  ·
  <a href="https://github.com/stvlynn/hello-dify/issues">Contribuir com Casos de Uso</a>
</p>

## O que é isso?

Hello Dify é um site de documentação. Ele serve como:

- **Recurso de Aprendizado**: Uma coleção de tutoriais e melhores práticas para desenvolvimento de plugins Dify
- **Implementação de Referência**: Um site moderno e responsivo demonstrando as capacidades do Fumadocs
- **Projeto Comunitário**: Um esforço colaborativo dos membros da comunidade FirstLab
- **Documentação Interativa**: Inclui demonstrações interativas em tempo real para ajudar você a aprender fazendo

## Características

- 🌐 **Suporte Multilíngue**: Disponível em inglês, chinês e japonês
- 📱 **Design Responsivo**: Funciona perfeitamente em desktop, tablet e dispositivos móveis
- 🔍 **Busca de Texto Completo**: Encontre rapidamente o conteúdo que você precisa
- 🎨 **Interface Moderna**: Interface limpa e acessível com suporte ao modo escuro
- 📚 **Guias Abrangentes**: Tutoriais passo a passo para iniciantes e usuários avançados

## Contribuindo

Quer contribuir para o Hello Dify? Aqui está como você pode ajudar:

- **Fork & Clone**: Faça um fork do repositório e clone-o para sua máquina local
- **Crie Conteúdo**: Adicione seus exemplos ou melhorias seguindo nossa estrutura de documentos
- **Suporte Multilíngue**: Você deve criar as três versões de idioma de cada documento:
  - Inglês (versão base): `document.mdx`
  - Chinês: `document.zh.mdx`
  - Japonês: `document.ja.mdx`
- **Teste Suas Alterações**: Execute `yarn build` para garantir que tudo seja compilado corretamente (**todos os três arquivos de idioma são necessários para compilação bem-sucedida**)
- **Envie PR**: Crie um branch e envie um pull request com suas alterações

Para diretrizes detalhadas de contribuição, consulte nossa [documentação de contribuição](content/docs/contributing.mdx).

## Stack Tecnológica

- **Framework**: [Next.js](https://nextjs.org/)
- **Documentação**: [Fumadocs](https://fumadocs.vercel.app/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Ícones**: [Remix Icon](https://remixicon.com/)
- **Implantação**: [Vercel](https://vercel.com/)

## Junte-se ao FirstLab

FirstLab é uma comunidade de desenvolvedores interessados em desenvolvimento de IA e no ecossistema Dify.

- **Discord**: Junte-se ao nosso [servidor Discord](https://discord.gg/PwZDHH4mv3) para se conectar com outros desenvolvedores
- **X (Twitter)**: Siga [@FirstLabAI](https://twitter.com/FirstLabAI) para atualizações

## Estrutura do Projeto

```
hello-dify/
├── app/                  # Diretório do app Next.js
│   ├── [lang]/           # Manipulação de rotas multilíngues
│   ├── api/              # Rotas de API
│   └── global.css        # Estilos globais
├── content/              # Conteúdo da documentação (arquivos MDX)
│   ├── docs/             # Documentação principal
│   ├── plugin/           # Documentação específica de plugins
│   └── workflow/         # Guias de fluxo de trabalho
├── public/               # Ativos estáticos
│   └── images/           # Arquivos de imagem
└── lib/                  # Utilitários compartilhados
    └── fumadocs/         # Configuração da documentação
```

## Contribuidores

[![Contributors](https://contrib.rocks/image?repo=stvlynn/hello-dify)](https://github.com/stvlynn/hello-dify/graphs/contributors)

## Licença

Este projeto está licenciado sob [CC-BY-SA-4.0](./LICENSE).

## Suporte

Se você achar este projeto útil, considere:

- Dar uma estrela ao repositório ⭐
- Compartilhá-lo com outras pessoas que possam se beneficiar
- [Comprar um café para mim](https://www.buymeacoffee.com/stvlynn) ☕ 