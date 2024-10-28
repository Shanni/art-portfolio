<!-- Previous script section remains the same -->

<script lang="ts">
  export let images: string[];
  export let title: string;
  
  let currentIndex = 0;
  let isTransitioning = false;

  function nextSlide() {
    if (!isTransitioning && images.length > 1) {
      isTransitioning = true;
      currentIndex = (currentIndex + 1) % images.length;
      setTimeout(() => isTransitioning = false, 500);
    }
  }

  function previousSlide() {
    if (!isTransitioning && images.length > 1) {
      isTransitioning = true;
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      setTimeout(() => isTransitioning = false, 500);
    }
  }
</script>

<div class="slideshow">
  <div class="slideshow-container">
    <img
      src={images[currentIndex]}
      alt={`${title} - Image ${currentIndex + 1}`}
      class="slide"
      class:transitioning={isTransitioning}
    />
    
    {#if images.length > 1}
      <button class="nav-button prev" on:click={previousSlide} aria-label="Previous image">
        ←
      </button>
      <button class="nav-button next" on:click={nextSlide} aria-label="Next image">
        →
      </button>
      
      <div class="dots">
        {#each images as _, i}
          <button
            class="dot"
            class:active={i === currentIndex}
            on:click={() => {
              if (!isTransitioning) {
                isTransitioning = true;
                currentIndex = i;
                setTimeout(() => isTransitioning = false, 500);
              }
            }}
            aria-label={`Go to image ${i + 1}`}
          />
        {/each}
      </div>
    {/if}
  </div>
</div>

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
    border-radius: var(--radius-lg);
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

  .slide.transitioning {
    opacity: 0.5;
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: var(--color-primary);
    color: var(--color-background);
    border: none;
    padding: var(--space-md);
    cursor: pointer;
    font-size: 1.5rem;
    transition: all var(--transition-fast);
    opacity: 0;
    z-index: 2;
  }

  .slideshow-container:hover .nav-button {
    opacity: 0.8;
  }

  .nav-button:hover {
    opacity: 1 !important;
    background: var(--color-secondary);
    transform: translateY(-50%) scale(1.1);
  }

  .prev {
    left: 0;
    border-radius: 0 var(--radius-md) var(--radius-md) 0;
  }

  .next {
    right: 0;
    border-radius: var(--radius-md) 0 0 var(--radius-md);
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
    border-radius: var(--radius-full);
    background: var(--color-background);
    border: 2px solid var(--color-primary);
    cursor: pointer;
    padding: 0;
    transition: all var(--transition-fast);
    opacity: 0.7;
  }

  .dot:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  .dot.active {
    background: var(--color-primary);
    transform: scale(1.2);
    opacity: 1;
  }

  @media (max-width: 768px) {
    .nav-button {
      padding: var(--space-sm);
      font-size: 1.25rem;
      opacity: 0.8;
    }

    .dot {
      width: 6px;
      height: 6px;
    }
  }
</style>
