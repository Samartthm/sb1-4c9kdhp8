import React from 'react';
import { Button } from './ui/Button';
import { Image } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="hidden sm:flex">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                New Collection: Gaming Thumbnails{' '}
                <a href="#" className="whitespace-nowrap font-semibold text-blue-600">
                  Browse now <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Professional Thumbnails Ready to Use
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Browse and download high-quality, ready-made thumbnails for your content. No editing needed - just choose, buy, and use.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg" className="gap-2">
                <Image className="h-5 w-5" />
                Browse Thumbnails
              </Button>
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Collection of professional thumbnails"
          />
        </div>
      </div>
    </div>
  );
}