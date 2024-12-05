import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import ComponentCard from './ComponentCard';
import { ComponentMeta } from '../../types/component';
import { useComponents } from '../../hooks/useComponents';

export default function ComponentGallery() {
  const { components } = useComponents();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    console.log('Filtered components:', filteredComponents);
  }, [filteredComponents]);

  return (
    <div className="h-full overflow-hidden flex flex-col bg-gray-50">
      <div className="p-4 bg-white border-b border-gray-200">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search components..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="layout">Layout</option>
            <option value="forms">Forms</option>
            <option value="data">Data Display</option>
            <option value="navigation">Navigation</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredComponents.map((component) => (
            <ComponentCard key={component.id} component={component} />
          ))}
        </div>
      </div>
    </div>
  );
}
