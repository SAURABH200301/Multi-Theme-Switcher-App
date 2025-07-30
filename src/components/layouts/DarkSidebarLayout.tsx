import React, { ReactNode } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

interface DarkSidebarLayoutProps {
  children: ReactNode;
}

const DarkSidebarLayout: React.FC<DarkSidebarLayoutProps> = ({ children }) => {
  const { currentTheme } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div 
      className="min-h-screen flex pt-20 transition-all duration-300"
      style={{
        backgroundColor: currentTheme.colors.background,
        fontFamily: currentTheme.fonts.primary,
      }}
    >
      <aside 
        className="max-sm:w-32 w-64 fixed left-0 top-20 h-[calc(100vh-5rem)] overflow-y-auto transition-all duration-300"
        style={{
          backgroundColor: currentTheme.colors.surface,
          borderRight: `1px solid ${currentTheme.colors.border}`,
        }}
      >
        <div className="p-6">
          <nav className="space-y-3">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    block px-4 py-3 rounded-lg text-left transition-all duration-200
                    ${isActive ? 'font-bold' : 'hover:translate-x-1'}
                  `}
                  style={{
                    backgroundColor: isActive ? currentTheme.colors.primary : 'transparent',
                    color: isActive ? currentTheme.colors.surface : currentTheme.colors.text,
                    fontFamily: currentTheme.fonts.secondary,
                    fontWeight: isActive ? currentTheme.fonts.weight.bold : currentTheme.fonts.weight.normal,
                    borderRadius: currentTheme.borderRadius,
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: currentTheme.colors.background }}>
            <h3 
              className="text-sm font-bold mb-2"
              style={{ 
                color: currentTheme.colors.primary,
                fontFamily: currentTheme.fonts.secondary,
                fontWeight: currentTheme.fonts.weight.bold,
              }}
            >
              Dark Sidebar Theme
            </h3>
            <p 
              className="text-xs leading-relaxed"
              style={{ 
                color: currentTheme.colors.textSecondary,
                fontFamily: currentTheme.fonts.secondary,
              }}
            >
              Elegant dark mode with sophisticated serif typography and sidebar navigation.
            </p>
          </div>
        </div>
      </aside>

      <main className="max-sm:ml-32 flex-1 ml-64 p-8">
        <div 
          className="space-y-8"
          style={{
            color: currentTheme.colors.text,
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default DarkSidebarLayout;