import "./../public/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../src/components/Layout";
import ShoppingContextProvider from "../src/contexts/shoppingContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ShoppingContextProvider>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </ShoppingContextProvider>
  );
}
