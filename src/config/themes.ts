import { ThemeConfig } from '../types/theme';

export const themes: Record<string, ThemeConfig> = {
  theme1: {
    id: 'theme1',
    name: 'Minimalist Light',
    layout: 'minimalist',
    colors: {
      primary: '#2563eb',
      secondary: '#64748b',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textSecondary: '#64748b',
      accent: '#3b82f6',
      border: '#e2e8f0',
    },
    fonts: {
      primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      secondary: '"Inter", sans-serif',
      weight: {
        normal: '400',
        medium: '500',
        bold: '600',
      },
    },
    spacing: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
    },
    borderRadius: '0.5rem',
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    },
  },
  theme2: {
    id: 'theme2',
    name: 'Dark Sidebar',
    layout: 'sidebar',
    colors: {
      primary: '#f59e0b',
      secondary: '#6b7280',
      background: '#111827',
      surface: '#1f2937',
      text: '#f9fafb',
      textSecondary: '#d1d5db',
      accent: '#fbbf24',
      border: '#374151',
    },
    fonts: {
      primary: '"Playfair Display", Georgia, "Times New Roman", serif',
      secondary: '"Source Serif Pro", serif',
      weight: {
        normal: '400',
        medium: '600',
        bold: '700',
      },
    },
    spacing: {
      xs: '0.75rem',
      sm: '1.25rem',
      md: '2rem',
      lg: '2.5rem',
      xl: '4rem',
    },
    borderRadius: '0.25rem',
    shadows: {
      sm: '0 1px 3px 0 rgb(0 0 0 / 0.3)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
    },
  },
  theme3: {
    id: 'theme3',
    name: 'Colorful Cards',
    layout: 'cards',
    colors: {
      primary: '#ec4899',
      secondary: '#8b5cf6',
      background: '#fef3c7',
      surface: '#ffffff',
      text: '#1f2937',
      textSecondary: '#6b7280',
      accent: '#10b981',
      border: '#fbbf24',
    },
    fonts: {
      primary: '"Pacifico", cursive',
      secondary: '"Nunito", sans-serif',
      weight: {
        normal: '400',
        medium: '600',
        bold: '800',
      },
    },
    spacing: {
      xs: '1rem',
      sm: '1.5rem',
      md: '2.5rem',
      lg: '3rem',
      xl: '4rem',
    },
    borderRadius: '1rem',
    shadows: {
      sm: '0 2px 4px 0 rgb(0 0 0 / 0.1)',
      md: '0 8px 16px -4px rgb(0 0 0 / 0.15), 0 4px 8px -2px rgb(0 0 0 / 0.1)',
      lg: '0 20px 25px -5px rgb(0 0 0 / 0.2), 0 8px 10px -6px rgb(0 0 0 / 0.15)',
    },
  },
};

export const defaultTheme = 'theme1';