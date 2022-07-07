import "./../public/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../src/components/Layout";
import ShoppingContextProvider from "../src/contexts/shoppingContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <ShoppingContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShoppingContextProvider>
  );
}
