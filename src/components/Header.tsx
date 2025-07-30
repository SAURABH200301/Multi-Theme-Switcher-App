import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../config/themes';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { currentThemeId, switchTheme, currentTheme, isTransitioning } = useTheme();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switchTheme(e.target.value);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: currentTheme.colors.surface,
        borderBottom: `1px solid ${currentTheme.colors.border}`,
        boxShadow: currentTheme.shadows.sm,
      }}
    >
      <div className="px-6 py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link className="flex items-center space-x-3" to="/">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300"
              style={{
                backgroundColor: currentTheme.colors.primary,
                color: currentTheme.colors.surface,
              }}
            >
              MS
            </div>
            <h1 
              className="max-sm:text-sm text-xl font-bold transition-all duration-300"
              style={{
                color: currentTheme.colors.text,
                fontFamily: currentTheme.fonts.primary,
                fontWeight: currentTheme.fonts.weight.bold,
              }}
            >
              Multi-Theme Switcher
            </h1>
          </Link>

          <div className="flex items-center space-x-3">
            <label 
              htmlFor="theme-selector"
              className="text-sm font-medium transition-all duration-300"
              style={{
                color: currentTheme.colors.textSecondary,
                fontFamily: currentTheme.fonts.secondary,
              }}
            >
              Theme:
            </label>
            <select
              id="theme-selector"
              value={currentThemeId}
              onChange={handleThemeChange}
              disabled={isTransitioning}
              className={`
                px-3 py-2 rounded cursor-pointer transition-all duration-300
                border focus:outline-none focus:ring-2 focus:ring-opacity-50
                ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}
              `}
              style={{
                backgroundColor: currentTheme.colors.background,
                color: currentTheme.colors.text,
                borderColor: currentTheme.colors.border,
                borderRadius: currentTheme.borderRadius,
                fontFamily: currentTheme.fonts.secondary,
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = `0 0 0 2px ${currentTheme.colors.primary}40`;
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = 'none';
              }}
            >
              {Object.entries(themes).map(([key, theme]) => (
                <option key={key} value={key}>
                  {theme.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {isTransitioning && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
          <div 
            className="h-full animate-pulse"
            style={{ backgroundColor: currentTheme.colors.primary }}
          />
        </div>
      )}
    </header>
  );
};

export default Header;