import HomeScreen from "../src/screens/Home";
import styles from "./../public/styles/Home.module.css";
import Head from "next/head";
import { useReducer, useState } from "react";
import { Button } from "@mui/material";
// import Button from "../src/components/common/Button";

const counterActions = {
  inc: "INCREASE_COUNTER",
  dec: "DECREASE_COUNTER",
};

function reducer(state, action) {
  switch (action.type) {
    case counterActions.inc:
      return state + (action.payload || 1);
    case counterActions.dec:
      return state - (action.payload || 1);
    default:
      return state;
  }
}

export default function Home() {
  const [count, setCount] = useState(20);
  const [counter, dispatch] = useReducer(reducer, 10);

  console.log({
    count,
    counter,
  });

  return (
    <div>
      <Button type="button" onClick={() => setCount((prev) => prev + 1)}>
        update count : {count}
      </Button>
      <Button
        onClick={() => dispatch({ type: counterActions.inc, payload: 5 })}
      >
        update counter {counter}
      </Button>

      <Head>
        <title>shopping home page</title>
        <meta name="description" content="this is about home page" />
      </Head>
      <HomeScreen />
    </div>
  );
}
