import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body {
  padding: 20px 40px;
  margin: 0;
  font-family: "Silkscreen", cursive, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media screen and (max-width:800px){
    padding:10px;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
a {
  text-decoration: none;
  color: black;
}
* {
  box-sizing: border-box;
}
`;
