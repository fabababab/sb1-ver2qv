import React from 'react';
import { Play, Pause, RefreshCw } from 'lucide-react';

export default function PreviewPanel() {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="h-12 border-b border-gray-200 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Play size={18} className="text-green-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <RefreshCw size={18} className="text-gray-600" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <select className="border border-gray-200 rounded-lg px-2 py-1">
            <option>Desktop</option>
            <option>Tablet</option>
            <option>Mobile</option>
          </select>
        </div>
      </div>
      <div className="flex-1 bg-gray-50 p-4">
        <div className="w-full h-full bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center text-gray-400">
          Preview Area
        </div>
      </div>
    </div>
  );
}