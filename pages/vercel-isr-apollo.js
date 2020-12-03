import App from '../components/App'
import InfoBox from '../components/InfoBox'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList, {
  ALL_POSTS_QUERY,
  allPostsQueryVars,
} from '../components/PostList'
import { initializeApollo, addApolloState } from '../lib/apolloClient-for-vercel-example'

const IndexPage = () => (
  <App>
    <Header />
    <InfoBox>
      <h1>SSG/ISR + Apollo + Vercel API</h1>
      <p>This page uses SSG/ISR via Apollo and a Vercel sample graphql API. Actually this page is a form
      of SSG: (ISR) incremental static regeneration. Note: Uses apolloClient-for-vercel-example.js.</p>
      <ul>
        <li>(Client-only) Just like any vanilla React single page app SPA</li>
        <li>(Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)</li>
        <li>(Static)  automatically rendered as static HTML (uses no initial props)</li>
        <li>(SSG)     automatically generated as static HTML + JSON (uses getStaticProps)</li>
        <li><strong>(ISR)     incremental static regeneration (uses revalidate in getStaticProps)</strong></li>
      </ul>
    </InfoBox>
    <Submit />
    <PostList />
  </App>
)

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  })
}

export default IndexPage
