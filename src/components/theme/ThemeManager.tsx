import React from 'react';
import { Download, Upload } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import ThemeControls from './ThemeControls';

export default function ThemeManager() {
  const { theme, updateTheme } = useTheme();

  const handleExportTheme = () => {
    const themeString = JSON.stringify(theme, null, 2);
    const blob = new Blob([themeString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'theme.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedTheme = JSON.parse(e.target?.result as string);
          updateTheme(importedTheme);
        } catch (error) {
          console.error('Error importing theme:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="h-full overflow-hidden bg-gray-50">
      <div className="h-full flex flex-col">
        <div className="p-4 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold">Theme Manager</h1>
            <div className="flex items-center gap-2">
              <label className="cursor-pointer px-3 py-1.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportTheme}
                  className="hidden"
                />
                <Upload size={16} className="inline-block mr-2" />
                Import
              </label>
              <button
                onClick={handleExportTheme}
                className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <Download size={16} className="inline-block mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <ThemeControls theme={theme} onUpdate={updateTheme} />
        </div>
      </div>
    </div>
  );
}