# What Is This?

This project starts with [Nextjs's with-apollo example project](https://github.com/vercel/next.js/tree/canary/examples/with-apollo). It then adds [Auth0's Nextjs SDK](https://github.com/auth0/nextjs-auth0) for authentication (but not authorization) and [8base](https://www.8base.com/) as a hosted GraphQL API that can also handle user authorization.

Dependencies include the [Apollo GraphQL client](https://www.apollographql.com/client/) (except for a simple fetch example), the [nextjs-auth0 sdk](https://github.com/auth0/nextjs-auth0) and no 8base SDKs.

Note: Currently, unauthenticated 8base access works fine but authenticated requests return "User is absent" errors.

## How to use

```bash
npm run dev
  # Starts the development server.

npm run dev -- -p 3002
  # If you want a dev server on a specific port.
```

## Test with Vercel Data

Click links in the Vercel section of the nav to view the Appollo + Vercel sample GraphQL API in action.

## Test 8base + Auth0 + Fetch (with error)

Before getting into Apollo + Auth0, let's start with a simple 8base auth test via fetch.

1. Copy the .env.template file and rename it .env.local
2. Add your Auth0 details and 8base API endpoint to .env.local
3. Restart your dev server.
4. Click Sign In in the nav to sign in or create an account.

Visit the 8base: SSR + Fetch + Auth0 page via the nav. Most likely, you will get a "User is absent" error.

## Test 8base + Apollo

View your 8base data without authentication via the Apollo client.

1. If you didn't do it above, copy the .env.template file and rename it .env.local
2. Add your 8base API endpoint to .env and restart your dev server.
3. Update _app.js to use the 8base graphql API rather than the Vercel sample API. Comment out the Vercel import and uncomment the 8base import.
4. Edit components/ItemsList.js with the query and mapping for your specific data.

Visit the 8base: SSR + Apollo page via the nav. You should see your 8base data displayed.

## Test 8base + Apollo + Auth0 (with error)

Assuming you did the 8base + Apollo above as well as added your Auth0 info to .env, you should have all elements needed... to trigger an error.

Visit the 8base: SSR + Apollo + Auth0 page via the nav. You should see an error.
