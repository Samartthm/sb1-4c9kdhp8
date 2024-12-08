import { Thumbnail } from '@/types';

export const thumbnails: Thumbnail[] = [
  {
    id: '1',
    title: 'Modern Tech Review Cover',
    category: 'Technology',
    description: 'A sleek and modern thumbnail perfect for tech review videos. Features a minimalist design with bold typography and subtle gradients.',
    imageUrl: 'https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 299,
    downloads: 1234,
    rating: 4.8,
    tags: ['tech', 'review', 'modern', 'minimal'],
    dimensions: {
      width: 1920,
      height: 1080
    },
    fileFormat: 'PNG',
    createdAt: '2024-03-15'
  },
  {
    id: '2',
    title: 'Lifestyle Vlog Thumbnail',
    category: 'Lifestyle',
    description: 'Vibrant and engaging thumbnail design perfect for lifestyle vlogs and daily content. Includes modern typography and image placement.',
    imageUrl: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 199,
    downloads: 856,
    rating: 4.6,
    tags: ['lifestyle', 'vlog', 'vibrant'],
    dimensions: {
      width: 1920,
      height: 1080
    },
    fileFormat: 'PNG',
    createdAt: '2024-03-14'
  },
  {
    id: '3',
    title: 'Gaming Stream Overlay',
    category: 'Gaming',
    description: 'High-energy gaming thumbnail with dynamic elements and eye-catching effects. Perfect for gaming content and live streams.',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 249,
    downloads: 2341,
    rating: 4.9,
    tags: ['gaming', 'stream', 'overlay', 'dynamic'],
    dimensions: {
      width: 1920,
      height: 1080
    },
    fileFormat: 'PNG',
    createdAt: '2024-03-13'
  }
];