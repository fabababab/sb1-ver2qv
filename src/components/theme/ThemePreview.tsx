import React from 'react';
import { Theme } from '../../types/component';

interface ThemePreviewProps {
  theme: Theme;
}

export default function ThemePreview({ theme }: ThemePreviewProps) {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold">Theme Preview</h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Colors</h4>
          <div className="grid grid-cols-5 gap-2">
            {Object.entries(theme.colors).map(([key, value]) => (
              <div key={key} className="text-center">
                <div 
                  className="w-12 h-12 rounded-lg mx-auto mb-1"
                  style={{ backgroundColor: value }}
                />
                <span className="text-xs text-gray-600 capitalize">{key}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Typography</h4>
          <div 
            className="space-y-2"
            style={{ fontFamily: theme.typography.fontFamily }}
          >
            <p className="text-2xl">Heading Text</p>
            <p className="text-base">Body text example with the selected font family.</p>
            <p className="text-sm">Small text variation</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Components</h4>
          <div className="space-y-4">
            <button
              className="px-4 py-2 rounded-lg"
              style={{
                backgroundColor: theme.colors.primary,
                color: 'white',
                borderRadius: theme.borderRadius.md,
              }}
            >
              Primary Button
            </button>
            
            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: theme.colors.background,
                border: `1px solid ${theme.colors.secondary}`,
                borderRadius: theme.borderRadius.lg,
              }}
            >
              <h5 style={{ color: theme.colors.text }}>Card Example</h5>
              <p style={{ color: theme.colors.secondary }}>Sample content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}