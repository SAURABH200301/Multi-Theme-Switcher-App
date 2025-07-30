import React, { ReactNode } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface MinimalistLayoutProps {
  children: ReactNode;
}

const MinimalistLayout: React.FC<MinimalistLayoutProps> = ({ children }) => {
  const { currentTheme } = useTheme();

  return (
    <div 
      className="min-h-screen pt-20 transition-all duration-300"
      style={{
        backgroundColor: currentTheme.colors.background,
        fontFamily: currentTheme.fonts.primary,
      }}
    >
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div 
          className="space-y-8"
          style={{
            color: currentTheme.colors.text,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MinimalistLayout;