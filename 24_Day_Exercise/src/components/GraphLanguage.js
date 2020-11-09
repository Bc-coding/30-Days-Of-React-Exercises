import React from "react";
import styles from "./graphLanguage.module.css";

const CountryList = (props) => {
  const countries = [...props.countries];

  const languagesExtracted = countries.map((item) => item.languages);

  const languagesDataArr = languagesExtracted.reduce(
    (total, current) => total.concat(current),
    []
  );

  const languageArr = languagesDataArr.map((item) => item.name);

  let counts = {};

  for (let i = 0; i < languageArr.length; i++) {
    if (counts[languageArr[i]]) {
      counts[languageArr[i]] += 1;
    } else {
      counts[languageArr[i]] = 1;
    }
  }

  for (let prop in counts) {
    if (counts[prop] >= 2) {
      console.log(prop + " counted" + counts[prop] + " times.");
    }
  }

  const entries = Object.entries(counts);

  const entriesSorted = entries.sort((a, b) => {
    if (a[1] < b[1]) {
      return 1;
    }
    if (a[1] > b[1]) {
      return -1;
    }
    return 0;
  });

  console.log(entriesSorted);

  const tenLanguages = entriesSorted.slice(0, 10);
  console.log(tenLanguages);

  const graphTenLanguages = tenLanguages.map((item) => {
    return (
      <div className={styles.countryGrid}>
        <div>{item[0]}</div>
        <div
          style={{
            width: `${item[1]}%`,
            height: "25px",
            backgroundColor: "#2afc98",
          }}
        ></div>
        <div>{item[1]}</div>
      </div>
    );
  });

  return <div className={styles.graphWrapper}>{graphTenLanguages}</div>;
};

const GraphLanguage = (props) => {
  return (
    <section
      className={styles.main}
      style={{ display: props.show ? "block" : "none" }}
    >
      <h3>10 Most spoken languages in the world</h3>
      <CountryList countries={props.countries} />
    </section>
  );
};

export default GraphLanguage;
