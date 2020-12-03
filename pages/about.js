import App from '../components/App'
import Header from '../components/Header'

const AboutPage = () => (
  <App>
    <Header />
    <article>
      <h1>About</h1>
      <p>This example is based on{' '}
        <a href="https://github.com/vercel/next.js/tree/canary/examples/with-apollo">Vercel's
        Nextjs Apollo example project</a>. It has been updated to also use{' '} <a href="https://www.8base.com/">8base</a>{' '}
        as a GraphQL API source, with and without authentication using{' '} <a href="https://auth0.com/">Auth0</a>.
      </p>
      <p>
        It uses the{' '} <a href="https://www.apollographql.com/client/">Apollo GraphQL client</a>,
        the{' '} <a href="https://github.com/auth0/nextjs-auth0">nextjs-auth0 sdk</a>{' '}
        and no 8base SDKs.
      </p>

      <h3>Nextjs Rendering</h3>
      <p>
        One of the benefits of Vercel's Nextjs over vanilla React is its
        page rendering flexibility out-of-the-box. How you choose to
        render pages will be based on your needs for SEO, performance and other factors.
      </p>
      <ul>
        <li>(Client-only) Just like any vanilla React single page app SPA</li>
        <li>(SSR Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)</li>
        <li>(Static)  automatically rendered as static HTML (uses no initial props)</li>
        <li>(SSG)     automatically generated as static HTML + JSON (uses getStaticProps)</li>
        <li>(ISR)     incremental static regeneration (uses revalidate in getStaticProps)</li>
      </ul>
      <p>
        But with that flexibility comes complexity in accessing GraphQL data and authentication.
        Server-side? Runtime? Build-time? Client-side?
        This example project is the start of trying to make sense of the options.</p>
      <h3>Graphql API Access via the Apollo Client</h3>
      <p>
        <a href="https://www.apollographql.com/client/">Apollo</a> is a GraphQL
        client that allows you to query the exact data you need from a
        GraphQL server. In addition to fetching and mutating data, Apollo
        analyzes your queries and their results to construct a client-side cache
        of your data, which is kept up to date as further queries and mutations
        are run, fetching more results from the server.
      </p>
      <p>
        For server side rendering, we integrate Apollo with Next by calling{' '}
        <a href="https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation">
        getStaticProps</a>{' '} or {' '}<a href="https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering">
        getServerSideProps</a>{' '} at our Page component. This approach lets us opt out of getInitialProps.
      </p>
      <p>
        On initial page load, while on the server and inside{' '}
        <a href="https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation">
        getStaticProps
        </a>
        , we fetch the query used to get the list of items. At the point in
        which the query promise resolves, our Apollo Client store is completely
        initialized. Then we serve the initial HTML with the fetched data and
        hydrate Apollo in the browser.
      </p>
      <p>
        Alternatively, in the client-only page version we bypass the need to
        handle server side props and let Apollo handle the GraphQL
        API communication directly.
      </p>
      <p>
        We also have a simple example that bypasses Apollo altogether and uses
        fetch to access the 8base GraphQL API.
      </p>
      <h3>GraphQL APIs</h3>
      <p>
        Certain pages in this example use the original Vercel example's Vercel-hosted GraphQL API.
        Other pages can use your 8base GraphQL API. Check the navigation for examples for each.
      </p>

      <h3>Auth0 for Authentication</h3>
      <p>
        These example pages access GraphQL APIs with and without auth.
        The Auth0 service is used for authentication (not authoriation for
          specific data assets - that's handled on the 8base side.) This example
        uses Auth0's {' '}<a href="https://github.com/auth0/nextjs-auth0">nextjs-auth0 sdk</a>.
        Check out Auth0's {' '}
        <a href="https://auth0.com/blog/ultimate-guide-nextjs-authentication-auth0/">Ultimate Guide to Nextjs Auth</a> {' '}
        blog post for more info and more options for Nextjs auth.
      </p>
    </article>
  </App>
)

export default AboutPage
