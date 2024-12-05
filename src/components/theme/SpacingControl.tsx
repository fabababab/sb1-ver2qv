import React, { useEffect } from 'react';
import { Theme } from '../../types/component';

interface SpacingControlProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export default function SpacingControl({ label, value, onChange }: SpacingControlProps) {
  useEffect(() => {
    console.log('Spacing value:', value);
  }, [value]);

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <label className="text-sm text-gray-600 uppercase">{label}</label>
        <span className="text-xs text-gray-500">{value}px</span>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="range"
          min="0"
          max="128"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1"
        />
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-16 p-1 text-sm border border-gray-200 rounded"
        />
      </div>
      <div 
        className="mt-1 bg-blue-100 rounded"
        style={{ width: value, height: '4px' }}
      />
    </div>
  );
}
