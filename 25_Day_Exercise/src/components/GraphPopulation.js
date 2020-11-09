import React from "react";
import styles from "./graphPopulation.module.css";

const CountryList = (props) => {
  const countries = props.countries;
  const sortedCountries = countries.sort((a, b) => {
    if (a.population < b.population) {
      return 1;
    }
    if (a.population > b.population) {
      return -1;
    }
    return 0;
  });

  const newCopy = [...sortedCountries];

  const newCopySliced = newCopy.slice(0, 10);

  const populations = sortedCountries.reduce((total, amount) => {
    total.push(amount.population);
    return total;
  }, []);

  const worldPopulation = populations.reduce(
    (total, amount) => total + amount,
    0
  );

  const worldPopulationFormatted = new Intl.NumberFormat().format(
    worldPopulation
  );

  const tenCountries = newCopySliced.map((country) => {
    const numberFormatted = new Intl.NumberFormat().format(country.population);
    const width = new Intl.NumberFormat("en-US", { style: "percent" }).format(
      country.population / worldPopulation
    );
    return (
      <div key={country.name} class={styles.countryGrid}>
        <div>{country.name}</div>
        <div
          style={{
            width: width,
            height: "25px",
            backgroundColor: "aqua",
            paddingRight: "10px",
          }}
        >
          {""}
        </div>
        <div>{numberFormatted}</div>
      </div>
    );
  });

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.countryGrid}>
        <div>World</div>
        <div
          style={{
            width: "100%",
            height: "25px",
            backgroundColor: "aqua",
            paddingRight: "10px",
          }}
        >
          {""}
        </div>
        <div>{worldPopulationFormatted}</div>
      </div>
      {tenCountries}
    </div>
  );
};

const GraphPopulation = (props) => {
  return (
    <section
      className={styles.main}
      style={{ display: props.show ? "block" : "none" }}
    >
      <h3>10 Most populated countries in the world</h3>
      <CountryList countries={props.countries} />
    </section>
  );
};

export default GraphPopulation;
