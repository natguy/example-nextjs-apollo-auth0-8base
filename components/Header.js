import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Header() {
  const { pathname } = useRouter()

  return (
    <header>
      <div>
        <Link href="/">
          <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
        </Link>
        <Link href="/about">
          <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
        </Link>
        <Link href="/api/login">
          <a className={pathname === '/api/login' ? 'is-active' : ''}>Sign In</a>
        </Link>
        <Link href="/api/logout">
          <a className={pathname === '/api/logout' ? 'is-active' : ''}>Sign Out</a>
        </Link>
      </div>
      <div>
        Vercel: &nbsp;
        <Link href="/vercel-client-only-apollo">
          <a className={pathname === '/vercel-client-only-apollo' ? 'is-active' : ''}>
            Client-Only + Apollo
          </a>
        </Link>
        <Link href="/vercel-isr-apollo">
          <a className={pathname === '/vercel-isr-apollo' ? 'is-active' : ''}>
            SSG/ISR + Apollo
          </a>
        </Link>
        <Link href="/vercel-ssr-apollo">
          <a className={pathname === '/vercel-ssr-apollo' ? 'is-active' : ''}>
            SSR + Apollo
          </a>
        </Link>
      </div>
      <div>
        8base: &nbsp;
        <Link href="/8base-ssr-fetch-auth0">
          <a className={pathname === '/8base-ssr-fetch-auth0' ? 'is-active' : ''}>
            SSR + Fetch + Auth0
          </a>
        </Link>
        <Link href="/8base-ssr-apollo">
          <a className={pathname === '/8base-ssr-apollo' ? 'is-active' : ''}>
            SSR + Apollo
          </a>
        </Link>
        <Link href="/8base-ssr-apollo-auth0">
          <a className={pathname === '/8base-ssr-apollo-auth0' ? 'is-active' : ''}>
            SSR + Apollo + Auth0
          </a>
        </Link>
      </div>
      <style jsx>{`
        header {
          font-size: 14px;
          margin-bottom: 25px;
        }
        header > div {
          padding: 4px 0;
        }
        a {
          text-decoration: none;
          border-left: 1px solid #bbb;
          padding: 0 16px;
        }
        a:first-of-type {
          border-left: none;
          padding-left: 0;
        }
        .is-active {
          text-decoration: underline;
        }
      `}</style>
    </header>
  )
}
