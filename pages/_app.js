import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import Layout from "../components/layout";
import '@fontsource/pt-serif/400.css';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
