import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface ThemeSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  preview?: React.ReactNode;
  defaultExpanded?: boolean;
}

export default function ThemeSection({ 
  title, 
  icon, 
  children, 
  preview,
  defaultExpanded = false 
}: ThemeSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  useEffect(() => {
    console.log('Expanded state:', isExpanded);
  }, [isExpanded]);

  return (
    <section className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 bg-gray-50 flex items-center justify-between hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-medium">{title}</h3>
        </div>
        {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      </button>
      
      {isExpanded && (
        <div className="border-t border-gray-200">
          {preview && (
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              {preview}
            </div>
          )}
          <div className="p-4">
            {children}
          </div>
        </div>
      )}
    </section>
  );
}
