import { ThemeProvider } from 'styled-components';
import { defaultTheme as theme } from './components/Theme/theme';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navigation/Navbar';
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
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
      </ThemeProvider>
    </>
  );
}

export default App;
