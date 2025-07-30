import React, { ReactNode } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";

interface ColorfulCardLayoutProps {
  children: ReactNode;
}

const ColorfulCardLayout: React.FC<ColorfulCardLayoutProps> = ({
  children,
}) => {
  const { currentTheme } = useTheme();
  const bottomData = [
    {
      color: currentTheme.colors.primary,
      title: "Playful",
      desc: "Vibrant and fun design",
    },
    {
      color: currentTheme.colors.secondary,
      title: "Creative",
      desc: "Inspiring layouts",
    },
    {
      color: currentTheme.colors.accent,
      title: "Dynamic",
      desc: "Interactive elements",
    },
  ];
  const navbarOptions = ["Home", "About", "Contact"];
  return (
    <div
      className="min-h-screen pt-20 transition-all duration-300"
      style={{
        backgroundColor: currentTheme.colors.background,
        fontFamily: currentTheme.fonts.primary,
        backgroundImage: `
          radial-gradient(circle at 25% 25%, ${currentTheme.colors.primary}15 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, ${currentTheme.colors.secondary}15 0%, transparent 50%)
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8 flex justify-center">
          <div
            className="inline-flex rounded-full p-2 space-x-2"
            style={{
              backgroundColor: currentTheme.colors.surface,
              boxShadow: currentTheme.shadows.lg,
            }}
          >
            {navbarOptions.map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              >
                <button
                  className="px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 font-medium"
                  style={{
                    backgroundColor: currentTheme.colors.primary,
                    color: currentTheme.colors.surface,
                    fontFamily: currentTheme.fonts.secondary,
                    fontWeight: currentTheme.fonts.weight.medium,
                  }}
                >
                  {item}
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:gap-8">
          <div
            className="p-8 rounded-3xl transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: currentTheme.colors.surface,
              boxShadow: currentTheme.shadows.lg,
              borderRadius: currentTheme.borderRadius,
              border: `3px solid ${currentTheme.colors.border}`,
            }}
          >
            <div
              className="space-y-6"
              style={{
                color: currentTheme.colors.text,
              }}
            >
              {children}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bottomData.map((card, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl transition-all duration-500 hover:rotate-1 hover:scale-105 cursor-pointer"
                style={{
                  backgroundColor: currentTheme.colors.surface,
                  boxShadow: currentTheme.shadows.md,
                  borderLeft: `4px solid ${card.color}`,
                }}
              >
                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    color: card.color,
                    fontFamily: currentTheme.fonts.primary,
                    fontWeight: currentTheme.fonts.weight.bold,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: currentTheme.colors.textSecondary,
                    fontFamily: currentTheme.fonts.secondary,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorfulCardLayout;
