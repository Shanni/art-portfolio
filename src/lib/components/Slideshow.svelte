<!-- Previous script section remains the same -->

<style>
  .slideshow {
    width: 100%;
    margin-bottom: var(--space-lg);
  }

  .slideshow-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: var(--color-tertiary);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
  }

  .slide {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity var(--transition-normal);
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: var(--color-primary);
    color: white;
    border: none;
    padding: var(--space-md);
    cursor: pointer;
    font-size: 1.5rem;
    transition: var(--transition-fast);
    opacity: 0;
  }

  .slideshow-container:hover .nav-button {
    opacity: 1;
  }

  .nav-button:hover {
    background: var(--color-secondary);
    transform: translateY(-50%) scale(1.1);
  }

  .dots {
    position: absolute;
    bottom: var(--space-md);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: var(--space-sm);
    z-index: 2;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid var(--color-primary);
    cursor: pointer;
    padding: 0;
    transition: var(--transition-fast);
  }

  .dot.active {
    background: var(--color-primary);
    transform: scale(1.2);
  }
</style>
