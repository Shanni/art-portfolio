<!-- Similar structure to imaginary-landscape but with daily study content -->

<script lang="ts">
  import CategoryLayout from '$lib/components/CategoryLayout.svelte';
  import type { ArtworkDetail } from '$lib/types/artwork';

  const title = "Daily Studies";
  const description = "A collection of daily art studies and practice pieces.";
  
  const artworks: ArtworkDetail[] = [
    {
      title: "Daily Sketch Series #1",
      description: "Part of my daily practice routine.",
      dimensions: "8.5\" x 11\"",
      medium: "Pencil and ink on paper",
      year: "2023",
      technique: "Quick sketching, gesture drawing",
      mediaType: 'image',
      mediaSource: "/artwork/study-1.jpg"
    },
    {
      title: "Digital Practice Studies",
      description: "Digital painting studies focusing on light and color.",
      dimensions: "2400 x 3200 px",
      medium: "Digital (Procreate)",
      year: "2023",
      technique: "Digital brushwork, layering techniques",
      mediaType: 'video',
      mediaSource: "/videos/digital-practice.mp4"
    }
  ];
</script>

<CategoryLayout {title} {description} {artworks} />

<style>
  /* Same styles as imaginary-landscape page */
</style>
