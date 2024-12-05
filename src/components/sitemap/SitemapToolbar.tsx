import React, { useState, useEffect } from 'react';
import { Plus, Download, Upload } from 'lucide-react';
import { useSitemapStore } from '../../stores/sitemapStore';

export default function SitemapToolbar() {
  const { nodes, setNodes, addNode } = useSitemapStore();
  const [showAddDialog, setShowAddDialog] = useState(false);

  useEffect(() => {
    console.log('Nodes:', nodes);
  }, [nodes]);

  const handleExport = () => {
    const dataStr = JSON.stringify(nodes, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedNodes = JSON.parse(e.target?.result as string);
          setNodes(importedNodes);
        } catch (error) {
          console.error('Error importing sitemap:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Sitemap</h2>
        <div className="flex items-center gap-2">
          <label className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg">
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
            <Upload size={18} className="text-gray-600" />
          </label>
          <button
            onClick={handleExport}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <Download size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
      <button
        onClick={() => addNode(null, { title: 'New Page', path: '/new-page' })}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Plus size={18} />
        Add Page
      </button>
    </div>
  );
}
