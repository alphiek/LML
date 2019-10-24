const React = require("react")
const Layout = require("./src/components/layout").default
const GlobalStyle = require("./src/global/globalStyle").default

require('typeface-montserrat')
require('typeface-poppins')

exports.onRenderBody = ({ setBodyAttributes }) => {
    setBodyAttributes({
        className: 'no-js'
      });
  };


exports.wrapPageElement = ({ element }) => {
    return (
        <>
        <GlobalStyle />
        <Layout>{element}</Layout>
        </>
    )
}

