import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./App.module.css";

import Header from "./header/Header";
import Cat from "./components/Cat";
import Footer from "./footer/Footer";
import ScrollArrow from "./components/ScrollArrow";

const Day19 = () => {
  const [data, setData] = useState([]);
  const [dayTitle, setDayTitle] = useState(19);
  const [dayNav, setDayNav] = useState("day20");
  const [to, setTo] = useState("/day20");
  const [label, setLabel] = useState("Day20");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = "https://api.thecatapi.com/v1/breeds";

    try {
      const response = await axios.get(url);
      const data = await response.data;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const cats = data;

  const dayKitty =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcms.qz.com%2Fwp-content%2Fuploads%2F2014%2F09%2Fhk.png%3Fw%3D350%26h%3D395%26crop%3D1%26strip%3Dall%26quality%3D75&f=1&nofb=1";

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header
          dayTitle={dayTitle}
          dayNav={dayNav}
          catsData={cats}
          dayKitty={dayKitty}
          to={to}
          label={label}
        />
        <div>
          {cats.map((cat) => (
            <Cat key={cat.name} cat={cat} />
          ))}
        </div>
        <ScrollArrow />
        <Footer />
      </div>
    </div>
  );
};

export default Day19;
