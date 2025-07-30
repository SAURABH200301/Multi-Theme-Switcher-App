import React, { ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import MinimalistLayout from './layouts/MinimalistLayout';
import DarkSidebarLayout from './layouts/DarkSidebarLayout';
import ColorfulCardLayout from './layouts/ColorfulCardLayout';

interface LayoutWrapperProps {
  children: ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const { currentTheme } = useTheme();

  switch (currentTheme.layout) {
    case 'minimalist':
      return <MinimalistLayout>{children}</MinimalistLayout>;
    case 'sidebar':
      return <DarkSidebarLayout>{children}</DarkSidebarLayout>;
    case 'cards':
      return <ColorfulCardLayout>{children}</ColorfulCardLayout>;
    default:
      return <MinimalistLayout>{children}</MinimalistLayout>;
  }
};

export default LayoutWrapper;