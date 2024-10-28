<!-- Similar structure to imaginary-landscape but with studio work content -->

<script lang="ts">
  import CategoryLayout from '$lib/components/CategoryLayout.svelte';
  import type { ArtworkDetail } from '$lib/types/artwork';

  const title = "Studio Work";
  const description = "A collection of studio pieces exploring various traditional mediums and techniques.";
  
  const artworks: ArtworkDetail[] = [
    {
      title: "Color Study in Oil",
      description: "A series of oil painting studies focusing on color relationships and light.",
      dimensions: "16\" x 20\"",
      medium: "Oil on canvas",
      year: "2023",
      technique: "Alla prima painting with palette knife",
      mediaType: 'image',
      mediaSource: "/artwork/studio-1.jpg"
    },
    {
      title: "Figure Drawing Series",
      description: "Part of an ongoing series of figure studies.",
      dimensions: "18\" x 24\"",
      medium: "Charcoal and graphite on paper",
      year: "2023",
      technique: "Traditional drawing techniques with emphasis on gesture",
      mediaType: 'image',
      mediaSource: "/artwork/studio-2.jpg"
    }
  ];
</script>

<CategoryLayout {title} {description} {artworks} />

<style>
  /* Same styles as imaginary-landscape page */
</style>
