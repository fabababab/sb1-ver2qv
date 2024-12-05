import { useState, useEffect } from 'react';
import { Theme } from '../types/component';

const defaultTheme: Theme = {
  colors: {
    primary: '#3B82F6',
    secondary: '#6B7280',
    accent: '#10B981',
    background: '#FFFFFF',
    text: '#1F2937',
    success: '#059669',
    warning: '#D97706',
    error: '#DC2626',
    info: '#2563EB',
    muted: '#9CA3AF',
    'primary-hover': '#2563EB',
    'secondary-hover': '#4B5563',
    'accent-hover': '#059669'
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px'
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    baseSize: 16,
    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2
    },
    fontWeight: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    }
  },
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
  },
  transitions: {
    duration: {
      fast: 150,
      normal: 300,
      slow: 500
    },
    timing: {
      linear: 'linear',
      ease: 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out'
    }
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  container: {
    padding: {
      sm: '1rem',
      md: '2rem',
      lg: '4rem'
    },
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  }
};

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const updateTheme = (newTheme: Partial<Theme>) => {
    setTheme((prev) => ({ ...prev, ...newTheme }));
  };

  useEffect(() => {
    console.log('Theme:', theme);
  }, [theme]);

  return {
    theme,
    updateTheme
  };
}
