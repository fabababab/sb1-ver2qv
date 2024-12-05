import React, { useEffect } from 'react';
import { Palette, Type, Grid, Box, Layers, Timer, Monitor, Layout } from 'lucide-react';
import { Theme } from '../../types/component';
import ColorPicker from './ColorPicker';
import SpacingControl from './SpacingControl';
import ThemeSection from './ThemeSection';

interface ThemeControlsProps {
  theme: Theme;
  onUpdate: (updates: Partial<Theme>) => void;
}

export default function ThemeControls({ theme, onUpdate }: ThemeControlsProps) {
  const handleColorChange = (key: keyof Theme['colors'], value: string) => {
    onUpdate({ colors: { ...theme.colors, [key]: value } });
  };

  const handleSpacingChange = (key: keyof Theme['spacing'], value: number) => {
    onUpdate({ spacing: { ...theme.spacing, [key]: value } });
  };

  const handleTypographyChange = (
    category: keyof Theme['typography'],
    key: string,
    value: string | number
  ) => {
    onUpdate({
      typography: {
        ...theme.typography,
        [category]: {
          ...theme.typography[category],
          [key]: value
        }
      }
    });
  };

  useEffect(() => {
    console.log('Theme:', theme);
  }, [theme]);

  const ColorPreview = (
    <div className="space-y-4">
      <div className="grid grid-cols-5 gap-4">
        {Object.entries(theme.colors).slice(0, 5).map(([key, value]) => (
          <div key={key} className="text-center">
            <div 
              className="w-12 h-12 rounded-lg mx-auto mb-1"
              style={{ backgroundColor: value }}
            />
            <span className="text-xs text-gray-600 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 rounded-lg text-white"
          style={{ backgroundColor: theme.colors.primary }}
        >
          Primary
        </button>
        <button
          className="px-4 py-2 rounded-lg text-white"
          style={{ backgroundColor: theme.colors.secondary }}
        >
          Secondary
        </button>
      </div>
    </div>
  );

  const TypographyPreview = (
    <div 
      className="space-y-2"
      style={{ fontFamily: theme.typography.fontFamily }}
    >
      <h1 style={{ 
        fontSize: `${theme.typography.baseSize * 2}px`,
        lineHeight: theme.typography.lineHeight.normal
      }}>
        Heading Example
      </h1>
      <p style={{ 
        fontSize: `${theme.typography.baseSize}px`,
        lineHeight: theme.typography.lineHeight.normal
      }}>
        Body text example with the selected font family and size.
      </p>
      <p style={{ 
        fontSize: `${theme.typography.baseSize * 0.875}px`,
        lineHeight: theme.typography.lineHeight.normal
      }}>
        Small text variation
      </p>
    </div>
  );

  const SpacingPreview = (
    <div className="space-y-2">
      {Object.entries(theme.spacing).map(([key, value]) => (
        <div
          key={key}
          className="bg-blue-100 rounded"
          style={{ width: value, height: '8px' }}
        />
      ))}
    </div>
  );

  const BorderRadiusPreview = (
    <div className="grid grid-cols-3 gap-4">
      {Object.entries(theme.borderRadius).map(([key, value]) => (
        <div
          key={key}
          className="aspect-square bg-blue-100 border border-blue-200"
          style={{ borderRadius: value }}
        />
      ))}
    </div>
  );

  const ShadowsPreview = (
    <div className="grid grid-cols-3 gap-4">
      {Object.entries(theme.shadows).map(([key, value]) => (
        <div
          key={key}
          className="aspect-square bg-white"
          style={{ boxShadow: value }}
        />
      ))}
    </div>
  );

  return (
    <div className="h-full overflow-y-auto p-4 space-y-4">
      <ThemeSection
        title="Colors"
        icon={<Palette size={18} className="text-blue-600" />}
        preview={ColorPreview}
        defaultExpanded={true}
      >
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(theme.colors).map(([key, value]) => (
            <ColorPicker
              key={key}
              label={key as keyof Theme['colors']}
              value={value}
              onChange={(newValue) => handleColorChange(key as keyof Theme['colors'], newValue)}
            />
          ))}
        </div>
      </ThemeSection>

      <ThemeSection
        title="Typography"
        icon={<Type size={18} className="text-blue-600" />}
        preview={TypographyPreview}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Font Family
            </label>
            <select
              className="w-full p-2 border border-gray-200 rounded-lg"
              value={theme.typography.fontFamily}
              onChange={(e) => handleTypographyChange('fontFamily', '', e.target.value)}
            >
              <option value="Inter, system-ui, sans-serif">Inter</option>
              <option value="Roboto, system-ui, sans-serif">Roboto</option>
              <option value="'Open Sans', system-ui, sans-serif">Open Sans</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Base Size
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-200 rounded-lg"
              value={theme.typography.baseSize}
              onChange={(e) => handleTypographyChange('baseSize', '', Number(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-700">Line Height</h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(theme.typography.lineHeight).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-xs text-gray-600">{key}</label>
                  <input
                    type="number"
                    step="0.1"
                    className="w-full p-2 border border-gray-200 rounded-lg"
                    value={value}
                    onChange={(e) => handleTypographyChange('lineHeight', key, Number(e.target.value))}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ThemeSection>

      <ThemeSection
        title="Spacing"
        icon={<Grid size={18} className="text-blue-600" />}
        preview={SpacingPreview}
      >
        <div className="space-y-4">
          {Object.entries(theme.spacing).map(([key, value]) => (
            <SpacingControl
              key={key}
              label={key}
              value={value}
              onChange={(newValue) => handleSpacingChange(key as keyof Theme['spacing'], newValue)}
            />
          ))}
        </div>
      </ThemeSection>

      <ThemeSection
        title="Border Radius"
        icon={<Box size={18} className="text-blue-600" />}
        preview={BorderRadiusPreview}
      >
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(theme.borderRadius).map(([key, value]) => (
            <div key={key} className="space-y-1">
              <label className="block text-sm text-gray-600">{key}</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-200 rounded-lg"
                value={value}
                onChange={(e) => onUpdate({
                  borderRadius: { ...theme.borderRadius, [key]: e.target.value }
                })}
              />
            </div>
          ))}
        </div>
      </ThemeSection>

      <ThemeSection
        title="Shadows"
        icon={<Layers size={18} className="text-blue-600" />}
        preview={ShadowsPreview}
      >
        <div className="space-y-4">
          {Object.entries(theme.shadows).map(([key, value]) => (
            <div key={key} className="space-y-1">
              <label className="block text-sm text-gray-600">{key}</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-200 rounded-lg"
                value={value}
                onChange={(e) => onUpdate({
                  shadows: { ...theme.shadows, [key]: e.target.value }
                })}
              />
            </div>
          ))}
        </div>
      </ThemeSection>

      <ThemeSection
        title="Transitions"
        icon={<Timer size={18} className="text-blue-600" />}
      >
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Duration (ms)</h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(theme.transitions.duration).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <label className="block text-xs text-gray-600">{key}</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-200 rounded-lg"
                    value={value}
                    onChange={(e) => onUpdate({
                      transitions: {
                        ...theme.transitions,
                        duration: { ...theme.transitions.duration, [key]: Number(e.target.value) }
                      }
                    })}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Timing Functions</h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(theme.transitions.timing).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <label className="block text-xs text-gray-600">{key}</label>
                  <select
                    className="w-full p-2 border border-gray-200 rounded-lg"
                    value={value}
                    onChange={(e) => onUpdate({
                      transitions: {
                        ...theme.transitions,
                        timing: { ...theme.transitions.timing, [key]: e.target.value }
                      }
                    })}
                  >
                    <option value="linear">linear</option>
                    <option value="ease">ease</option>
                    <option value="ease-in">ease-in</option>
                    <option value="ease-out">ease-out</option>
                    <option value="ease-in-out">ease-in-out</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ThemeSection>

      <ThemeSection
        title="Breakpoints"
        icon={<Monitor size={18} className="text-blue-600" />}
      >
        <div className="space-y-4">
          {Object.entries(theme.breakpoints).map(([key, value]) => (
            <div key={key} className="space-y-1">
              <label className="block text-sm text-gray-600">{key}</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-200 rounded-lg"
                value={value}
                onChange={(e) => onUpdate({
                  breakpoints: { ...theme.breakpoints, [key]: e.target.value }
                })}
              />
            </div>
          ))}
        </div>
      </ThemeSection>

      <ThemeSection
        title="Container"
        icon={<Layout size={18} className="text-blue-600" />}
      >
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Padding</h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(theme.container.padding).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <label className="block text-xs text-gray-600">{key}</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-200 rounded-lg"
                    value={value}
                    onChange={(e) => onUpdate({
                      container: {
                        ...theme.container,
                        padding: { ...theme.container.padding, [key]: e.target.value }
                      }
                    })}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Max Width</h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(theme.container.maxWidth).map(([key, value]) => (
                <div key={key} className="space-y-1">
                  <label className="block text-xs text-gray-600">{key}</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-200 rounded-lg"
                    value={value}
                    onChange={(e) => onUpdate({
                      container: {
                        ...theme.container,
                        maxWidth: { ...theme.container.maxWidth, [key]: e.target.value }
                      }
                    })}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ThemeSection>
    </div>
  );
}
