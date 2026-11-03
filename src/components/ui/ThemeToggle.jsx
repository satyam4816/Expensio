import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { IconButton } from './IconButton';
import { useTheme } from '../../context/ThemeContext';

export function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <IconButton
      variant="secondary"
      size="md"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={className}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-warning" />
      ) : (
        <Moon className="w-4 h-4 text-muted hover:text-text" />
      )}
    </IconButton>
  );
}

export default ThemeToggle;
