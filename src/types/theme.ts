export interface ThemeConfig {
  id: 'theme1' | 'theme2' | 'theme3';
  name: string;
  layout: 'minimalist' | 'sidebar' | 'cards';
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    accent: string;
    border: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    weight: {
      normal: string;
      medium: string;
      bold: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: string;
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
}