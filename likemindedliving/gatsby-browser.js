const React = require("react")
const Layout = require("./src/components/layout").default
const GlobalStyle = require("./src/global/globalStyle").default
require("typeface-montserrat")
require("typeface-poppins")

exports.onClientEntry = () => {
  if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
      document.body.className = document.body.className.replace(/\bno-js\b/, "")
    })
  }
}

exports.wrapPageElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      <Layout>{element}</Layout>
    </>
  )
}
