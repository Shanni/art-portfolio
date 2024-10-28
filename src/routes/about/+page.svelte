<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';

  const socialLinks = [
    { name: 'Email', url: 'mailto:your@email.com', icon: '✉️' },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/shanni_daily_drawing/', 
      icon: '📸' 
    }
  ];
</script>

<div class="about-container">
  <nav class="back-nav">
    <a href="/" class="back-link">← Back to Portfolio</a>
  </nav>

  <div class="about-content">
    <div class="profile-section">
      <img 
        src="/images/profile.jpg" 
        alt="Shan Liu" 
        class="profile-image"
      />
      <h1 class="name">Shan Liu</h1>
      <div class="social-links">
        {#each socialLinks as link}
          <a href={link.url} class="social-link" target="_blank" rel="noopener noreferrer">
            <span class="icon">{link.icon}</span>
            <span class="label">{link.name}</span>
          </a>
        {/each}
      </div>
    </div>

    <div class="bio-section">
      <h2>About Me</h2>
      <p class="bio">
        Hi, I'm Shan Liu, a visual artist based in [Your Location]. My work explores the intersection 
        of imagination and reality, creating dreamlike landscapes and surreal compositions that 
        invite viewers into new worlds.
      </p>
      
      <p class="bio">
        With a background in [Your Background/Education], I combine traditional techniques with 
        digital tools to create unique artistic expressions. My process involves [Brief description 
        of your artistic process or philosophy].
      </p>

      <div class="interests">
        <h3>Areas of Focus</h3>
        <ul class="interests-list">
          <li>Digital Illustration</li>
          <li>Concept Art</li>
          <li>Character Design</li>
          <li>Environmental Art</li>
        </ul>
      </div>
    </div>
  </div>

  <ThemeToggle />
</div>

<style>
  .about-container {
    min-height: 100vh;
    padding: var(--space-xl);
    background-color: var(--color-background);
    color: var(--color-text);
  }

  .back-nav {
    margin-bottom: var(--space-xl);
  }

  .back-link {
    color: var(--color-text);
    text-decoration: none;
    font-size: var(--text-lg);
    transition: var(--transition-fast);
  }

  .back-link:hover {
    color: var(--color-secondary);
  }

  .about-content {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: var(--space-xl);
  }

  .profile-section {
    text-align: center;
  }

  .profile-image {
    width: 240px;
    height: 240px;
    border-radius: var(--radius-full);
    object-fit: cover;
    margin-bottom: var(--space-lg);
    box-shadow: var(--shadow-lg);
    border: 4px solid var(--color-background);
    transition: var(--transition-normal);
  }

  .profile-image:hover {
    transform: scale(1.02);
  }

  .name {
    font-size: var(--text-3xl);
    margin-bottom: var(--space-md);
    color: var(--color-primary);
  }

  .social-links {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    margin-top: var(--space-lg);
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm);
    color: var(--color-text);
    text-decoration: none;
    transition: var(--transition-fast);
    border-radius: var(--radius-md);
  }

  .social-link:hover {
    background: var(--color-tertiary);
    transform: translateX(var(--space-xs));
  }

  .bio-section {
    padding: var(--space-lg);
    background: var(--color-tertiary);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
  }

  .bio {
    font-size: var(--text-lg);
    line-height: 1.8;
    margin-bottom: var(--space-lg);
  }

  .interests {
    margin-top: var(--space-xl);
  }

  .interests-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-md);
    margin-top: var(--space-md);
  }

  .interests-list li {
    padding: var(--space-sm) var(--space-md);
    background: var(--color-background);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    transition: var(--transition-fast);
  }

  .interests-list li:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  @media (max-width: 768px) {
    .about-container {
      padding: var(--space-lg) var(--space-md);
    }

    .about-content {
      grid-template-columns: 1fr;
      gap: var(--space-lg);
    }

    .profile-image {
      width: 200px;
      height: 200px;
    }

    .bio-section {
      padding: var(--space-md);
    }

    .interests-list {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 480px) {
    .about-container {
      padding: var(--space-md);
    }

    .interests-list {
      grid-template-columns: 1fr;
    }
  }
</style>
