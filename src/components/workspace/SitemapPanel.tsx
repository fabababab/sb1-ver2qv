import React from 'react';
import { FolderTree, File, Plus } from 'lucide-react';

export default function SitemapPanel() {
  return (
    <div className="h-full bg-white border-r border-gray-200 w-64">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Sitemap</h2>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FolderTree size={18} className="text-blue-600" />
            <span>Home</span>
          </div>
          <div className="ml-4 space-y-2">
            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <File size={18} className="text-gray-600" />
              <span>About</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <File size={18} className="text-gray-600" />
              <span>Contact</span>
            </div>
          </div>
        </div>
        <button className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700">
          <Plus size={18} />
          <span>Add Page</span>
        </button>
      </div>
    </div>
  );
}