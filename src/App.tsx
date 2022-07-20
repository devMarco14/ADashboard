import React, { useContext } from 'react';
import Routing from 'routes/Routing';
import styled from 'styled-components';
import GlobalStyles from 'libs/style/globalStyles';
import { ThemeContext, ThemeProvider } from 'libs/context/theme';

function App() {
  return (
    <ThemeProvider>
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
