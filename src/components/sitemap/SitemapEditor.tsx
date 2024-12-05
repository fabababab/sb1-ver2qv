import React from 'react';
import { useSitemapStore } from '../../stores/sitemapStore';
import { useComponents } from '../../hooks/useComponents';

export default function SitemapEditor() {
  const { nodes, selectedNodeId, updateNode } = useSitemapStore();
  const { components } = useComponents();

  const selectedNode = nodes.find(node => node.id === selectedNodeId);
  if (!selectedNode) return null;

  return (
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-semibold">Edit Page</h3>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          value={selectedNode.title}
          onChange={(e) => updateNode(selectedNode.id, { title: e.target.value })}
          className="w-full p-2 border border-gray-200 rounded-lg"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Path
        </label>
        <input
          type="text"
          value={selectedNode.path}
          onChange={(e) => updateNode(selectedNode.id, { path: e.target.value })}
          className="w-full p-2 border border-gray-200 rounded-lg"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Component
        </label>
        <select
          value={selectedNode.componentId || ''}
          onChange={(e) => updateNode(selectedNode.id, { componentId: e.target.value })}
          className="w-full p-2 border border-gray-200 rounded-lg"
        >
          <option value="">Select a component</option>
          {components.map((component) => (
            <option key={component.id} value={component.id}>
              {component.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}