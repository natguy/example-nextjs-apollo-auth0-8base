import App from '../components/App'
import InfoBox from '../components/InfoBox'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList from '../components/PostList'

const ClientOnlyPage = (props) => (
  <App>
    <Header />
    <InfoBox>
      <h1>Client-only + Apollo + Vercel API</h1>
      <p>This page shows how to use Apollo only in the client. If you{' '}
      <a href="/vercel-client-only-apollo">reload</a> this page, you will see a loader since
      Apollo didn't fetch any data on the server. This is useful when the page
      doesn't have SEO requirements or blocking data fetching requirements.
       Note: Uses apolloClient-for-vercel-example.js.</p>
      <ul>
        <li><strong>(Client-only) Just like any vanilla React single page app SPA</strong></li>
        <li>(Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)</li>
        <li>(Static)  automatically rendered as static HTML (uses no initial props)</li>
        <li>(SSG)     automatically generated as static HTML + JSON (uses getStaticProps)</li>
        <li>(ISR)     incremental static regeneration (uses revalidate in getStaticProps)</li>
      </ul>
    </InfoBox>
    <Submit />
    <PostList />
  </App>
)

export default ClientOnlyPage
