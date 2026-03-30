// ===================== DARK MODE / LIGHT MODE =====================

// Variável para armazenar o estado do tema
let isDarkMode = true;

/**
 * Inicializa o tema ao carregar a página
 * Verifica localStorage ou preferência do sistema
 */
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    isDarkMode = savedTheme === 'dark';
  } else {
    // Detecta preferência do sistema
    isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  applyTheme();
}

/**
 * Aplica o tema atual ao documento
 */
function applyTheme() {
  if (isDarkMode) {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  
  updateThemeButton();
}

/**
 * Alterna entre dark mode e light mode
 */
function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  applyTheme();
  
  // Salva a preferência no localStorage
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  
  // Dispara um evento customizado para notificar sobre a mudança
  window.dispatchEvent(new CustomEvent('themeChanged', { 
    detail: { isDarkMode } 
  }));
}

/**
 * Ativa o dark mode
 */
function enableDarkMode() {
  if (!isDarkMode) {
    toggleDarkMode();
  }
}

/**
 * Desativa o dark mode (ativa light mode)
 */
function disableDarkMode() {
  if (isDarkMode) {
    toggleDarkMode();
  }
}

/**
 * Retorna o estado atual do dark mode
 */
function getDarkModeStatus() {
  return isDarkMode;
}

/**
 * Atualiza o visual do botão de tema
 */
function updateThemeButton() {
  const button = document.getElementById('themeToggle');
  if (button) {
    button.setAttribute('aria-pressed', !isDarkMode);
  }
}

// Inicializa o tema quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}

// Listener para mudanças de preferência do sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    isDarkMode = e.matches;
    applyTheme();
  }
});

// ===================== EVENTOS DE TEMA =====================

/**
 * Listener para quando o tema muda
 * Use assim: window.addEventListener('themeChanged', (e) => { console.log(e.detail.isDarkMode) })
 */
window.addEventListener('themeChanged', (event) => {
  console.log('Tema alterado para:', event.detail.isDarkMode ? 'Dark Mode' : 'Light Mode');
});
