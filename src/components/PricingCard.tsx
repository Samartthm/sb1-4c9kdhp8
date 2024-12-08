import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '@/types';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  tier: PricingTier;
  billingPeriod: 'monthly' | 'annual';
}

export function PricingCard({ tier, billingPeriod }: PricingCardProps) {
  const price = billingPeriod === 'monthly' ? tier.monthlyPrice : tier.annualPrice;

  return (
    <div
      className={cn(
        'rounded-2xl border border-gray-200 p-8',
        tier.highlighted && 'border-2 border-blue-600 shadow-lg'
      )}
    >
      <h3 className="text-lg font-semibold leading-8 text-gray-900">{tier.name}</h3>
      <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-4xl font-bold tracking-tight text-gray-900">₹{price}</span>
        <span className="text-sm font-semibold leading-6 text-gray-600">
          /{billingPeriod === 'monthly' ? 'month' : 'year'}
        </span>
      </p>
      <Button variant={tier.highlighted ? 'primary' : 'outline'} className="mt-6 w-full">
        Get started
      </Button>
      <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <Check className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}