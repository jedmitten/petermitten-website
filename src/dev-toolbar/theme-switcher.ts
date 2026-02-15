/**
 * Custom Astro Dev Toolbar App for Theme Switching
 * Only visible during development (npm run dev)
 */

import type { DevToolbarApp } from 'astro';

const themes = [
  { value: 'light', label: 'Light', icon: '☀️' },
  { value: 'dark', label: 'Dark', icon: '🌙' },
  { value: 'sandiego-sunset', label: 'San Diego Sunset', icon: '🌅' },
  { value: 'california-ocean', label: 'California Ocean', icon: '🌊' },
  { value: 'gallery-minimal', label: 'Gallery Minimal', icon: '🖼️' }
];

export default {
  id: 'theme-switcher',
  name: 'Theme Switcher',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><text x="2" y="18" font-size="18">🎨</text></svg>',

  init(canvas, eventTarget) {
    // Get current theme
    const getCurrentTheme = () => {
      return window.document.documentElement.getAttribute('data-theme') || 'light';
    };

    // Apply theme
    const applyTheme = (theme) => {
      const html = window.document.documentElement;
      html.setAttribute('data-theme', theme);
      html.style.colorScheme = theme === 'dark' ? 'dark' : 'light';
      localStorage.setItem('theme', theme);

      // Refresh the UI
      renderUI();
    };

    // Render the UI
    const renderUI = () => {
      canvas.innerHTML = '';

      const container = document.createElement('astro-dev-toolbar-window');

      const content = document.createElement('div');
      content.style.cssText = `
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        min-width: 240px;
      `;

      const title = document.createElement('h3');
      title.textContent = 'Select Theme';
      title.style.cssText = `
        margin: 0 0 12px 0;
        font-size: 14px;
        font-weight: 600;
        opacity: 0.9;
      `;
      content.appendChild(title);

      const currentTheme = getCurrentTheme();

      themes.forEach(theme => {
        const button = document.createElement('button');
        button.style.cssText = `
          all: unset;
          box-sizing: border-box;
          padding: 10px 12px;
          border: 1px solid ${theme.value === currentTheme ? 'var(--astro-dev-toolbar-accent)' : 'rgba(255, 255, 255, 0.15)'};
          background: ${theme.value === currentTheme ? 'rgba(var(--astro-dev-toolbar-accent-rgb), 0.2)' : 'rgba(255, 255, 255, 0.05)'};
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.15s ease;
          width: 100%;
        `;

        button.innerHTML = `
          <span style="font-size: 16px;">${theme.icon}</span>
          <span style="flex: 1; text-align: left;">${theme.label}</span>
          ${theme.value === currentTheme ? '<span style="color: var(--astro-dev-toolbar-accent); font-weight: bold;">✓</span>' : ''}
        `;

        button.addEventListener('click', () => {
          applyTheme(theme.value);
        });

        button.addEventListener('mouseenter', () => {
          if (theme.value !== currentTheme) {
            button.style.background = 'rgba(255, 255, 255, 0.1)';
            button.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          }
        });

        button.addEventListener('mouseleave', () => {
          if (theme.value !== currentTheme) {
            button.style.background = 'rgba(255, 255, 255, 0.05)';
            button.style.borderColor = 'rgba(255, 255, 255, 0.15)';
          }
        });

        content.appendChild(button);
      });

      container.appendChild(content);
      canvas.appendChild(container);
    };

    renderUI();
  }
} satisfies DevToolbarApp;
