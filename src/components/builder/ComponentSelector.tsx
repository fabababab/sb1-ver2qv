import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useSitemapStore } from '../../stores/sitemapStore';
import { useComponents } from '../../hooks/useComponents';

export default function ComponentSelector() {
  const { components } = useComponents();
  const { selectedNodeId, updateNode } = useSitemapStore();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredComponents = components.filter(component =>
    component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    component.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectComponent = (componentId: string) => {
    if (selectedNodeId) {
      updateNode(selectedNodeId, { componentId });
    }
  };

  useEffect(() => {
    console.log('Selected component:', selectedNodeId);
  }, [selectedNodeId]);

  return (
    <div className="flex-1 border-t border-gray-200 overflow-hidden flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Select Component</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search components..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {filteredComponents.map((component) => (
            <button
              key={component.id}
              onClick={() => handleSelectComponent(component.id)}
              className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <h4 className="font-medium">{component.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{component.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
