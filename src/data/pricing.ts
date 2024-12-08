import { PricingTier } from '@/types';

export const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for individual content creators',
    monthlyPrice: 499,
    annualPrice: 4990,
    features: [
      '5 thumbnail downloads per month',
      'HD quality downloads',
      'Commercial license',
      'Basic support'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Best for active content creators',
    monthlyPrice: 999,
    annualPrice: 9990,
    features: [
      '15 thumbnail downloads per month',
      'Priority support',
      'Commercial license',
      'Early access to new thumbnails',
      'Custom color variations'
    ],
    highlighted: true
  },
  {
    id: 'business',
    name: 'Business',
    description: 'For teams and businesses',
    monthlyPrice: 1999,
    annualPrice: 19990,
    features: [
      'Unlimited thumbnail downloads',
      'Dedicated support',
      'Commercial license',
      'Custom branding options',
      'API access',
      'Team sharing'
    ]
  }
];