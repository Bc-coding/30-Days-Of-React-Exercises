import React from "react";
import styles from "../App.module.css";
import Navbar from "../nav/Nav";

const Header = ({ catsData, dayTitle, dayNav, dayKitty, to, label }) => {
  const cats = catsData;

  const weight = () => {
    let catsWeight = [];

    cats.map((cat) => {
      const eachWeightArr = cat.weight.metric
        .split(" - ")
        .map((item) => parseInt(item, 10));

      const eachWeightAvg = eachWeightArr.reduce((acc, cur) => (acc + cur) / 2);
      catsWeight.push(eachWeightAvg);

      return catsWeight;
    });

    const totalWeight = catsWeight.reduce((acc, cur) => acc + cur, 0);

    const averageWeight = (totalWeight / cats.length).toFixed(2);

    return averageWeight;
  };

  const lifeSpan = () => {
    let catsLifeSpan = [];

    cats.map((cat) => {
      const eachLifeSpanArr = cat.life_span
        .split(" - ")
        .map((item) => parseInt(item, 10));

      const eachLifeSpanAvg = eachLifeSpanArr.reduce(
        (acc, cur) => (acc + cur) / 2
      );

      catsLifeSpan.push(eachLifeSpanAvg);
      return catsLifeSpan;
    });

    const totalLifeSpan = catsLifeSpan.reduce((acc, cur) => acc + cur, 0);
    const averageLifeSpan = (totalLifeSpan / cats.length).toFixed(2);
    return averageLifeSpan;
  };

  return (
    <div className={styles.intro}>
      <img src={dayKitty} alt="Hello Kitty" />
      <div className={styles.introText}>
        <h1 className={styles.title}>30 Days Of React - Day {dayTitle}</h1>
        <h1>Welcome to Cats Paradise !</h1>
        <Navbar dayNav={dayNav} to={to} label={label} />
        <h2>There are {catsData.length} cat breeds</h2>
        <h3>
          On average a cat can weight about{" "}
          <span className={styles.span}>{weight(cats)}</span> kg and live{" "}
          <span className={styles.span}>{lifeSpan(cats)}</span> years
        </h3>
      </div>
    </div>
  );
};

export default Header;
