import React from "react";
import styles from "./app.module.css";

const tenHighestPopulation = [
  { country: "World", population: 7693165599 },
  { country: "China", population: 1377422166 },
  { country: "India", population: 1295210000 },
  { country: "USA", population: 323947000 },
  { country: "Indonesia", population: 258705000 },
  { country: "Brazil", population: 206135893 },
  { country: "Pakistan", population: 194125062 },
  { country: "Nigeria", population: 186988000 },
  { country: "Bangladesh", population: 161006790 },
  { country: "Russian Federation", population: 146599183 },
  { country: "Japan", population: 126960000 },
];

const countries = tenHighestPopulation.map((item) => {
  const numberFormatted = new Intl.NumberFormat().format(item.population);
  const world = tenHighestPopulation[0].population;
  const width = new Intl.NumberFormat("en-US", { style: "percent" }).format(
    item.population / world
  );
  return (
    <div className={styles.container}>
      <div className={styles.country}>{item.country.toUpperCase()}</div>
      <div className={styles.graph}>
        <div
          style={{
            width: width,
            height: "25px",
            backgroundColor: "aqua",
          }}
        >
          {""}
        </div>
      </div>
      <div className={styles.population}>{numberFormatted}</div>
    </div>
  );
});

const CountryList = () => {
  return <section className={styles.section}>{countries}</section>;
};

const App = () => {
  return (
    <main className={styles.main}>
      <h1>30 Days of React</h1>
      <h3>World population</h3>
      <p>Ten most populated countries</p>
      <CountryList />
    </main>
  );
};

export default App;
