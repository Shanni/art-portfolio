import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

// Create store with initial value
const theme = writable<Theme>('light');

// Update theme and save to localStorage
function toggleTheme() {
  theme.update(current => {
    const newTheme = current === 'light' ? 'dark' : 'light';
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    }
    return newTheme;
  });
}

// Initialize theme from localStorage if in browser
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme') as Theme;
  if (savedTheme) {
    theme.set(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.set('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

export { theme, toggleTheme };
