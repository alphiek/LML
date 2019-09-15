import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`


html {
  font-family: Poppins, Arial, Helvetica, sans-serif;
  height: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  font-size: calc(12px + 0.8vw);
  box-sizing: border-box;
  line-height: 130%;
  background-color: #fff;
  @media (max-width: 1024px) {
    font-size: calc(12px + 1.2vw);
    }
  @media (max-width: 480px) {
  font-size: calc(12px + 2.2vw);
}
}


body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-weight: normal;
  color: #4B4A68;
  height: 100%;
  word-wrap: normal;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
  @media (max-width: 1024px) {
    text-align: center;
  }
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

header {
  width: 100%;
  position: fixed;
  background: rgb(201,210,245);
  background: -moz-linear-gradient(254deg, rgba(201,210,245,1) 0%, rgba(190,225,236,1) 51%, rgba(180,236,228,1) 100%);
  background: -webkit-linear-gradient(254deg, rgba(201,210,245,1) 0%, rgba(190,225,236,1) 51%, rgba(180,236,228,1) 100%);
  background: linear-gradient(254deg, rgba(201,210,245,1) 0%, rgba(190,225,236,1) 51%, rgba(180,236,228,1) 100%);
  height: 75px;
  top: 0;
  left: 0;
  z-index: 50;
}

main {
  padding-Top: 2.7em;
}


nav {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1em;
}

footer {
  background-color: #BAEEE5;
  color: #252454;
  margin-top: 2em;
  padding: 3em 2em;
  @media(max-width: 480px) {
    padding: 3em 8% 2em 8%;
  }
}

address {
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-weight: 400;
  text-align: left;
  font-size: 0.5em;
  line-height: 150%;
  letter-spacing: 0.02em;
  font-style: normal;
  @media (max-width: 1024px) {
    font-size: 0.55em;
  }
  @media (max-width: 768px) {
    font-size: 0.6em;
  }
  @media (max-width: 480px) {
    font-size: 0.65em;
  }
}

a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  text-decoration: none;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: #1E1D42;
  font-size: 0.55em;
  line-height: 130%;
  @media (max-width: 1024px) {
    font-size: 0.6em;
    }
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
  display: block;
  margin-left: 0;
  margin-right: auto;
  height: 2px;
  width: 10em;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  overflow: visible;
  border: none;
  background-color: #252454;
  opacity: 0.7;
}

h1 {
  font-size: 1.4em;
  padding-top: 7%;
  margin-bottom: 0.4em;
  text-align: center;
  font-weight: 700;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  text-rendering: optimizeLegibility;
  line-height: 130%;
  @media (max-width: 1024px) {
    font-size: 1.1em;
    }
  @media (max-width: 768px) {
    font-size: 1.1em;
  }
  @media (max-width: 480px) {
    font-size: 1em;
    padding-top: 10%;
    line-height: 140%;
  }
}

.title-sub-text {
  font-size: 0.65em;
  text-align: center;
  margin-top: 0.8em;
  text-align: center;
  line-height: 140%;
  width: 70%;

  @media (max-width: 768px) {
  font-size: 0.7em;
  }
  @media (max-width: 480px) {
  font-size: 0.75em;
  width: 80%;
  line-height: 160%;
  }
}

.landlord {
  color: #FFF;
  margin-bottom: 5%;
}

h2 {
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-rendering: optimizeLegibility;
  font-size: 0.78em;
  line-height: 130%;
  @media (max-width: 1024px) {
    text-align: center;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    font-size: 0.81em;
    letter-spacing: 0.2px;
  }
}

h3 {
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-rendering: optimizeLegibility;
  font-size: 0.7em;
  padding-bottom: 1em;
  line-height: 1.1;
  @media (max-width: 1024px) {
    text-align: center;
  }
}

h4 {
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-weight: 700;
  text-rendering: optimizeLegibility;
  font-size: 0.5em;
  line-height: 1.1;
  @media (max-width: 1024px) {
    font-size: 0.55em;
  }
  @media (max-width: 768px) {
    font-size: 0.6em;
  }
  @media (max-width: 480px) {
    font-size: 0.65em;
  }
}

ul {
  list-style: none;
  list-style-image: none;
  list-style-type: none;
  display: flex;
}

li {
  z-index: 2;
}

p {
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-weight: normal;
  text-rendering: optimizeLegibility;
  font-size: 0.55em;
  line-height: 140%;
  word-wrap: normal;
  margin-bottom: 1em;
  @media(max-width: 1024px) {
    text-align: center;
    margin-bottom: 1.5em;
  }
  @media (max-width: 991px) {
    font-size: 0.6em;
    line-height: 145%;
    }
    @media (max-width: 767px) {
    font-size: 0.65em;
    }
    @media (max-width: 479px) {
    font-size: 0.7em;
  }
}

button {
  display: inline-block;
  border: none;
  text-decoration: none;
  background: transparent;
  font-size: inherit;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-sizing: border-box;
}

button:hover,
button:focus {
  background: transparent;
}

button:focus {
  outline: none;
}

button:active {
  background: tranparent;
}

`