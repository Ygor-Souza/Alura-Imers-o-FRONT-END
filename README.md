# Netflix Brasil - Clone UI/UX

Um projeto de clonagem da interface da Netflix Brasil, desenvolvido durante a **Imersão Front-End da Alura**. O projeto demonstra habilidades em HTML, CSS, JavaScript e design responsivo, incluindo um **sistema completo de Dark Mode/Light Mode**.

## 📋 Descrição

Este projeto recria a experiência visual da Netflix, incluindo:
- Página de seleção de perfil
- **Sistema de Dark Mode e Light Mode** com persistência em localStorage
- Efeitos hover e animações atraentes

## 📁 Estrutura do Projeto

```
Alura Imersão FRONT-END/
│
├── index.html          # Página de seleção de perfil
├── perfil.html         # Home da Netflix (página principal)
├── styles.css          # Estilos globais + temas (dark/light)
├── script.js           # Gerenciamento de Dark Mode/Light Mode
├── assets/             # Pasta de imagens e recursos
│   ├── perfil1.png
│   ├── perfil2.png
│
└── README.md           # Este arquivo
```

## 🌐 Páginas

### 1. **index.html** - Seleção de Perfil
Página inicial onde o usuário seleciona qual perfil deseja usar.

**Características:**
- Título "Quem está assistindo?"
- Dois perfis para seleção
- Efeitos hover interativos (escala, sombra, borda)
- Animações de entrada suave (slideInUp)
- Link para a página de perfil (perfil.html)
- **Botão de alternância de tema** (🌙/☀️) no canto superior direito

### 2. **perfil.html** - Home da Netflix
Página principal com catálogo de conteúdo.

**Características:**
- **Navbar fixa** com logo Netflix em itálico, menu de navegação
- **Botão de tema** na navbar e **botão de logout**
- **Banner principal** com chamada para ação (botões Play e Mais Info)
- **Seções de conteúdo:**
  - Em Alta Agora
  - Continuar Assistindo (com barra de progresso)
  - Séries Populares
  - Recomendados Para Você
- **Cards de filmes/séries** com efeitos de hover (zoom suave, filtro de brilho)
- **Footer** responsivo com links

## 🎨 Sistema de Temas (Dark Mode / Light Mode)

### Variáveis CSS - Dark Mode (Padrão)
```css
--primary-color: #e50914          /* Vermelho Netflix */
--primary-light: #f5353f          /* Vermelho claro */
--bg-primary: #000000             /* Fundo preto */
--bg-secondary: #0a0e27           /* Azul muito escuro */
--bg-tertiary: #1a1f3a            /* Azul escuro */
--text-primary: #ffffff           /* Texto branco */
--text-secondary: #b3b3b3         /* Texto cinza */
--text-tertiary: #666666          /* Texto cinza escuro */
--border-color: #222222           /* Borda escura */
```

### Variáveis CSS - Light Mode
```css
[data-theme="light"] {
  --primary-color: #d30713         /* Vermelho mais escuro */
  --primary-light: #e50914         /* Vermelho padrão */
  --bg-primary: #f5f5f5            /* Fundo cinza claro */
  --bg-secondary: #ffffff          /* Fundo branco */
  --bg-tertiary: #efefef           /* Fundo cinza muito claro */
  --text-primary: #1a1a1a          /* Texto preto */
  --text-secondary: #404040        /* Texto cinza escuro */
  --text-tertiary: #999999         /* Texto cinza */
  --border-color: #dddddd          /* Borda clara */
}
```

## 💻 JavaScript - script.js

### Funções Disponíveis

```javascript
toggleDarkMode()       // Alterna entre dark mode e light mode
enableDarkMode()       // Ativa dark mode
disableDarkMode()      // Ativa light mode
getDarkModeStatus()    // Retorna true se em dark mode, false se em light mode
updateThemeButton()    // Atualiza o visual do botão de tema
```

### Características

✅ **Detecção automática** - Detecta a preferência do sistema operacional  
✅ **Persistência** - Salva a preferência do usuário em localStorage  
✅ **Transições suaves** - 0.3s ease em todos os elementos  
✅ **Evento customizado** - Dispara 'themeChanged' quando o tema muda  
✅ **Botão dinâmico** - Muda entre 🌙 (dark) e ☀️ (light)  

