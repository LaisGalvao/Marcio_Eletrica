# Deploy do Projeto no Netlify

Este documento contém informações importantes para o deploy deste projeto no Netlify.

## Arquivos de Configuração

Este projeto já contém os arquivos necessários para o deploy no Netlify:

- `netlify.toml`: Configurações de build e deploy
- `public/_redirects`: Regras de redirecionamento para SPA

## Passos para Deploy no Netlify

1. Faça login no [Netlify](https://app.netlify.com/)
2. Clique em "Add new site" > "Import an existing project"
3. Conecte sua conta do GitHub e selecione este repositório
4. Na tela de configuração de deploy:
   - **Build command**: `npm run build` (já configurado no netlify.toml)
   - **Publish directory**: `dist` (já configurado no netlify.toml)
5. Clique em "Deploy site"

## Variáveis de Ambiente

Importante! Este projeto utiliza variáveis de ambiente que precisam ser configuradas no Netlify:

1. Após o deploy inicial, vá para "Site settings" > "Environment variables"
2. Adicione as seguintes variáveis:
   - `VITE_SUPABASE_URL`: URL da sua instância Supabase
   - `VITE_SUPABASE_ANON_KEY`: Chave anônima do Supabase

## Domínio Personalizado (Opcional)

Para configurar um domínio personalizado:
1. Vá para "Domain settings" no painel do seu site
2. Clique em "Add custom domain"
3. Siga as instruções para configurar seu domínio

## Construções Automáticas

O Netlify automaticamente construirá e publicará seu site quando detectar mudanças no branch principal do seu repositório.