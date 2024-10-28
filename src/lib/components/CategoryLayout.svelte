<script lang="ts">
  import ThemeToggle from './ThemeToggle.svelte';
  import CategoryPageStyles from './CategoryPageStyles.svelte';
  import type { ArtworkDetail } from '$lib/types/artwork';

  export let title: string;
  export let description: string;
  export let artworks: ArtworkDetail[];
</script>

<CategoryPageStyles />

<div class="category-page">
  <nav class="back-nav">
    <a href="/" class="back-link">← Back to Portfolio</a>
  </nav>

  <header class="category-header">
    <h1>{title}</h1>
    <p class="category-description">{description}</p>
  </header>

  <div class="artwork-grid">
    {#each artworks as artwork}
      <article class="artwork-card">
        {#if artwork.mediaType === 'video'}
          <video controls class="artwork-image">
            <source src={artwork.mediaSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        {:else}
          <img src={artwork.mediaSource} alt={artwork.title} class="artwork-image"/>
        {/if}
        <div class="artwork-details">
          <h2>{artwork.title}</h2>
          <p class="description">{artwork.description}</p>
          <dl class="specs">
            <div class="spec-item">
              <dt>Dimensions</dt>
              <dd>{artwork.dimensions}</dd>
            </div>
            <div class="spec-item">
              <dt>Medium</dt>
              <dd>{artwork.medium}</dd>
            </div>
            <div class="spec-item">
              <dt>Year</dt>
              <dd>{artwork.year}</dd>
            </div>
            {#if artwork.technique}
              <div class="spec-item">
                <dt>Technique</dt>
                <dd>{artwork.technique}</dd>
              </div>
            {/if}
          </dl>
        </div>
      </article>
    {/each}
  </div>

  <ThemeToggle />
</div>
