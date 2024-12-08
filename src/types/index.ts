export interface Thumbnail {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  price: number;
  downloads: number;
  rating: number;
  tags: string[];
  dimensions: {
    width: number;
    height: number;
  };
  fileFormat: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  subscription: {
    plan: 'free' | 'basic' | 'pro' | 'business';
    status: 'active' | 'inactive';
    expiresAt: string;
  };
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  highlighted?: boolean;
}