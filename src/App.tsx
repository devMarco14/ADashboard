import React from 'react';
import Routing from 'routes/Routing';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'libs/style/theme';
import GlobalStyles from 'libs/style/globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <GlobalStyles />
        <Routing />
      </AppLayout>
    </ThemeProvider>
  );
}

const AppLayout = styled.div`
  height: 100%;
  width: 100%;
`;
export default App;
