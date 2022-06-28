import "./../public/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../src/components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
