import { useColorScheme } from 'react-native';
import '../global.css';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
export default function Layout() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack />
    </ThemeProvider>
  );
}
