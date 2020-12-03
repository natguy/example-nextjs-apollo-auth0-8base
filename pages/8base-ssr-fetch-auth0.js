import App from '../components/App'
import InfoBox from '../components/InfoBox'
import Header from '../components/Header'
import auth0 from '../lib/auth0'
import config from '../lib/config'

const SSRPageWithAuth = ({ data }) => (
  <App>
    <Header />
    <InfoBox>
      <h1>SSR + Fetch + 8base API + Auth0 (with error)</h1>
      <p>
        Get 8base data via SSR with fetch (not Apollo) + Auth0.
        Really, we would want to send auth idToken via Apollo client, but let's do a simple test just using fetch.
      </p>
      <ol>
        <li>Update .env.local to include your Auth0 details and 8base API endpoint.</li>
        <li>Restart your dev server.</li>
        <li>Click Sign In in the nav to sign in or create an account.</li>
        <li>Note: You may get a "User is absent" error below.</li>
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
    <div>
      <h5>Response from 8base:</h5>
      <pre>{JSON.stringify(data, null, 2) }</pre>
    </div>
  </App>
)

export async function getServerSideProps( context ) {
  const { idToken, accessToken, user } = (await auth0.getSession(context.req)) || {};

  if (!user) {
    context.res.writeHead(302, {
      Location: '/api/login'
    });
    context.res.end();
    return;
  }

  console.log('Fetching 8base data via server.');
  console.log('Really, we would want to send auth idToken via Apollo client, but we are doing a simpler 8base graphql test here with fetch.');

  // Test an auth connection to 8base
    const rawResponse = await fetch(config.EIGHTBASE_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({ query: "{ user { id } }" })
    })

    const data = await rawResponse.json();

    if (!data) {
      return {
        notFound: true,
      }
    }

  return {
    props: {
      data: data
    },
  }
}

export default SSRPageWithAuth
