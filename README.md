# unil-sgc.github.io

Data, software and dev hub of the UNIL FGSE [Geocomputing Centre](https://www.unil.ch/fgse/en/home/menuinst/recherche/geocomputing-centre.html).

👉 **https://unil-sgc.github.io/**

The site is a set of Markdown files in [`docs/`](docs), built with [VitePress](https://vitepress.dev) and deployed to GitHub Pages on every push to `main`. Pull requests build the site as a check.

💡 Up to writing some content? See the [Contribute](https://unil-sgc.github.io/contribute) page, or edit any page through its "Edit this page on GitHub" link.

## Local preview

Requires Node.js 22 or newer (`.nvmrc` pins it for [fnm](https://github.com/Schniz/fnm) and [nvm](https://github.com/nvm-sh/nvm)).

```sh
npm install
npm run docs:dev      # http://localhost:5173, hot reload
npm run docs:build    # same build as the deployment, fails on broken internal links
```
