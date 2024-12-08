import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Download, Tag, Monitor, FileType, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { thumbnails } from '@/data/thumbnails';

export function ThumbnailDetail() {
  const { id } = useParams();
  const thumbnail = thumbnails.find(t => t.id === id);

  if (!thumbnail) {
    return <div>Thumbnail not found</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          {/* Thumbnail Preview */}
          <div className="lg:row-span-2">
            <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <img
                src={thumbnail.imageUrl}
                alt={thumbnail.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Thumbnail Info */}
          <div className="lg:max-w-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {thumbnail.title}
              </h1>
              <p className="text-2xl font-bold text-blue-600">₹{thumbnail.price}</p>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-lg font-medium">{thumbnail.rating}</span>
              <span className="text-gray-500">({thumbnail.downloads} downloads)</span>
            </div>

            <p className="mt-6 text-lg text-gray-600">{thumbnail.description}</p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-2">
                <Monitor className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">
                  {thumbnail.dimensions.width} x {thumbnail.dimensions.height}px
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FileType className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">{thumbnail.fileFormat} format</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">
                  Created on {new Date(thumbnail.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {thumbnail.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                >
                  <Tag className="h-4 w-4" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <Button size="lg" className="w-full gap-2">
                <Download className="h-5 w-5" />
                Download Now
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Subscribe to our plans for unlimited downloads
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}