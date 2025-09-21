# marcio-eletrica

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Deploy para Netlify

Este projeto está configurado para fácil deploy no Netlify. Existem duas maneiras de fazer o deploy:

#### Deploy manual via UI do Netlify

1. Crie uma conta no [Netlify](https://www.netlify.com/)
2. Clique em "New site from Git"
3. Conecte sua conta do GitHub e selecione este repositório
4. Configure as seguintes opções de build:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Clique em "Deploy site"

#### Deploy via Netlify CLI

Você pode usar a Netlify CLI para fazer deploy diretamente do terminal:

1. Instale a Netlify CLI globalmente:
   ```sh
   npm install -g netlify-cli
   ```

2. Faça login no Netlify:
   ```sh
   netlify login
   ```

3. Inicialize o projeto com Netlify:
   ```sh
   netlify init
   ```

4. Para fazer deploy:
   ```sh
   netlify deploy
   ```

   Para fazer deploy em produção:
   ```sh
   netlify deploy --prod
   ```
