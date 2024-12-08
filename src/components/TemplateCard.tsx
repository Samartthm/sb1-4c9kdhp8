import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Template } from '@/types';
import { Button } from './ui/Button';

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={template.imageUrl}
          alt={template.title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">{template.title}</h3>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
            {template.category}
          </span>
          <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700">
            {template.style}
          </span>
        </div>
        <div className="flex-1" />
        <Button
          variant="primary"
          className="w-full gap-2"
          onClick={() => window.open(template.canvaUrl, '_blank')}
        >
          Edit in Canva
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}