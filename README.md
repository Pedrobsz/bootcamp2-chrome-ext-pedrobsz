# Bootcamp2-chrome-ext-<seu-usuario>-starter

## 📌 Descrição
Extensão de **Bloco de Notas** desenvolvida em **Manifest V3** para Google Chrome.  
O usuário pode escrever suas anotações em um campo de texto e salvá-las usando `chrome.storage.local`.  
As anotações ficam persistidas no navegador e são restauradas automaticamente ao reabrir o popup.

---

## 🚀 Como carregar a extensão no Chrome
1. Baixe o arquivo ZIP.  
2. Abra o Google Chrome e acesse `chrome://extensions/`.  
3. Ative o **Modo do desenvolvedor** (canto superior direito).  
4. Clique em **Carregar sem compactação (Load unpacked)**.  
5. Selecione a pasta raiz deste projeto.  
6. A extensão estará disponível na barra de extensões.

---

## 📂 Estrutura do projeto

note-extension/

├─ docs/               # Página do projeto (GitHub Pages)

│  └─ index.html

├─ icons/              # Ícones da extensão

│  └─ icon.png

├─ src/

│  ├─ background/      # Scripts em segundo plano (service worker)

│  │  └─ service-worker.js

│  ├─ content/         # Scripts injetados em páginas

│  │  └─ content.js

│  ├─ popup/           # Interface do popup

│  │  ├─ popup.css

│  │  ├─ popup.html

│  │  └─ popup.js

│  └─ styles/          # Estilos globais

│     └─ global.css

├─ LICENSE

├─ manifest.json       # Configuração principal da extensão

└─ README.md           # Documentação do projeto

---

## 🛠 Tecnologias utilizadas
- **HTML5** para a interface.  
- **CSS3** para estilização.  
- **JavaScript** para a lógica do bloco de notas.  
- **Chrome Extensions API (Manifest V3)** para integração com o navegador.  

---

## ✨ Funcionalidades
- Campo de texto para escrever anotações.  
- Botão **Salvar** que guarda o conteúdo no `chrome.storage.local`.  
- Restauração automática da última nota ao abrir o popup novamente.  
- Layout limpo e responsivo para facilitar o uso.  

---

## 📖 Observações
- O botão **Salvar** grava o texto diretamente no armazenamento local do Chrome.  
- As notas são mantidas mesmo que o navegador seja fechado e reaberto.  
- Este projeto segue a estrutura solicitada no Bootcamp.
  
---

## 🔗 Links do Projeto

- 📂 Repositório: [GitHub Code](https://github.com/Pedrobsz/bootcamp2-chrome-ext-pedrobsz.git)
- 🌐 Landing Page: [GitHub Pages](https://pedrobsz.github.io/bootcamp2-chrome-ext-pedrobsz/)
- 🚀 Release: [Página da Release](https://github.com/Pedrobsz/bootcamp2-chrome-ext-pedrobsz/releases)
- 📦 Download ZIP: [Extensão para instalação](https://github.com/Pedrobsz/bootcamp2-chrome-ext-pedrobsz/releases/download/untagged-d1cffc8f4cdb3592ac5b/note-extension.zip)
