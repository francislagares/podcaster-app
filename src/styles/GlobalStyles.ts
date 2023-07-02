import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  color: rgb(255 255 255 / 87%);
  font-size: 1rem;
  font-weight: 400;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.2rem;
  color-scheme: light dark;
  background-color: #242424;
  font-synthesis: none;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-size-adjust: 100%;
}

body {
  margin: 0;
  padding: 2rem 20rem;
  min-width: 320px;
}

a {
  text-decoration: none;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #fff;
  }
}
`;

export default GlobalStyles;
