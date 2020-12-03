import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient-for-vercel-example' // Vercel example API
// import { useApollo } from '../lib/apolloClient-for-8base' // 8base API, update .env with your API endpoint

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
