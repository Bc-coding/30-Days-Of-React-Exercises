import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./App.module.css";

import Header from "./header/Header";
import Cat from "./components/Cat";
import Footer from "./footer/Footer";
import ListOfCountry from "./ListOfCountry";
import ScrollArrow from "./components/ScrollArrow";

const Cats = (props) =>
  props.cats.map((cat) => <Cat key={cat.name} cat={cat} />);

const Day20 = () => {
  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);
  const [dayTitle, setDayTitle] = useState(20);
  const [dayNav, setDayNav] = useState("Day19");
  const [to, setTo] = useState("/day19");
  const [label, setLabel] = useState("Day19");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = "https://api.thecatapi.com/v1/breeds";

    try {
      const response = await axios.get(url);
      const data = await response.data;
      setData(data);
      setDataCopy(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e) => {
    console.log(e.target);
    const cats = [...dataCopy];
    let filteredCats = [];

    cats.map((cat) => {
      if (cat.origin === e.target.name) {
        filteredCats.push(cat);
      }
      return filteredCats;
    });

    setData(filteredCats);
  };

  const handleClickAll = () => {
    const catsAll = [...dataCopy];
    console.log(catsAll);

    setData(catsAll);
  };

  const catsForAll = [...dataCopy];
  const cats = [...data];

  const dayKitty =
    "https://i.pinimg.com/originals/b3/8f/bd/b38fbd6601af0dbdf1c6c926c6732811.gif";
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header
          dayTitle={dayTitle}
          dayNav={dayNav}
          catsData={catsForAll}
          dayKitty={dayKitty}
          to={to}
          label={label}
        />
        <div className={styles.buttonsWrapper}>
          <ListOfCountry
            handleClick={handleClick}
            handleClickAll={handleClickAll}
            cats={catsForAll}
          />
        </div>
        <div>
          <Cats cats={cats} />
        </div>
        <ScrollArrow />
        <Footer />
      </div>
    </div>
  );
};

export default Day20;
