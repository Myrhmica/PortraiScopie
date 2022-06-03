import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0px;
  margin: 0px;
  background-color: #f0efe9;
  height: 100vh;
}

* { 
box-sizing: border-box;
}
a {
  text-decoration: none;
  color: unset;
}

button {
  border: none;
}

h2 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
}

#__next {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

`;

export default GlobalStyle;