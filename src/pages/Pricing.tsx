import React, { useState } from 'react';
import { pricingTiers } from '@/data/pricing';
import { PricingCard } from '@/components/PricingCard';

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for&nbsp;you
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-x-4 rounded-full p-1 bg-white shadow-sm border">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                billingPeriod === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                billingPeriod === 'annual'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} billingPeriod={billingPeriod} />
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-3xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <dl className="space-y-8">
            <div>
              <dt className="text-lg font-semibold text-gray-900">
                How does the Canva integration work?
              </dt>
              <dd className="mt-2 text-gray-600">
                Our templates are directly integrated with Canva. Click the "Edit in Canva" button
                on any template to open it in Canva's editor with all elements ready for
                customization.
              </dd>
            </div>
            <div>
              <dt className="text-lg font-semibold text-gray-900">
                Can I use the templates commercially?
              </dt>
              <dd className="mt-2 text-gray-600">
                Yes, all our templates come with a commercial license. You can use them for your
                business, YouTube channel, or any other commercial purpose.
              </dd>
            </div>
            <div>
              <dt className="text-lg font-semibold text-gray-900">
                What's included in the custom template requests?
              </dt>
              <dd className="mt-2 text-gray-600">
                Business plan subscribers can request custom templates tailored to their brand
                guidelines. Our design team will create unique templates matching your specific
                needs.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}