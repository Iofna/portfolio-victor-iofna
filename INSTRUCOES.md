# 📋 INSTRUÇÕES DE USO - Portfólio Victor Iofna Caba

## ✅ O QUE FOI CRIADO

Foi desenvolvido um **portfólio profissional completo e moderno** com as seguintes características:

### 🎨 Design & Interface
- **Hero Section** com efeito de digitação animado
- **Navbar** fixa com menu responsivo
- **Seção Sobre Mim** com estatísticas animadas
- **Habilidades** com barras de progresso animadas
- **Projetos** organizados em 3 categorias (Software, Design, Hardware)
- **Formação Acadêmica** com timeline visual
- **Contato** com múltiplos canais de comunicação
- **Footer** profissional com links sociais

### 🚀 Funcionalidades
- ✅ Totalmente responsivo (funciona em mobile, tablet e desktop)
- ✅ Animações suaves com Framer Motion
- ✅ Efeito de digitação no título principal
- ✅ Navegação suave entre seções
- ✅ Dark mode moderno
- ✅ SEO otimizado
- ✅ Performance otimizada
- ✅ Links funcionais para todas as redes sociais
- ✅ Download de currículo em PDF

### 🛠️ Tecnologias
- React.js + Vite
- Tailwind CSS
- Framer Motion
- React Icons
- React Type Animation

---

## 🚀 COMO USAR

### 1️⃣ Iniciar o Projeto

```bash
# Abra o terminal na pasta do projeto
cd C:\Users\iofna\Desktop\portfolio-victor-iofna

# Inicie o servidor de desenvolvimento
npm run dev
```

O site abrirá em: **http://localhost:5173**

### 2️⃣ Editar Conteúdo

Todos os arquivos de componentes estão em: `src/components/`

**Para editar:**

#### 📝 Informações Pessoais (Hero.jsx)
- Abra: `src/components/Hero.jsx`
- Edite: Nome, títulos, links

#### 👤 Sobre Mim (About.jsx)
- Abra: `src/components/About.jsx`
- Edite: Descrição, estatísticas

#### 💻 Habilidades (Skills.jsx)
- Abra: `src/components/Skills.jsx`
- Edite o array `skills` (linha ~7)
- Ajuste nomes e porcentagens

#### 🚀 Projetos (Projects.jsx)
- Abra: `src/components/Projects.jsx`
- Edite o array `projects` (linha ~9)
- Adicione/remova projetos
- Atualize links do GitHub

#### 🎓 Formação (Education.jsx)
- Abra: `src/components/Education.jsx`
- Edite o array `education` (linha ~6)

#### 📞 Contato (Contact.jsx)
- Abra: `src/components/Contact.jsx`
- Atualize links e informações de contato

### 3️⃣ Adicionar Seu Currículo PDF

1. Coloque seu currículo PDF na pasta: `public/`
2. Renomeie para: `Victor_Iofna_Caba_CV.pdf`
   - OU atualize o nome nos componentes Hero e Navbar

### 4️⃣ Personalizar Cores

Edite: `tailwind.config.js`

```js
colors: {
  primary: {
    DEFAULT: '#6C63FF',  // Cor principal (roxo)
    dark: '#0A192F',     // Cor de fundo (azul escuro)
  },
}
```

### 5️⃣ Adicionar Imagens de Projetos

1. Crie uma pasta: `public/projects/`
2. Adicione as imagens dos projetos
3. Atualize o caminho em `Projects.jsx`:

```js
image: '/projects/nome-da-imagem.jpg'
```

---

## 📱 TESTAR RESPONSIVIDADE

1. Abra o site no navegador
2. Pressione `F12` (DevTools)
3. Clique no ícone de celular
4. Teste em diferentes tamanhos

---

## 🌐 FAZER DEPLOY (PUBLICAR ONLINE)

### Opção 1: Vercel (MAIS FÁCIL)

```bash
# Instale a Vercel CLI
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Opção 2: Netlify

1. Gere o build:
```bash
npm run build
```

2. Acesse: [app.netlify.com/drop](https://app.netlify.com/drop)
3. Arraste a pasta `dist/` para o site

### Opção 3: GitHub Pages

Veja instruções completas em: `DEPLOY.md`

---

## 🎯 CHECKLIST ANTES DE PUBLICAR

- [ ] Todas as informações pessoais estão corretas
- [ ] Links das redes sociais estão funcionando
- [ ] Currículo PDF está atualizado
- [ ] Projetos têm links válidos
- [ ] Testou em mobile
- [ ] Testou todos os botões
- [ ] Verificou se não há erros no console (F12)

---

## 📂 ESTRUTURA DE ARQUIVOS

```
portfolio-victor-iofna/
├── public/
│   └── Victor_Iofna_Caba_CV.pdf      # Seu currículo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                # Menu de navegação
│   │   ├── Hero.jsx                  # Seção inicial
│   │   ├── About.jsx                 # Sobre mim
│   │   ├── Skills.jsx                # Habilidades
│   │   ├── Projects.jsx              # Projetos
│   │   ├── Education.jsx             # Formação
│   │   ├── Contact.jsx               # Contato
│   │   └── Footer.jsx                # Rodapé
│   ├── App.jsx                       # App principal
│   ├── index.css                     # Estilos globais
│   └── main.jsx                      # Entrada do React
├── index.html                        # HTML base
├── tailwind.config.js                # Config Tailwind
├── package.json                      # Dependências
├── README.md                         # Documentação
└── DEPLOY.md                         # Guia de deploy
```

---

## 🆘 PROBLEMAS COMUNS

### ❌ Erro: "npm não reconhecido"
**Solução:** Instale o Node.js em [nodejs.org](https://nodejs.org)

### ❌ Página em branco
**Solução:** 
1. Abra o console (F12)
2. Verifique erros
3. Execute: `npm install` novamente

### ❌ Animações não funcionam
**Solução:** Limpe o cache: `Ctrl + Shift + R`

### ❌ Links não funcionam
**Solução:** Verifique se os links começam com `https://`

---

## 📞 SUPORTE

Se precisar de ajuda:

1. Leia a documentação completa em `README.md`
2. Consulte o guia de deploy em `DEPLOY.md`
3. Verifique a documentação oficial:
   - [Vite](https://vitejs.dev/)
   - [React](https://react.dev/)
   - [Tailwind](https://tailwindcss.com/)

---

## ✨ PRÓXIMOS PASSOS

1. ✅ Execute o projeto: `npm run dev`
2. ✅ Personalize as informações
3. ✅ Adicione seus projetos reais
4. ✅ Atualize seu currículo PDF
5. ✅ Teste tudo
6. ✅ Faça o deploy (publique online)
7. ✅ Compartilhe seu portfólio!

---

## 🎉 PRONTO!

Seu portfólio está completo e pronto para impressionar recrutadores!

Desenvolvido com ❤️ por Victor Iofna Caba | © 2026

---

**Localização do Projeto:**
`C:\Users\iofna\Desktop\portfolio-victor-iofna`

**Para iniciar:**
```bash
cd C:\Users\iofna\Desktop\portfolio-victor-iofna
npm run dev
```

**URL Local:**
http://localhost:5173
