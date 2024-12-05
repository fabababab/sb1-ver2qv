import React from 'react';
import { Code, Copy } from 'lucide-react';
import { ComponentMeta } from '../../types/component';
import { useTheme } from '../../hooks/useTheme';

interface ComponentCardProps {
  component: ComponentMeta;
}

export default function ComponentCard({ component }: ComponentCardProps) {
  const { theme } = useTheme();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">{component.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{component.description}</p>
      </div>
      
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <div className="bg-white rounded-lg p-4 min-h-[100px] flex items-center justify-center">
          {/* Component Preview */}
          <div dangerouslySetInnerHTML={{ __html: component.code }} />
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Props</span>
          <button className="p-2 hover:bg-gray-100 rounded-lg" title="Copy code">
            <Copy size={16} className="text-gray-600" />
          </button>
        </div>
        <div className="space-y-2">
          {component.props.map((prop) => (
            <div key={prop.name} className="text-sm">
              <span className="font-mono text-blue-600">{prop.name}</span>
              <span className="text-gray-600">: {prop.type}</span>
              {prop.required && <span className="text-red-500 ml-1">*</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}