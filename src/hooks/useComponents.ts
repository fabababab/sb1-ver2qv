import { useState } from 'react';
import { ComponentMeta } from '../types/component';

const sampleComponents: ComponentMeta[] = [
  {
    id: 'button-primary',
    name: 'Button Primary',
    description: 'A primary button component with customizable styles',
    category: 'forms',
    code: `<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">Primary Button</button>`,
    props: [
      {
        name: 'children',
        type: 'ReactNode',
        description: 'Button content',
        required: true
      },
      {
        name: 'variant',
        type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",
        description: 'Button style variant',
        required: false,
        defaultValue: 'default'
      },
      {
        name: 'size',
        type: "'default' | 'sm' | 'lg' | 'icon'",
        description: 'Button size',
        required: false,
        defaultValue: 'default'
      }
    ]
  },
  {
    id: 'button-secondary',
    name: 'Button Secondary',
    description: 'A secondary button component with muted styling',
    category: 'forms',
    code: `<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2">Secondary Button</button>`,
    props: [
      {
        name: 'children',
        type: 'ReactNode',
        description: 'Button content',
        required: true
      },
      {
        name: 'variant',
        type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",
        description: 'Button style variant',
        required: false,
        defaultValue: 'secondary'
      },
      {
        name: 'size',
        type: "'default' | 'sm' | 'lg' | 'icon'",
        description: 'Button size',
        required: false,
        defaultValue: 'default'
      }
    ]
  }
];

export function useComponents() {
  const [components] = useState<ComponentMeta[]>(sampleComponents);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  return {
    components,
    loading,
    error
  };
}