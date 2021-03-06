import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
  font-size: 16px;
  background-color: #fff;
  width: 100%;
}


body {
  font-family: Poppins, Arial, Helvetica, sans-serif;
  -webkit-text-size-adjust: none;
  font-size: 1rem;
  line-height: 145%;
  font-weight: normal;
  color: #4B4A68;
  word-wrap: normal;
  font-kerning: normal;

  @media (max-width: 1180px) {
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
  padding-top: 80px;
  width: 100%;
  overflow: hidden;
}

nav {
  position: relative;
  display: flex;
  font-size: 0.9rem;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  max-height: 80px;
  box-shadow: 0 3px 6px rgba(75,74,104,0.16), 0 3px 6px rgba(75,74,104,0.23);
}

.name {
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0 10px;
  @media (max-width: 1180px) {
    font-size: 1rem;
  }
}

footer {
  background-color: #BAEEE5;
  position: relative;
  overflow: hidden;
  color: #252454;
  text-align: center;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: 480px) {
    padding: 3em 8% 2em 8%;
  }
}

address {
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


h1 {
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-size: 1.953rem;
  line-height: 130%;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.4em;
  color: white;
  width: 80%;
  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    padding-top: 10%;
  }
}

.title-sub-text {
  font-size: 1.1rem;
  text-align: center;
  color: #FFF;
  margin: 0.8rem 0 30px 0;
  width: 70%;
  line-height: 145%;
  @media (max-width: 480px) {
  width: 85%;
  font-size: 1rem;
  }
}

h2 {
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 140%;
  @media (max-width: 1180px) {
    text-align: center;
    font-weight: 700;
  }
}

h3 {
  font-family: Poppins, Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding-bottom: 1rem;
  @media (max-width: 1180px) {
    text-align: center;
  }
}

h4 {
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 160%;
  color: #4B4A68;
  @media (max-width: 1180px) {
    text-align: left;
  }
}

p {
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  line-height: 135%;
  font-weight: normal;
  word-wrap: normal;
  margin-bottom: 1rem;
  @media(max-width: 1180px) {
    text-align: center;
    margin-bottom: 1.5rem;
  }
}


a {
  font-size: 0.9rem;
  font-weight: 600;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  text-decoration: none;
  color: inherit;
}

a:active,
a:hover
a:visited {
  outline-width: 0;
  color: inherit;
}

img {
  border-style: none;
  display: block;
}

hr {
  box-sizing: content-box;
  display: block;
  height: 2px;
  width: 10rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  overflow: visible;
  border: none;
  background-color: #252454;
  opacity: 0.7;
  margin: 2rem auto;
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

iframe {
  border: none;
}

button {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  display: inline-block;
  border: none;
  text-decoration: none;
  background: transparent;
  text-align: center;
  cursor: pointer;
  line-height: 130%;
  overflow: hidden;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-sizing: border-box;
}

button:hover,
button:focus {
  background: inherit;
}

button:focus {
  outline: none;
}

button:active {
  background: inherit;
}

`
export default GlobalStyle
