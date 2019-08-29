import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

html {
  font-family: Poppins, Arial, Helvetica, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-size: calc(0.5em + 1vw);
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
  color: #4B4A68;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
}

main {
  margin-top: 2.5em;
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
  font-size: 0.5em;
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
  font-size: 0.5em;
}

a:active,
a:hover {
  outline-width: 0;
}

img {
  border-style: none;
  display: block;
  max-width: 100%;
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

h1 {
  font-size: 1.4em;
  text-align: center;
  font-weight: 700;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  text-rendering: optimizeLegibility;
  line-height: 130%;
  @media (max-width: 991px) {
    font-size: 1.2em;
    }
    @media (max-width: 767px) {
    font-size: 1em;
    }
    @media (max-width: 479px) {
    font-size: 1em;
  }
}

.title-sub-text {
  font-size: 0.6em;
  text-align: center;
  line-height: 135%;
  width: 80%;
}

h2 {
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-rendering: optimizeLegibility;
  font-size: 0.7em;
  line-height: 130%;
}

h3 {
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-rendering: optimizeLegibility;
  font-size: 0.7em;
  padding-bottom: 1em;
  line-height: 1.1;
}

ul {
  list-style-position: outside;
  list-style-image: none;
  list-style-type: none;
}

li {
  z-index: 2;
}


p {
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-weight: normal;
  text-rendering: optimizeLegibility;
  font-size: 0.55em;
  line-height: 135%;
}




@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}
`