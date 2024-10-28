<style>
  /* Shared styles for all category pages */
  :global(.category-page) {
    padding: var(--space-xl);
    background-color: var(--color-background);
    min-height: 100vh;
  }

  :global(.back-nav) {
    margin-bottom: var(--space-xl);
  }

  :global(.back-link) {
    color: var(--color-text);
    text-decoration: none;
    font-size: var(--text-lg);
    transition: var(--transition-fast);
  }

  :global(.back-link:hover) {
    color: var(--color-secondary);
  }

  :global(.category-header) {
    max-width: 800px;
    margin: 0 auto var(--space-xl);
    text-align: center;
  }

  :global(.category-description) {
    font-size: var(--text-base);
    color: var(--color-text-light);
    max-width: 70ch;
    margin: 0 auto;
    line-height: 1.6;
    padding: 0 var(--space-md);
  }

  :global(.artwork-grid) {
    display: grid;
    gap: var(--space-xl);
    max-width: var(--container-max);
    margin: 0 auto;
  }

  :global(.artwork-card) {
    background: var(--color-bg-alt);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition-normal);
  }

  :global(.artwork-card:hover) {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  :global(.artwork-image) {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    object-fit: cover;
  }

  :global(.artwork-details) {
    padding: var(--space-lg);
  }

  :global(.artwork-details h2) {
    color: var(--color-primary);
    margin-bottom: var(--space-md);
  }

  :global(.description) {
    color: var(--color-text-light);
    margin-bottom: var(--space-lg);
    line-height: 1.8;
  }

  :global(.specs) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-md);
  }

  :global(.spec-item) {
    display: grid;
    gap: var(--space-xs);
  }

  :global(.spec-item dt) {
    font-weight: var(--weight-medium);
    color: var(--color-text-light);
    font-size: var(--text-sm);
  }

  :global(.spec-item dd) {
    color: var(--color-text);
  }

  :global(.artwork-card .description) {
    font-size: var(--text-sm);
    color: var(--color-text-light);
    margin-bottom: var(--space-lg);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    :global(.category-page) {
      padding: var(--space-lg) var(--space-md);
    }

    :global(.artwork-details) {
      padding: var(--space-md);
    }

    :global(.specs) {
      grid-template-columns: 1fr 1fr;
    }

    :global(.category-description) {
      font-size: var(--text-sm);
      padding: 0 var(--space-sm);
    }

    :global(.artwork-card .description) {
      font-size: var(--text-xs);
      margin-bottom: var(--space-md);
    }
  }

  @media (max-width: 480px) {
    :global(.category-page) {
      padding: var(--space-md);
    }

    :global(.specs) {
      grid-template-columns: 1fr;
    }
  }
</style>
