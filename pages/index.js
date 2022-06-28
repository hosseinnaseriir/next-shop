import HomeScreen from "../src/screens/Home";
import styles from "./../public/styles/Home.module.css";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>shopping home page</title>
        <meta name="description" content="this is about home page" />
      </Head>
      <HomeScreen />
    </div>
  );
}
