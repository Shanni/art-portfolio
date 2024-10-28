<script lang="ts">
  import Layout from '$lib/components/Layout.svelte';
  
  const artworks = [
    {
      title: 'Imaginary Landscape',
      description: 'This painting series explores surreal, dreamlike landscapes...',
      images: ['/artwork/landscape-1.jpg']
    },
    {
      title: 'Studio Work',
      description: 'A collection of pieces created in the studio...',
      images: ['/videos/studio-process.mp4'] // Video file
    },
    {
      title: 'Daily Study',
      description: 'Daily sketches and studies...',
      images: ['/artwork/study-1.jpg']
    }
  ];
</script>

<Layout {artworks} />