### Exemplo de Uso

```javascript
// Escutar mudanças de tema
window.addEventListener('themeChanged', (event) => {
  console.log('Dark mode ativo:', event.detail.isDarkMode);
});

// Alternar tema programaticamente
toggleDarkMode();

// Verificar estado atual
if (getDarkModeStatus()) {
  console.log("Estamos em Dark Mode");
}
```

## 🎨 Estilo e Design

### Tipografia
- Font Family: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu`
- Tamanhos variados para hierarquia visual
- Letter-spacing negativo (-1px) para compactação Netflix-like

### Efeitos e Animações
- **Hover**: Scale suave (1.08), mudança de cor, sombra dinâmica
- **Transições**: 0.3s ease em todos os elementos interativos
- **Animações**: SlideInUp para entrada de elementos com delay escalonado
- **Gradientes**: Fundos e textos com gradientes suaves

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints para:

- **Desktop**: Tela cheia (>768px) - Grid 300px, perfis 200x200px
- **Tablet**: Medium (768px) - Grid 250px, perfis 140x140px
- **Mobile**: Small (<480px) - Grid 200px, perfis 100x100px

### Media Queries
- `@media (max-width: 768px)` - Tablets
- `@media (max-width: 480px)` - Celulares

## 🚀 Como Usar

### 1. **Clonar ou Baixar o Projeto**
```bash
git clone https://github.com/Ygor-Souza/Alura-Imersao-FRONT-END.git
cd Alura\ Imersao\ FRONT-END
```

### 2. **Abrir no Navegador**
- Localize o arquivo `index.html`
- Clique duas vezes para abrir no navegador padrão
- Ou clique com botão direito > "Abrir com" > Navegador

### 3. **Navegação**
- Clique em um perfil para ir para a home (perfil.html)
- Clique no botão 🌙/☀️ para alternar entre dark e light mode
- Clique em "Sair" para voltar à seleção de perfil

### 4. **Testar Dark Mode**
- O tema padrão é dark mode
- Clique no botão 🌙 no canto superior direito para ativar light mode
- Sua preferência é salva automaticamente
- Ao recarregar, o tema escolhido será mantido

## 📱 Features Principais

✅ **Design responsivo** para todas as telas  
✅ **Dark Mode / Light Mode** com persistência  
✅ **Animações suaves** em todos os elementos  
✅ **Efeitos hover** interativos  
✅ **Navbar fixa** com menu de navegação  
✅ **Carrossel de filmes** em grid dinâmico  
✅ **Barra de progresso** para séries  
✅ **Footer** em largura total  
✅ **Paleta de cores Netflix** impecável  
✅ **Tipografia otimizada** e moderna  
✅ **Acessibilidade básica** (aria-pressed, alt text)  
✅ **Detecção de preferência do sistema**  

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos, animações e temas com variáveis
- **JavaScript** - Gerenciamento de temas e interatividade
- **Flexbox e Grid** - Layouts responsivos
- **LocalStorage** - Persistência de dados

## 📝 Notas de Desenvolvimento

- Os cards de filmes utilizam imagens placeholder (`/assets/filme*.jpg`)
- O tema padrão é **Dark Mode** (como no sistema)
- As preferências de tema são salvas em `localStorage` com a chave `'theme'`
- Suporta detecção automática da preferência do SO via `prefers-color-scheme`
- Otimizado para navegadores modernos (Chrome, Firefox, Safari, Edge)

## 🔗 Inspiração

Este projeto foi desenvolvido como exercício prático da **Alura Imersão Front-End**, inspirado no design e experiência da [Netflix Brasil](https://www.netflix.com/br/).

## 👨‍💻 Autor

Desenvolvido por **Ygor Souza** durante a Imersão Front-End da Alura.

## 📄 Licença

Este projeto é de uso educacional e não tem afiliação com a Netflix. Desenvolvido como exercício de aprendizado.

---

**Versão**: 2.0  
**Data**: Março de 2026  
**Status**: ✅ Completo  
**Últimas Atualizações**: Dark Mode/Light Mode com persistência, otimizações de CSS

