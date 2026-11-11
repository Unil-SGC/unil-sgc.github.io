---
title: Contribute
---

# Contribute

This hub is a set of Markdown files in the [unil-sgc.github.io](https://github.com/Unil-SGC/unil-sgc.github.io) repository, built with [VitePress](https://vitepress.dev) and published on GitHub Pages. Anyone with a GitHub account can propose a change.

## Edit a page

1. Click **Edit this page on GitHub** at the bottom of any page.
2. Make your change in the GitHub editor and open a pull request.
3. The pull request builds the site. Once it is merged into `main`, the site is deployed within a few minutes.

Pages live in the `docs/` folder. The folder structure gives the URL: `docs/data/catalogues.md` is served at `/data/catalogues`.

## Add a news item or an event

Create a Markdown file in `docs/news/` or `docs/events/`. The file name becomes the URL. Start it with this front matter, then write the content:

```md
---
title: "SGC symposium 2026"
date: 2026-11-21
author: "Jane Doe"
tags: ["Event"]
---

# SGC symposium 2026

Content in Markdown ...
```

The listing pages and the sidebar are generated from these files, so there is nothing else to update. Images go in `docs/public/images/` and are referenced as `/images/my-image.png`.

## Useful Markdown extras

VitePress supports GitHub-flavoured Markdown plus a few extras:

```md
::: tip Title
A highlighted note. Also available: info, warning, danger, details.
:::

:coffee: emoji shortcodes work, and so do tables and footnotes.
```

See the [VitePress Markdown reference](https://vitepress.dev/guide/markdown) for the full list.

A thin decorative banner under a page title is one line, with an optional dark-mode variant:

```md
<PageBanner light="/images/my-banner-light.webp" dark="/images/my-banner-dark.webp" alt="What the picture shows" />
```

Raw HTML is allowed too, with two rules: leave a blank line before and after an HTML block, and avoid deprecated tags such as `<center>`, which the renderer silently drops. For images, prefer the Markdown syntax `![description](/images/my-image.png)`.

## Preview locally

Optional, for larger changes. You need [Node.js](https://nodejs.org) 22 or newer; a version manager such as [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm) installs it in your home directory without administrator rights and picks up the version from the `.nvmrc` file of the repository.

```sh
git clone https://github.com/Unil-SGC/unil-sgc.github.io
cd unil-sgc.github.io
npm install
npm run docs:dev
```

Then open `http://localhost:5173`. Pages reload as you save. `npm run docs:build` runs the same build as the deployment and fails on broken internal links.

## Site structure

- `docs/.vitepress/config.mts`: navigation, sidebar and site options.
- `docs/.vitepress/theme/`: small theme customisations (colours, post metadata, post lists).
- `docs/public/`: static files copied as they are (images, favicons, redirects for old URLs).
- `.github/workflows/deploy.yml`: build on pull requests, build and deploy on `main`.
