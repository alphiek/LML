import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import PropertySwiper from './PropertySwiper'
import { LoadingScreen } from './LoadingScreen'

const APOLLO_QUERY = gql`
  {
    allProperties(first: "10") {
      title
      price
      location
      linkurl
      id
      image {
        alt
        url
      }
      shortdescription
    }
  }
`

const DisplayProperties = () => {
  const { data, loading, error } = useQuery(APOLLO_QUERY)

  if (loading) return <LoadingScreen />
  if (error) return <p>ERROR: {error.message}</p>

  return (
    <>{data.allProperties && <PropertySwiper data={data.allProperties} />}</>
  )
}

export default DisplayProperties
