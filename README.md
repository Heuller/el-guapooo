# El Guapo - Caderno de Receitas Artesanais 🍞🍰

El Guapo é um caderno de receitas digital com design editorial premium, focado em panificação de fermentação natural, confeitaria avançada e ingredientes autorais. 

Construído para rodar em tablets, smartphones ou desktops, oferece uma experiência impecável diretamente na cozinha, eliminando telas poluídas e auxiliando nas etapas com cronômetros e calculadoras automatizadas.

## 🚀 Tecnologias e Arquitetura (Stack Moderna)
Este projeto foi recentemente migrado e reestruturado para um ecossistema front-end de alto desempenho:
- **Framework Core:** React 18 + TypeScript
- **Build Tool:** Vite (rápido e otimizado)
- **Estilização e UI:** Tailwind CSS (com design system artesanal e paleta 'terracota')
- **Animações:** Framer Motion (transições fluídas e micro-interações imersivas)
- **Ícones:** Lucide React
- **Gerenciamento de Estado:** Zustand (para o dock de temporizadores e modo cozinha)
- **PWA (Progressive Web App):** Suporte nativo offline usando `vite-plugin-pwa` e registro de Service Workers.

## ✨ Principais Funcionalidades
- **Sistema de Escala Inteligente:** Calcule na hora o rendimento da receita com multiplicadores exatos (½×, 1×, 1,5×, 2×, etc.), ajustando fórmulas e a porcentagem do padeiro automaticamente.
- **Modo Cozinha (Foco Absoluto):** Interface imersiva que mostra os passos da receita um a um em formato maximizado, ideal para mãos sujas na cozinha. Bloqueia distrações e rolagem da tela.
- **TimerDock Integrado:** Múltiplos temporizadores que rodam independentes no background da aplicação. Um dock flutuante persistente te lembra quando é hora de fazer a dobra na massa ou retirar o bolo do forno.
- **Auditoria Rigorosa de UI/UX:** Estrutura otimizada sem colisões de z-index (anti-bleeding) e design 100% livre de vazamentos de layout (overflow), testado para iPhone SE até SmartTVs.

## 💻 Desenvolvimento Local

Para rodar o projeto localmente:

1. Clone o repositório ou navegue até a pasta:
```bash
cd el-guapooo
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador em `http://localhost:5173`

## 📦 Build e Deploy

Para gerar os arquivos otimizados de produção (PWA incluído):
```bash
npm run build
```
O diretório `/dist` gerado conterá tudo que você precisa para subir o site no GitHub Pages, Vercel ou Netlify.

## 🎨 Visual Identity
*Feito com o coração, para surpreender o seu ♥*
