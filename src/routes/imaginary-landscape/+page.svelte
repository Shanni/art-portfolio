<script lang="ts">
  import CategoryLayout from '$lib/components/CategoryLayout.svelte';
  import type { ArtworkDetail } from '$lib/types/artwork';

  const title = "Imaginary Landscapes";
  const description = "A series exploring surreal and dreamlike landscapes that blur the line between reality and imagination.";
  
  const artworks: ArtworkDetail[] = [
    {
      title: "Floating Islands at Dawn",
      description: "A dreamlike scene depicting floating islands suspended in a misty morning sky.",
      dimensions: "36\" x 48\"",
      medium: "Digital painting, Procreate",
      year: "2023",
      technique: "Layer blending with custom brushwork",
      mediaType: 'image',
      mediaSource: "/artwork/landscape-1.jpg"
    },
    {
      title: "Crystal Forest",
      description: "An otherworldly forest where crystalline structures merge with organic forms.",
      dimensions: "24\" x 36\"",
      medium: "Mixed media - Watercolor and digital",
      year: "2023",
      technique: "Traditional watercolor base with digital enhancement",
      mediaType: 'video',
      mediaSource: "/videos/crystal-forest.mp4" // Example video path
    }
    // Add more artworks
  ];
</script>

<CategoryLayout {title} {description} {artworks} />
