import React, { useEffect } from 'react';
import { useSitemapStore } from '../../stores/sitemapStore';

export default function BuilderEditor() {
  const { nodes, selectedNodeId, updateNode } = useSitemapStore();

  const selectedNode = nodes.find(node => node.id === selectedNodeId);
  if (!selectedNode) return null;

  useEffect(() => {
    console.log('Selected node:', selectedNode);
  }, [selectedNode]);

  return (
    <div className="p-4 border-b border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Edit Page</h3>
      
      <div className="space-y-4">
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
      </div>
    </div>
  );
}
