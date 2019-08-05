import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

html {
  font-family: Poppins, Arial, Helvetica, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-size: calc(0.6em + 1vw);
  box-sizing: border-box;
  overflow-y: scroll;
  line-height: 130%;
  background-color: #fff;
  @media (max-width: 991px) {
  font-size: calc(0.6em + 1.2vw);
  }
  @media (max-width: 767px) {
  font-size: calc(0.6em + 1.8vw);
  }
  @media (max-width: 479px) {
  font-size: calc(0.6em + 2.2vw);
}
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*:before {
  box-sizing: border-box;
}
*:after {
  box-sizing: border-box;
}

footer,
header,
main,
nav,
section {
  display: block;
}

nav {
  width: 100%;
  background: rgb(201,210,245);
  background: -moz-linear-gradient(254deg, rgba(201,210,245,1) 0%, rgba(190,225,236,1) 51%, rgba(180,236,228,1) 100%);
  background: -webkit-linear-gradient(254deg, rgba(201,210,245,1) 0%, rgba(190,225,236,1) 51%, rgba(180,236,228,1) 100%);
  background: linear-gradient(254deg, rgba(201,210,245,1) 0%, rgba(190,225,236,1) 51%, rgba(180,236,228,1) 100%);
}

footer {
  background-color: #BAEEE5;
  color: #252454;
  padding-top: 3em;
  padding-bottom: 3em;
  padding-left: 4vw;
}

address {
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 0.55em;
  line-height: 150%;
  letter-spacing: 0.02em;
  font-style: normal;
}

a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  text-decoration: none;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: #1E1D42;
  font-size: 0.55em;
}

a:active,
a:hover {
  outline-width: 0;
}

img {
  border-style: none;
}

hr {
  box-sizing: content-box;
  height: 2px;
  width: 15vw;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  overflow: visible;
  border: none;
  background-color: #252454;
}

img {
  max-width: 100%;
  margin-bottom: 1.45rem;
}

h1 {
  font-size: 0.9em;
  font-weight: 300;
  margin-bottom: 1.45rem;
  color: #F4F5F6;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  text-rendering: optimizeLegibility;
  line-height: 130%;
}
h2 {
  margin-bottom: 1.45rem;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.62671rem;
  line-height: 1.1;
}
h3 {
  margin-bottom: 1.45rem;
  color: inherit;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.38316rem;
  line-height: 1.1;
}

ul {
  list-style-position: outside;
  list-style-image: none;
  list-style-type: none;
}


p {
}




@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}
`