/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Design {
  id: string;
  title: string;
  category: 'Bridal' | 'Arabic' | 'Minimalist' | 'Traditional';
  imageUrl: string;
  description: string;
}

export const DESIGNS: Design[] = [
  {
    id: '1',
    title: 'Intricate Bridal Grandeur',
    category: 'Bridal',
    imageUrl: 'https://picsum.photos/seed/mehndi-bridal-full/800/1200',
    description: 'A masterpiece of symmetry and detail, featuring traditional peacock and lotus motifs for the modern bride.'
  },
  {
    id: '2',
    title: 'Contemporary Arabic Flow',
    category: 'Arabic',
    imageUrl: 'https://picsum.photos/seed/mehndi-arabic-flow/800/1200',
    description: 'Bold, flowing strokes and geometric patterns that create a striking visual impact on the back of the hand.'
  },
  {
    id: '3',
    title: 'Minimalist Finger Accents',
    category: 'Minimalist',
    imageUrl: 'https://picsum.photos/seed/mehndi-minimal-fingers/800/1200',
    description: 'Subtle and sophisticated designs focused on the fingertips, perfect for casual elegance.'
  },
  {
    id: '4',
    title: 'Heritage Rajasthani Jaal',
    category: 'Traditional',
    imageUrl: 'https://picsum.photos/seed/mehndi-rajasthani/800/1200',
    description: 'Classic net-like patterns (Jaal) combined with traditional motifs, reflecting centuries of artistry.'
  },
  {
    id: '5',
    title: 'Floral Mandala Centerpiece',
    category: 'Minimalist',
    imageUrl: 'https://picsum.photos/seed/mehndi-mandala-center/800/1200',
    description: 'A bold central mandala that serves as the focal point, surrounded by delicate lace-like details.'
  },
  {
    id: '6',
    title: 'Elegant Wrist Cuff',
    category: 'Arabic',
    imageUrl: 'https://picsum.photos/seed/mehndi-wrist-cuff/800/1200',
    description: 'A jewelry-inspired design that wraps around the wrist like a delicate bracelet.'
  },
  {
    id: '7',
    title: 'Whimsical Peacock Motif',
    category: 'Traditional',
    imageUrl: 'https://picsum.photos/seed/mehndi-peacock/800/1200',
    description: 'The iconic peacock symbol, representing beauty and grace, rendered with exceptional detail.'
  },
  {
    id: '8',
    title: 'Modern Geometric Fusion',
    category: 'Arabic',
    imageUrl: 'https://picsum.photos/seed/mehndi-geo-fusion/800/1200',
    description: 'A unique blend of traditional henna strokes with modern geometric shapes and negative space.'
  },
  {
    id: '9',
    title: 'Delicate Bridal Feet',
    category: 'Bridal',
    imageUrl: 'https://picsum.photos/seed/mehndi-feet-bridal/800/1200',
    description: 'Exquisite patterns designed specifically for the feet, complementing the bridal ensemble.'
  }
];
