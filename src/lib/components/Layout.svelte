<script lang="ts">
  import { onMount } from 'svelte';
  import Slideshow from './Slideshow.svelte';
  import type { Artwork } from '$lib/types/artwork';

  export let artworks: Artwork[] = [
    {
      title: 'Imaginary Landscape',
      description: 'This painting series explores surreal, dreamlike landscapes where reality bends and imagination takes over. From floating islands and swirling skies to mystical forests and impossible terrains, each piece invites viewers to journey through fantastical worlds filled with wonder and whimsy. The vibrant colors and imaginative details create a sense of magic and escape, offering a glimpse into realms beyond the ordinary.',
      images: ['/artwork/landscape-1.jpg']
    }
  ];

  let isMobileMenuOpen = false;
  let isScrolled = false;

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
  };
</script>

<div class="portfolio-layout">
  <!-- Mobile Header -->
  <header class="mobile-header" class:scrolled={isScrolled}>
    <h1 class="mobile-title">Shan's Art Work</h1>
    <button class="menu-toggle" on:click={toggleMobileMenu} aria-label="Toggle menu">
      <span class="hamburger" class:open={isMobileMenuOpen}></span>
    </button>
  </header>

  <!-- Sidebar (Desktop & Mobile) -->
  <nav class="sidebar" class:open={isMobileMenuOpen}>
    <h1 class="site-title">Shan's Art Work</h1>
    
    <ul class="main-nav">
      <li><a href="#imaginary-landscape" on:click={() => isMobileMenuOpen = false}>1. Imaginary Landscape</a></li>
      <li><a href="#studio-work" on:click={() => isMobileMenuOpen = false}>2. Studio Work</a></li>
      <li><a href="#daily-study" on:click={() => isMobileMenuOpen = false}>3. Shanni Daily Study</a></li>
    </ul>
    
    <ul class="secondary-nav">
      <li><a href="/about" on:click={() => isMobileMenuOpen = false}>About</a></li>
      <li><a href="mailto:your@email.com">Email</a></li>
      <li><a href="https://instagram.com/your-handle">Instagram</a></li>
    </ul>
    
    <div class="copyright">
      ©2032 Future Text
    </div>
  </nav>

  <main class="content">
    {#each artworks as artwork}
      <section class="artwork-section" id={artwork.title.toLowerCase().replace(/\s+/g, '-')}>
        <Slideshow images={artwork.images} title={artwork.title} />
        <h2 class="artwork-title">{artwork.title}</h2>
        <p class="artwork-description">{artwork.description}</p>
      </section>
    {/each}
  </main>

  {#if isMobileMenuOpen}
    <div class="overlay" on:click={toggleMobileMenu}></div>
  {/if}
</div>

<style>
  .portfolio-layout {
    display: flex;
    min-height: 100vh;
    background-color: var(--color-tertiary);
  }

  .mobile-header {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: var(--space-md);
    background: var(--color-background);
    z-index: 1000;
    transition: var(--transition-normal);
  }

  .mobile-header.scrolled {
    box-shadow: var(--shadow-md);
  }

  .mobile-title {
    font-family: var(--font-secondary);
    font-size: 1.25rem;
    margin: 0;
    color: var(--color-primary);
  }

  .sidebar {
    width: 300px;
    padding: var(--space-xl);
    position: fixed;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--color-background);
    border-right: 1px solid rgba(45, 48, 71, 0.1);
    transition: var(--transition-normal);
  }

  .site-title {
    font-family: var(--font-secondary);
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: var(--space-xl);
    letter-spacing: -0.02em;
  }

  .main-nav, .secondary-nav {
    list-style: none;
    padding: 0;
  }

  .main-nav {
    margin-bottom: var(--space-xl);
  }

  .main-nav li, .secondary-nav li {
    margin-bottom: var(--space-md);
  }

  a {
    color: var(--color-text);
    text-decoration: none;
    transition: var(--transition-fast);
    padding: var(--space-xs) 0;
    display: inline-block;
  }

  a:hover {
    color: var(--color-secondary);
    text-decoration: none;
    transform: translateX(var(--space-xs));
  }

  .content {
    margin-left: 300px;
    padding: var(--space-xl);
    width: calc(100% - 300px);
    background-color: var(--color-background);
  }

  .artwork-section {
    margin-bottom: var(--space-xl);
    padding: var(--space-lg);
    background: var(--color-tertiary);
    border-radius: 12px;
    transition: var(--transition-normal);
  }

  .artwork-section:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .artwork-title {
    font-size: 2rem;
    margin: var(--space-lg) 0 var(--space-md);
    color: var(--color-primary);
  }

  .artwork-description {
    max-width: 70ch;
    line-height: 1.8;
    font-size: 1.1rem;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(45, 48, 71, 0.5);
    backdrop-filter: blur(4px);
    z-index: 998;
    transition: var(--transition-normal);
  }

  .copyright {
    font-size: 0.875rem;
    color: #666;
  }

  .menu-toggle {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1001;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: none;
  }

  .hamburger {
    position: relative;
    display: block;
    width: 24px;
    height: 2px;
    background: var(--color-primary);
    margin: auto;
    transition: var(--transition-normal);
  }

  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: var(--color-primary);
    left: 0;
    transition: var(--transition-normal);
  }

  .hamburger::before {
    top: -8px;
  }

  .hamburger::after {
    bottom: -8px;
  }

  .hamburger.open {
    background: transparent;
  }

  .hamburger.open::before {
    transform: rotate(45deg);
    top: 0;
  }

  .hamburger.open::after {
    transform: rotate(-45deg);
    bottom: 0;
  }

  @media (max-width: 768px) {
    .portfolio-layout {
      flex-direction: column;
    }

    .mobile-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--header-height);
      padding: 0 var(--space-md);
    }

    .menu-toggle {
      display: block;
    }

    .sidebar {
      position: fixed;
      width: 100%;
      height: 100vh;
      padding: calc(var(--header-height) + var(--space-lg)) var(--space-lg) var(--space-lg);
      transform: translateX(-100%);
      z-index: 999;
      background: var(--color-background);
      box-shadow: var(--shadow-lg);
    }

    .sidebar.open {
      transform: translateX(0);
    }

    .site-title {
      display: none;
    }

    .content {
      margin-left: 0;
      width: 100%;
      padding: calc(var(--header-height) + var(--space-md)) var(--space-md) var(--space-md);
    }

    .artwork-section {
      margin-bottom: var(--space-xl);
      padding: var(--space-md);
    }

    .artwork-title {
      font-size: var(--text-2xl);
    }

    .artwork-description {
      font-size: var(--text-base);
    }
  }

  @media (max-width: 480px) {
    .content {
      padding: calc(var(--header-height) + var(--space-sm)) var(--space-sm) var(--space-sm);
    }

    .artwork-section {
      margin-bottom: var(--space-lg);
      padding: var(--space-sm);
    }

    .artwork-title {
      font-size: var(--text-xl);
    }
  }
</style>
