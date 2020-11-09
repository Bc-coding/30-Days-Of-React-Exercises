import React from "react";

import styles from "./displayCountry.module.css";

const Country = ({
  country: { name, capital, flag, languages, population, currencies },
}) => {
  const formattedCapital =
    capital.length > 0 ? (
      <>
        <span>Capital: </span>
        {capital}{" "}
      </>
    ) : (
      ""
    );

  const formattedLanguage = languages.length > 1 ? `Languages: ` : `Language: `;

  return (
    <div className={styles.countryWrapper}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={flag} alt={name} />
      </div>
      <h3>{name.toUpperCase()}</h3>
      <div className={styles.countryInfo}>
        <p>{formattedCapital}</p>
        <p>
          <span>{formattedLanguage}</span>
          {languages.map((language) => language.name).join(", ")}
        </p>
        <p>
          <span>Population: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span>Currency: </span>
          {currencies[0].name}
        </p>
      </div>
    </div>
  );
};

const Countries = (props) => {
  return (
    <div className={styles.countryDisplay}>
      <div className={styles.grid}>
        {props.countries.map((country) => (
          <Country country={country} key={country.name} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
