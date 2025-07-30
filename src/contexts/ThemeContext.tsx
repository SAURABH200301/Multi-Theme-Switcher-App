import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeConfig } from '../types/theme';
import { themes, defaultTheme } from '../config/themes';

interface ThemeContextType {
  currentTheme: ThemeConfig;
  currentThemeId: string;
  switchTheme: (themeId: string) => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentThemeId, setCurrentThemeId] = useState<string>(defaultTheme);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentThemeId(savedTheme);
    }
  }, []);

  useEffect(() => {
    const theme = themes[currentThemeId];
    if (theme) {
      const root = document.documentElement;
      
      root.style.setProperty('--color-primary', theme.colors.primary);
      root.style.setProperty('--color-secondary', theme.colors.secondary);
      root.style.setProperty('--color-background', theme.colors.background);
      root.style.setProperty('--color-surface', theme.colors.surface);
      root.style.setProperty('--color-text', theme.colors.text);
      root.style.setProperty('--color-text-secondary', theme.colors.textSecondary);
      root.style.setProperty('--color-accent', theme.colors.accent);
      root.style.setProperty('--color-border', theme.colors.border);
      
      root.style.setProperty('--font-primary', theme.fonts.primary);
      root.style.setProperty('--font-secondary', theme.fonts.secondary);
      root.style.setProperty('--font-weight-normal', theme.fonts.weight.normal);
      root.style.setProperty('--font-weight-medium', theme.fonts.weight.medium);
      root.style.setProperty('--font-weight-bold', theme.fonts.weight.bold);
      
      root.style.setProperty('--spacing-xs', theme.spacing.xs);
      root.style.setProperty('--spacing-sm', theme.spacing.sm);
      root.style.setProperty('--spacing-md', theme.spacing.md);
      root.style.setProperty('--spacing-lg', theme.spacing.lg);
      root.style.setProperty('--spacing-xl', theme.spacing.xl);
      
      root.style.setProperty('--border-radius', theme.borderRadius);
      root.style.setProperty('--shadow-sm', theme.shadows.sm);
      root.style.setProperty('--shadow-md', theme.shadows.md);
      root.style.setProperty('--shadow-lg', theme.shadows.lg);
      
      document.body.style.backgroundColor = theme.colors.background;
      document.body.style.color = theme.colors.text;
      document.body.style.fontFamily = theme.fonts.primary;
    }
  }, [currentThemeId]);

  const switchTheme = (themeId: string) => {
    if (themes[themeId] && themeId !== currentThemeId) {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentThemeId(themeId);
        localStorage.setItem('app-theme', themeId);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 150);
    }
  };

  const currentTheme = themes[currentThemeId];

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        currentThemeId,
        switchTheme,
        isTransitioning,
      }}
    >
      <div
        className={`theme-transition ${isTransitioning ? 'transitioning' : ''}`}
        data-theme={currentThemeId}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};