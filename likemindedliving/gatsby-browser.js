import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './src/apollo/client'
import Layout from './src/components/layout'
import GlobalStyle from './src/global/globalStyle'
require('typeface-montserrat')
require('typeface-poppins')

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Layout>{element}</Layout>
      </ApolloProvider>
    </>
  )
}

export const onServiceWorkerUpdateReady = () => {
  if (typeof window !== `undefined`) {
    const answer = window.confirm(
      `This application has been updated. ` +
        `Reload to display the latest version?`
    )
    if (answer === true) {
      window.location.reload()
    }
  }
}
