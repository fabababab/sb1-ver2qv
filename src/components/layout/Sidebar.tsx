import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Library, 
  Palette, 
  GitFork, 
  FileEdit, 
  Upload,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: 'LayoutDashboard', path: '/' },
  { label: 'Component Library', icon: 'Library', path: '/components' },
  { label: 'Theme Manager', icon: 'Palette', path: '/theme' },
  { label: 'Sitemap Builder', icon: 'GitFork', path: '/sitemap' },
  { label: 'CMS Editor', icon: 'FileEdit', path: '/cms' },
  { label: 'Deployment', icon: 'Upload', path: '/deploy' },
];

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  Library,
  Palette,
  GitFork,
  FileEdit,
  Upload,
};

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`bg-white border-r border-gray-200 h-screen transition-all duration-300 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && <h1 className="text-xl font-bold text-gray-800">WebStudio</h1>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      <nav className="p-2">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <a
              key={item.path}
              href={item.path}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              <Icon size={20} />
              {!collapsed && <span>{item.label}</span>}
            </a>
          );
        })}
      </nav>
    </div>
  );
}