import React, { useState, useEffect } from "react";
import { FaChartBar } from "react-icons/fa";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import ScrollArrow from "./components/ScrollArrow";
import DisplayCountry from "./components/DisplayCountry";
import GraphPopulation from "./components/GraphPopulation";
import GraphLanguage from "./components/GraphLanguage";

import styles from "./App.module.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [dataMatched, setDataMatched] = useState([]);
  const [search, setSearch] = useState("");
  const [dataForGraph, setDataForGraph] = useState([]);
  const [showPopulation, setShowPopulation] = useState(true);
  const [showLanguage, setShowLanguage] = useState(false);

  useEffect(() => {
    const dataAxios = async () => {
      const url = "https://restcountries.eu/rest/v2/all";

      try {
        const response = await axios.get(url);
        const data = await response.data;
        setData(data);
        setDataMatched([...data]);
        let obj1 = JSON.parse(JSON.stringify(data));
        setDataForGraph(obj1);
      } catch (error) {
        console.log(error);
      }
    };

    dataAxios();
  }, []);

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

    let countriesMatched = data.filter(searchCountry);
    setDataMatched(countriesMatched);
  };

  const handleClickPopulation = () => {
    setShowPopulation(true);
    setShowLanguage(false);
  };

  const handleClickLanguage = () => {
    setShowLanguage(true);
    setShowPopulation(false);
  };

  return (
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

      <DisplayCountry countries={dataMatched} />

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
