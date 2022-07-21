import darkTheme from 'libs/style/theme/darkTheme';
import defaultTheme from 'libs/style/theme/defaultTheme';
import React, { createContext, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext({
  ThemeMode: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onToggleTheme: () => {},
});

function ThemeProvider({ children }: ThemeProviderProps) {
  const [ThemeMode, setThemeMode] = useState(true);
  const themeObject = ThemeMode ? defaultTheme : darkTheme;
  const onToggleTheme = () => {
    setThemeMode((prev) => !prev);
  };

  const memoedValue = React.useMemo(
    () => ({
      ThemeMode,
      onToggleTheme,
    }),
    [ThemeMode],
  );
  return (
    <ThemeContext.Provider value={memoedValue}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
