import React from 'react'
import Layout from './src/components/layout'
import WindowDimensionsProvider from './src/context/windowDimensionsProvider'

require('typeface-montserrat')
require('typeface-poppins')


export const wrapPageElement = ({ element }) => {
    return (
        <WindowDimensionsProvider>
            <Layout>{element}</Layout>
        </WindowDimensionsProvider>
    )
}
