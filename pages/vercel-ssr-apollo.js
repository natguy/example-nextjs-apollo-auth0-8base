import App from '../components/App'
import InfoBox from '../components/InfoBox'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList, {
  ALL_POSTS_QUERY,
  allPostsQueryVars,
} from '../components/PostList'
import { initializeApollo, addApolloState } from '../lib/apolloClient-for-vercel-example'

const SSRPage = () => (
  <App>
    <Header />
    <InfoBox>
      <h1>SSR + Apollo + Vercel API</h1>
      <p>This page shows how to use SSR with Apollo. Note: Uses apolloClient-for-vercel-example.js.</p>
      <ul>
        <li>(Client-only) Just like any vanilla React single page app SPA</li>
        <li><strong>(Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)</strong></li>
        <li>(Static)  automatically rendered as static HTML (uses no initial props)</li>
        <li>(SSG)     automatically generated as static HTML + JSON (uses getStaticProps)</li>
        <li>(ISR)     incremental static regeneration (uses revalidate in getStaticProps)</li>
      </ul>
    </InfoBox>
    <Submit />
    <PostList />
  </App>
)

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}

export default SSRPage
