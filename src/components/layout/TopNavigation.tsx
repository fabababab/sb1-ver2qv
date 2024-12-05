import React from 'react';
import { 
  Library, 
  Palette, 
  GitFork, 
  FileEdit, 
  Upload
} from 'lucide-react';

interface TopNavigationProps {
  onNavigate: (path: string) => void;
}

const stages = [
  {
    id: 'design',
    items: [
      { label: 'Component Library', icon: Library, path: '/components' },
      { label: 'Theme Manager', icon: Palette, path: '/theme' },
    ]
  },
  {
    id: 'structure',
    items: [
      { label: 'Builder', icon: GitFork, path: '/builder' },
      { label: 'CMS Editor', icon: FileEdit, path: '/cms' },
    ]
  },
  {
    id: 'publish',
    items: [
      { label: 'Deployment', icon: Upload, path: '/deploy' },
    ]
  }
];

export default function TopNavigation({ onNavigate }: TopNavigationProps) {
  return (
    <div className="h-16 bg-white border-b border-gray-200">
      <div className="h-full flex items-center px-4 gap-8">
        <h1 className="text-xl font-bold text-gray-800">WebStudio</h1>
        
        <nav className="flex h-full gap-8">
          {stages.map((stage) => (
            <div key={stage.id} className="flex items-center gap-4">
              {stage.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.path}
                    onClick={() => onNavigate(item.path)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              {/* Add separator unless it's the last stage */}
              {stage.id !== 'publish' && (
                <div className="h-6 w-px bg-gray-200" />
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}