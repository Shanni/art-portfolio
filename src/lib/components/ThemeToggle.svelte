<script lang="ts">
  import { theme, toggleTheme } from '$lib/stores/theme';
  
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  
  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
</script>

<button 
  class="theme-toggle" 
  on:click={toggleTheme} 
  aria-label="Toggle theme"
  title="Toggle theme"
>
  {#if $theme === 'light'}
    {@html moonIcon}
  {:else}
    {@html sunIcon}
  {/if}
</button>

<style>
  .theme-toggle {
    position: fixed;
    bottom: var(--space-lg);
    right: var(--space-lg);
    background: var(--color-background);
    color: var(--color-primary);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-full);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition-normal);
    z-index: var(--z-fixed);
    box-shadow: var(--shadow-md);
  }

  .theme-toggle:hover {
    transform: scale(1.1);
    background: var(--color-primary);
    color: var(--color-background);
  }

  @media (max-width: 768px) {
    .theme-toggle {
      bottom: var(--space-md);
      right: var(--space-md);
    }
  }
</style>
