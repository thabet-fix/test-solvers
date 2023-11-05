import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import Layout from "../components/layout";
import "@fontsource/pt-serif/400.css";
import "@fontsource/cabin";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </SessionProvider>
  );
}

export default MyApp;
