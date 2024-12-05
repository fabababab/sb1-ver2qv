import React, { useRef, useEffect } from 'react';
import { Edit2 } from 'lucide-react';
import { Theme } from '../../types/component';

interface ColorPickerProps {
  label: keyof Theme['colors'];
  value: string;
  onChange: (color: string) => void;
}

export default function ColorPicker({ label, value, onChange }: ColorPickerProps) {
  const colorInputRef = useRef<HTMLInputElement>(null);

  const handleEditClick = () => {
    colorInputRef.current?.click();
  };

  useEffect(() => {
    console.log('Color value:', value);
  }, [value]);

  return (
    <div className="flex-1">
      <label className="text-sm text-gray-600 capitalize block mb-1">
        {label.replace(/([A-Z])/g, ' $1').trim()}
      </label>
      <div className="relative flex gap-2">
        <div 
          className="flex-1 h-10 rounded-lg border border-gray-200 overflow-hidden"
          style={{ backgroundColor: value }}
        />
        <button
          onClick={handleEditClick}
          className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          title="Edit color"
        >
          <Edit2 size={16} className="text-gray-600" />
        </button>
        <input
          ref={colorInputRef}
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="sr-only"
        />
      </div>
    </div>
  );
}
