import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navigation/Navbar';
// css reset
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
    </>
  );
}

export default App;
