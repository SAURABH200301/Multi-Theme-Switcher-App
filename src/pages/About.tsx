import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { currentTheme } = useTheme();

  const features = [
    {
      title: 'Dynamic Theming',
      description: 'Switch between three completely different themes with unique layouts, fonts, and color schemes.',
      icon: '🎨',
    },
    {
      title: 'Responsive Design',
      description: 'All themes are fully responsive and work seamlessly across desktop, tablet, and mobile devices.',
      icon: '📱',
    },
    {
      title: 'TypeScript Support',
      description: 'Built with TypeScript for better development experience and type safety.',
      icon: '⚡',
    },
    {
      title: 'API Integration',
      description: 'Integrates with external APIs to display real-time data in different themed layouts.',
      icon: '🔗',
    },
    {
      title: 'Local Storage',
      description: 'Your theme preference is saved and persists across browser sessions.',
      icon: '💾',
    },
    {
      title: 'Smooth Animations',
      description: 'Beautiful transition animations when switching between themes.',
      icon: '✨',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 
          className="text-4xl md:text-5xl font-bold mb-4 transition-all duration-300"
          style={{
            color: currentTheme.colors.text,
            fontFamily: currentTheme.fonts.primary,
            fontWeight: currentTheme.fonts.weight.bold,
          }}
        >
          About Our App
        </h1>
        <p 
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          style={{
            color: currentTheme.colors.textSecondary,
            fontFamily: currentTheme.fonts.secondary,
          }}
        >
          The Multi-Theme Switcher App is a showcase of modern React development with TypeScript, 
          demonstrating how themes can transform not just appearance, but the entire user experience.
        </p>
      </div>

      <div 
        className="p-8 rounded-lg text-center"
        style={{
          backgroundColor: currentTheme.colors.surface,
          border: `2px solid ${currentTheme.colors.primary}`,
          borderRadius: currentTheme.borderRadius,
          boxShadow: currentTheme.shadows.lg,
        }}
      >
        <h2 
          className="text-2xl font-bold mb-4"
          style={{
            color: currentTheme.colors.primary,
            fontFamily: currentTheme.fonts.primary,
            fontWeight: currentTheme.fonts.weight.bold,
          }}
        >
          You're viewing: {currentTheme.name}
        </h2>
        <p 
          className="text-lg"
          style={{
            color: currentTheme.colors.text,
            fontFamily: currentTheme.fonts.secondary,
          }}
        >
          {currentTheme.layout === 'minimalist' && 
            "A clean, minimalist design focusing on simplicity and readability with sans-serif typography."
          }
          {currentTheme.layout === 'sidebar' && 
            "An elegant dark theme with sidebar navigation and sophisticated serif fonts for a premium feel."
          }
          {currentTheme.layout === 'cards' && 
            "A vibrant, playful theme with card-based layouts and fun typography that sparks creativity."
          }
        </p>
      </div>

      <div>
        <h2 
          className="text-3xl font-bold mb-8 text-center"
          style={{
            color: currentTheme.colors.text,
            fontFamily: currentTheme.fonts.primary,
            fontWeight: currentTheme.fonts.weight.bold,
          }}
        >
          Key Features
        </h2>
        
        <div className={`grid gap-6 ${
          currentTheme.layout === 'cards' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1 md:grid-cols-2'
        }`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: currentTheme.colors.surface,
                borderRadius: currentTheme.borderRadius,
                boxShadow: currentTheme.shadows.md,
                border: `1px solid ${currentTheme.colors.border}`,
              }}
            >
              <div className="text-3xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 
                className="text-xl font-bold mb-3"
                style={{
                  color: currentTheme.colors.text,
                  fontFamily: currentTheme.fonts.primary,
                  fontWeight: currentTheme.fonts.weight.bold,
                }}
              >
                {feature.title}
              </h3>
              <p 
                className="leading-relaxed"
                style={{
                  color: currentTheme.colors.textSecondary,
                  fontFamily: currentTheme.fonts.secondary,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div 
        className="p-6 rounded-lg"
        style={{
          backgroundColor: currentTheme.colors.surface,
          border: `1px solid ${currentTheme.colors.border}`,
          borderRadius: currentTheme.borderRadius,
        }}
      >
        <h3 
          className="text-2xl font-bold mb-4"
          style={{
            color: currentTheme.colors.primary,
            fontFamily: currentTheme.fonts.primary,
            fontWeight: currentTheme.fonts.weight.bold,
          }}
        >
          Technical Implementation
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 
              className="font-bold mb-2"
              style={{
                color: currentTheme.colors.text,
                fontFamily: currentTheme.fonts.secondary,
                fontWeight: currentTheme.fonts.weight.bold,
              }}
            >
              Frontend Technologies
            </h4>
            <ul 
              className="text-sm space-y-1"
              style={{
                color: currentTheme.colors.textSecondary,
                fontFamily: currentTheme.fonts.secondary,
              }}
            >
              <li>• React 19 with TypeScript</li>
              <li>• React Router for navigation</li>
              <li>• Context API for state management</li>
              <li>• Tailwind CSS for styling</li>
              <li>• Google Fonts integration</li>
            </ul>
          </div>
          <div>
            <h4 
              className="font-bold mb-2"
              style={{
                color: currentTheme.colors.text,
                fontFamily: currentTheme.fonts.secondary,
                fontWeight: currentTheme.fonts.weight.bold,
              }}
            >
              Features
            </h4>
            <ul 
              className="text-sm space-y-1"
              style={{
                color: currentTheme.colors.textSecondary,
                fontFamily: currentTheme.fonts.secondary,
              }}
            >
              <li>• Three distinct layout systems</li>
              <li>• Dynamic CSS custom properties</li>
              <li>• localStorage persistence</li>
              <li>• Responsive breakpoints</li>
              <li>• Smooth transitions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;