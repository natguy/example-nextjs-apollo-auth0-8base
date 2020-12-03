export default function App({ children }) {
  return (
    <main>
      {children}
      <style jsx global>{`
        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        }
        body {
          margin: 0;
          padding: 25px 50px;
        }
        main {
          max-width: 880px;
        }
        a {
          color: #22bad9;
        }
        p {
          font-size: 15px;
          line-height: 24px;
        }
        ul li, ol li {
          padding: 4px 0;
          font-size: 14px;
        }
        article {
          margin: 40px auto;
          max-width: 650px;
        }
        button {
          align-items: center;
          background-color: #22bad9;
          border: 0;
          color: white;
          display: flex;
          padding: 5px 7px;
          transition: background-color 0.3s;
        }
        button:active {
          background-color: #1b9db7;
        }
        button:disabled {
          background-color: #b5bebf;
        }
        button:focus {
          outline: none;
        }
        .button {
          background-color: #22bad9;
          color: white;
          display: inline-block;
          padding: 8px 12px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
        }
        .button:hover {
          opacity: 0.7;
        }
        pre {
          font-family: Courier, Monaco, monospace;
          font-size: 0.8rem;
        }
        h3 {
          margin-top: 40px;
        }
      `}</style>
    </main>
  )
}
