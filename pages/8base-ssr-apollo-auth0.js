import App from '../components/App'
import InfoBox from '../components/InfoBox'
import Header from '../components/Header'
import ItemsList, {
  ALL_ITEMS_QUERY,
  allItemsQueryVars,
} from '../components/ItemsList'
import { initializeApollo, addApolloState } from '../lib/apolloClient-for-8base'
import auth0 from '../lib/auth0'

const SSRPageWithAuth = () => (
  <App>
    <Header />
    <InfoBox>
      <h1>SSR + Apollo + 8base API + Auth0 (with errors)</h1>
      <p>This page shows how to use SSR with Apollo to access restricted data from your 8base graphql API.</p>
      <ol>
        <li>Update _app.js to use the 8base graphql API rather than the Vercel sample API.</li>
        <li>Update .env.local to include your Auth0 details and 8base API endpoint.</li>
        <li>Restart your dev server.</li>
        <li>Edit components/ItemsList.js with the query and mapping for your specific data.</li>
        <li>Click Sign In in the nav to sign in or create an account.</li>
      </ol>
      <h5>Bold = How This is Rendered</h5>
      <ul>
        <li>(Client-only) Just like any vanilla React single page app SPA</li>
        <li><strong>(SSR Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)</strong></li>
        <li>(Static)  automatically rendered as static HTML (uses no initial props)</li>
        <li>(SSG)     automatically generated as static HTML + JSON (uses getStaticProps)</li>
        <li>(ISR)     incremental static regeneration (uses revalidate in getStaticProps)</li>
      </ul>
    </InfoBox>
    <ItemsList />
  </App>
)

export async function getServerSideProps( context ) {
  const apolloClient = initializeApollo()
  const { idToken, accessToken, user } = (await auth0.getSession(context.req)) || {};

  if (!user) {
    context.res.writeHead(302, {
      Location: '/api/login'
    });
    context.res.end();
    return;
  }

  try {
    await apolloClient.query({
      query: ALL_ITEMS_QUERY,
      variables: allItemsQueryVars,
      context: {
        headers: {
          Authorization: idToken ? `Bearer ${idToken}` : ''
        }
      }
    })
  } catch (error) {
      console.error(error)
  }


  return addApolloState(apolloClient, {
    props: {},
  })
}

export default SSRPageWithAuth
