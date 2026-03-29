# 🚀 Guia de Deploy do Portfólio

Este documento contém instruções para fazer o deploy do portfólio em diferentes plataformas.

## 📦 Build do Projeto

Antes de fazer o deploy, gere a build de produção:

```bash
npm run build
```

Isso criará uma pasta `dist/` com os arquivos otimizados.

## 🌐 Deploy em Diferentes Plataformas

### 1. Vercel (Recomendado)

**Passo a passo:**

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Para produção:
```bash
vercel --prod
```

**Ou via GitHub:**

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "Import Project"
4. Selecione seu repositório
5. Vercel detectará automaticamente as configurações do Vite
6. Clique em "Deploy"

---

### 2. Netlify

**Via Drag & Drop:**

1. Faça o build: `npm run build`
2. Acesse [app.netlify.com/drop](https://app.netlify.com/drop)
3. Arraste a pasta `dist/` para a área de drop

**Via CLI:**

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

---

### 3. GitHub Pages

1. Instale o pacote gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Adicione no `package.json`:
```json
{
  "homepage": "https://[seu-usuario].github.io/[nome-repositorio]",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Atualize o `vite.config.js`:
```js
export default defineConfig({
  base: '/[nome-repositorio]/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

---

### 4. Hostinger / cPanel

1. Faça o build: `npm run build`
2. Acesse o File Manager do cPanel
3. Navegue até `public_html/`
4. Faça upload de todos os arquivos da pasta `dist/`
5. Configure o domínio

---

## ⚙️ Configurações Importantes

### Variáveis de Ambiente

Se você tiver variáveis de ambiente, crie um arquivo `.env`:

```env
VITE_API_URL=https://api.exemplo.com
```

E use no código:
```js
const apiUrl = import.meta.env.VITE_API_URL
```

### Domínio Personalizado

**Vercel:**
1. Acesse seu projeto no dashboard
2. Vá em "Settings" > "Domains"
3. Adicione seu domínio personalizado

**Netlify:**
1. Acesse "Domain Settings"
2. Clique em "Add custom domain"

---

## 🔧 Troubleshooting

### Erro: Página em branco após deploy

- Verifique o `base` no `vite.config.js`
- Confira se todos os links são relativos (começam com `/`)

### Erro: 404 nas rotas

Se estiver usando React Router, adicione um arquivo `_redirects` na pasta `public/`:

```
/*    /index.html   200
```

---

## 📊 Performance

Para melhor performance após o deploy:

1. **Habilite HTTPS**
2. **Configure CDN**
3. **Ative compressão Gzip/Brotli**
4. **Use caching adequado**

---

## 📝 Checklist Pré-Deploy

- [ ] Testou localmente com `npm run build && npm run preview`
- [ ] Atualizou todas as URLs de produção
- [ ] Verificou que todas as imagens carregam
- [ ] Testou em diferentes navegadores
- [ ] Testou responsividade em mobile
- [ ] Verificou SEO (meta tags)
- [ ] Testou todos os links externos

---

## 🆘 Suporte

Se encontrar problemas:

1. Verifique os logs de build
2. Consulte a documentação da plataforma
3. Verifique o console do navegador para erros

---

Desenvolvido por Victor Iofna Caba | © 2026
