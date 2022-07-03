import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import axios from "axios";
import HotProduct from "./HotProducts";
import ContactForm from "./ContactForm/index";

function HomeScreen() {
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    axios.get("/api/home").then((res) => {
      setHomeData(res.data);
    });
  }, []);

  return (
    <div>
      <Slider homeData={homeData} />
      <HotProduct homeData={homeData} />
      <ContactForm />
    </div>
  );
}

export default HomeScreen;
