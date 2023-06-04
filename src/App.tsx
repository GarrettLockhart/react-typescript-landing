import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { defaultTheme as theme } from './components/Theme/theme';
import Navbar from './components/Navigation/Navbar';
import HeroContainer from './components/Landing/HeroContainer';

// css reset
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <HeroContainer />
    </ThemeProvider>
  );
}

export default App;
