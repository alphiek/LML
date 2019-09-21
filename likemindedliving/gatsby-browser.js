import React from 'react'
import Layout from './src/components/layout'
import { GlobalStyle } from "./src/global/globalStyle"

require('typeface-montserrat')
require('typeface-poppins')


export const wrapPageElement = ({ element }) => {
    return (
        <>
        <GlobalStyle />
        <Layout>{element}</Layout>
        </>
    )
}
