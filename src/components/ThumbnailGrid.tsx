import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Download, Star } from 'lucide-react';
import { Button } from './ui/Button';
import { thumbnails } from '@/data/thumbnails';

export function ThumbnailGrid() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Thumbnails
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Ready-to-use professional thumbnails for your content
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {thumbnails.map((thumbnail) => (
            <Link
              key={thumbnail.id}
              to={`/thumbnail/${thumbnail.id}`}
              className="group relative"
            >
              <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={thumbnail.imageUrl}
                  alt={thumbnail.title}
                  className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Button variant="primary" className="w-full gap-2">
                      <Download className="h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold leading-6 text-gray-900">
                  {thumbnail.title}
                </h3>
                <div className="mt-1 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{thumbnail.rating}</span>
                  </div>
                  <span className="text-sm font-medium text-blue-600">₹{thumbnail.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}