import React from "react";

import styles from "./App.module.css";

const ListOfCountry = (props) => {
  const numOfCountries = () => {
    const cats = [...props.cats];
    const filteredOrigin = [];
    const originArr = cats.map((cat) => cat.origin).sort();

    originArr.map((item) => {
      if (!filteredOrigin.includes(item)) {
        filteredOrigin.push(item);
      }
      return filteredOrigin;
    });

    let counts = {};

    for (let i = 0; i < originArr.length; i++) {
      if (counts[originArr[i]]) {
        counts[originArr[i]] += 1;
      } else {
        counts[originArr[i]] = 1;
      }
    }

    const entries = Object.entries(counts);

    const entriesSorted = entries.sort((a, b) => {
      if (a[1] < b[1]) {
        return -1;
      }
      if (a[1] > b[1]) {
        return 1;
      }
      return 0;
    });

    return (
      <>
        {entriesSorted.map((entry) => {
          return (
            <button
              className={styles.button}
              key={entry[0]}
              onClick={props.handleClick}
              name={entry[0]}
            >
              {entry[0]} ({entry[1]})
            </button>
          );
        })}
      </>
    );
  };

  return (
    <>
      {numOfCountries()}
      <button className={styles.button} onClick={props.handleClickAll}>
        All Countries{" "}
      </button>
    </>
  );
};

export default ListOfCountry;
