import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const { lang } = useLanguage();

  return (
    <button
      type="button"
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={lang === 'ar' ? (isDark ? 'الوضع المضيء' : 'الوضع الليلي') : (isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode')}
    >
      {isDark ? (
        <Sun size={18} strokeWidth={1.8} className="theme-icon theme-icon--sun" />
      ) : (
        <Moon size={18} strokeWidth={1.8} className="theme-icon theme-icon--moon" />
      )}
    </button>
  );
};

export default ThemeToggle;

