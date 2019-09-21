import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`


html {
  height: 100%;
  font-size: 16px;
  background-color: #fff;
  width: 100%;
}


body {
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 140%;
  font-weight: normal;
  text-rendering: optimizeLegibility;
  color: #4B4A68;
  word-wrap: normal;
  font-kerning: normal;

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
  top: 0;
  left: 0;
  z-index: 50;
}

main {
  padding-Top: 2.7em;
}

nav {
  position: relative;
  display: flex;
  font-size: 0.9rem;
  align-items: center;
  height: 100%;
  padding: 1rem;
  max-height: 90px;
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
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  text-align: left;
}


h1 {
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-size: 1.953rem;
  line-height: 130%;
  font-weight: 700;
  text-align: center;
  padding-top: 7%;
  margin-bottom: 0.4em;

  @media (max-width: 480px) {
    padding-top: 10%;
  }
}

.title-sub-text {
  font-size: 1rem;
  text-align: center;
  margin-top: 0.8em;
  width: 70%;

  @media (max-width: 480px) {
  width: 80%;
  }
}

.landlord {
  color: #FFF;
  margin-bottom: 5%;
}

h2 {
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  @media (max-width: 1024px) {
    text-align: center;
    font-weight: 700;
  }
}

h3 {
  font-weight: 600;
  font-size: 1.25rem;
  padding-bottom: 1rem;
  @media (max-width: 1024px) {
    text-align: center;
  }
}

h4 {
  font-size: 1rem;
  font-weight: 700;
  text-rendering: optimizeLegibility;
}

p {
  font-size: 1rem;
  font-weight: normal;
  text-rendering: optimizeLegibility;
  word-wrap: normal;
  margin-bottom: 1em;

  @media(max-width: 1024px) {
    text-align: center;
    margin-bottom: 1.5em;
  }
}


a {
  font-size: 0.9rem;
  font-weight: 600;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  text-decoration: none;
  color: #1E1D42;
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
  @media (max-width: 1024px) {
    margin: 2em auto 2em auto;
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



button {
  font-size: inherit;
  display: inline-block;
  border: none;
  text-decoration: none;
  background: transparent;
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