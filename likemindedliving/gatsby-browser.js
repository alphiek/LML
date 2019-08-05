import React from 'react'
import Layout from './src/components/layout'
require('typeface-montserrat')
require('typeface-poppins')


export const wrapPageElement = ({ element }) => {
    return <Layout>{element}</Layout>
}
