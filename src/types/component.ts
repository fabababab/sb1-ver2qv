export interface ComponentMeta {
  id: string;
  name: string;
  description: string;
  category: 'layout' | 'forms' | 'data' | 'navigation' | 'feedback';
  code: string;
  props: {
    name: string;
    type: string;
    description: string;
    required: boolean;
    defaultValue?: string;
  }[];
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    muted: string;
    'primary-hover': string;
    'secondary-hover': string;
    'accent-hover': string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
    '3xl': number;
  };
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  typography: {
    fontFamily: string;
    baseSize: number;
    lineHeight: {
      none: number;
      tight: number;
      normal: number;
      relaxed: number;
      loose: number;
    };
    fontWeight: {
      thin: number;
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
    };
    letterSpacing: {
      tighter: string;
      tight: string;
      normal: string;
      wide: string;
      wider: string;
      widest: string;
    };
  };
  shadows: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    inner: string;
  };
  transitions: {
    duration: {
      fast: number;
      normal: number;
      slow: number;
    };
    timing: {
      linear: string;
      ease: string;
      'ease-in': string;
      'ease-out': string;
      'ease-in-out': string;
    };
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  container: {
    padding: {
      sm: string;
      md: string;
      lg: string;
    };
    maxWidth: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
}