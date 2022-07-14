import React from 'react';
import './App.css';
import Routing from 'routes/Routing';
import { ThemeProvider } from 'styled-components';
import theme from 'libs/style/theme';
import GlobalStyles from 'libs/style/globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routing />
    </ThemeProvider>
  );
}

export default App;
