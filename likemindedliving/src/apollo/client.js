import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-fetch'

const token = `${process.env.GATSBY_DATO_API_KEY}`

const httpLink = createHttpLink({
  uri: 'https://graphql.datocms.com/',
  fetch,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: Object.assign(headers || {}, {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    }),
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
