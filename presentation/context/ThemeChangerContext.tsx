import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'nativewind';
import { Colors } from '@/constants/Colors';
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';

interface ThemeChangerContextType {
  currentTheme: 'light' | 'dark';
  isSystemTheme: boolean;

  bgColor: string;

  toggleTheme: () => void;
  setSystemTheme: () => void;
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType);

// Custom Hook para acceder al ThemeChangerContext
export const useThemeChangerContext = () => {
  const themeChanger = useContext(ThemeChangerContext);

  return themeChanger;
};

// Provider
export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
  const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);

  const currentTheme = isSystemThemeEnabled ? colorScheme : isDarkMode ? 'dark' : 'light';

  const backgroundColor = isDarkMode ? Colors.dark.background : Colors.light.background;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ThemeChangerContext.Provider
        value={{
          currentTheme: currentTheme ?? 'light',
          isSystemTheme: isSystemThemeEnabled,
          bgColor: backgroundColor,

          toggleTheme: () => {
            setIsDarkMode(!isDarkMode);
            setColorScheme(isDarkMode ? 'light' : 'dark');
            setIsSystemThemeEnabled(false);
          },

          setSystemTheme: () => {
            setIsSystemThemeEnabled(true);
            setColorScheme('system');
          },
        }}>
        {children}
      </ThemeChangerContext.Provider>
    </ThemeProvider>
  );
};
