import App from '../components/App'
import Header from '../components/Header'

const AboutPage = () => (
  <App>
    <Header />
    <article>
      <h1>Nextjs + Apollo + Auth0 + 8base</h1>

      <h3>Vercel Examples</h3>
      <p>Check out the Vercel links in the nav above.</p>

      <h3>8base Examples</h3>
      <p>
        Next, before getting into 8base + Apollo + Auth0, let's start with a simple 8base Auth0 test via fetch.
        Note: you should get a "User is absent" error.
      </p>

      <ol>
        <li>Copy the .env.template file and rename it .env</li>
        <li>Add your Auth0 details and 8base API endpoint to .env</li>
        <li>Click Sign In in the nav to create an account.  </li>
        <li>Visit the 8base ssr-fetch-auth0 page:</li>
      </ol>
      <p>
        <a href="/8base-ssr-fetch-auth0" className="button">8base + Fetch + Auth0</a>
      </p>
      <p>
        <a href="/about">More info here</a>. Also check README.md.
      </p>
    </article>
  </App>
)

export default AboutPage
