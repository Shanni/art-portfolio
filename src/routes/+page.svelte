<script lang="ts">
  import Layout from '$lib/components/Layout.svelte';
  
  const artworks = [
    {
      title: 'Imaginary Landscape',
      description: 'This painting series explores surreal, dreamlike landscapes where reality bends and imagination takes over. From floating islands and swirling skies to mystical forests and impossible terrains, each piece invites viewers to journey through fantastical worlds filled with wonder and whimsy.',
      images: [
        '/artwork/landscape-1.jpg',
        '/artwork/landscape-2.jpg',
        '/artwork/landscape-3.jpg',
        '/artwork/landscape-4.jpg'
      ]
    },
    {
      title: 'Studio Work',
      description: 'A collection of pieces created in the studio, exploring various techniques and mediums.',
      images: [
        '/artwork/studio-1.jpg',
        '/artwork/studio-2.jpg'
      ]
    },
    {
      title: 'Daily Study',
      description: 'Daily sketches and studies exploring different subjects and styles.',
      images: [
        '/artwork/study-1.jpg',
        '/artwork/study-2.jpg',
        '/artwork/study-3.jpg'
      ]
    }
  ];
</script>

<Layout {artworks} />
