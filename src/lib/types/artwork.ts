export interface Artwork {
  title: string;
  description: string;
  images: string[];
}


export interface ArtworkDetail {
  title: string;
  description: string;
  dimensions: string;  // e.g., "24" x 36""
  medium: string;      // e.g., "Oil on canvas"
  year: string;
  technique?: string;  // Optional
  collection?: string; // Optional
  mediaType: 'image' | 'video'; // New property to specify media type
  mediaSource: string; // URL for the image or video
}

export interface ArtworkCategory {
  title: string;
  description: string;
  images: string[];
  artworks: ArtworkDetail[];
}
