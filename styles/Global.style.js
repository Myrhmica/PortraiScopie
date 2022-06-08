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
<<<<<<< HEAD
input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
}
`;

export default GlobalStyle;
=======

`;

export default GlobalStyle;
>>>>>>> 557cf842935d07082978f964ce3e60fb2e8f60ca
