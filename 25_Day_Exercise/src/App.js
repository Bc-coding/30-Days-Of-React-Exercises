import React, { useState } from "react";
import useFetch from "./useFetch";
import { FaChartBar } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import ScrollArrow from "./components/ScrollArrow";
import DisplayCountry from "./components/DisplayCountry";
import GraphPopulation from "./components/GraphPopulation";
import GraphLanguage from "./components/GraphLanguage";

import styles from "./App.module.css";

function App() {
  const url = "https://restcountries.eu/rest/v2/all";
  const { data, dataForCountry, loading } = useFetch(url);

  /* ==========  making a copy =============== */
  const dataFetchedCopy = JSON.parse(JSON.stringify(data));

  const [dataMatched, setDataMatched] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const [search, setSearch] = useState("");

  /* ========== making a copy of data for graphs =========== */
  const dataForGraph = JSON.parse(JSON.stringify(data));
  const [showPopulation, setShowPopulation] = useState(true);
  const [showLanguage, setShowLanguage] = useState(false);

  /* ========== handleEvent functions =========== */

  const handleChange = (e) => {
    let value = e.target.value.toLowerCase();
    setSearch(value);

    function searchCountry(country) {
      if (country.name.toLowerCase().includes(value)) return country;
      if (country.capital.toLowerCase().includes(value)) return country;

      for (let i = 0; i < country.languages.length; i++) {
        if (country.languages[i].name.toLowerCase().includes(value))
          return country;
      }
    }

    let countriesMatched = dataFetchedCopy.filter(searchCountry);

    setDataMatched(countriesMatched);
    setIsFiltered(true);
  };

  const handleClickPopulation = () => {
    setShowPopulation(true);
    setShowLanguage(false);
  };

  const handleClickLanguage = () => {
    setShowLanguage(true);
    setShowPopulation(false);
  };

  return loading ? (
    <div className={styles.loading}>
      <VscLoading />
    </div>
  ) : (
    <div className={styles.App}>
      <Header countries={data} />
      <div className={styles.inputWrapper}>
        <input
          type="search"
          name="search"
          value={search}
          aria-label="Search through site content"
          onChange={handleChange}
          placeholder="Search countries by name, capital or languages"
          className={styles.searchBox}
        />
        <a href="#graph" className={styles.chartLink}>
          <FaChartBar className={styles.chartBar} />
        </a>
      </div>

      <DisplayCountry
        countries={dataForCountry}
        dataMatched={dataMatched}
        isFiltered={isFiltered}
      />

      <section id="graph" className={styles.sectionGraph}>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.button}
            name="population"
            onClick={handleClickPopulation}
          >
            POPULATION
          </button>
          <button
            className={styles.button}
            name="languages"
            onClick={handleClickLanguage}
          >
            LANGUAGES
          </button>
        </div>

        <GraphPopulation countries={dataForGraph} show={showPopulation} />
        <GraphLanguage countries={dataForGraph} show={showLanguage} />
      </section>

      <ScrollArrow />
      <Footer />
    </div>
  );
}

export default App;
