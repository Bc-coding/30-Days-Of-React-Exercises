import React, { useState, useEffect } from "react";
import styles from "../App.module.css";

import axios from "axios";

const Cat = ({ cat }) => {
  const [singleCat, setSingleCat] = useState([]);

  useEffect(() => {
    fetchSingleCat();
  }, []);

  const fetchSingleCat = async () => {
    const url = `https://api.thecatapi.com/v1/images/search?breed_id=${cat.id}`;

    try {
      const response = await axios.get(url);
      const singleCatData = await response.data;
      setSingleCat(singleCatData);
    } catch (error) {
      console.log(error);
    }
  };

  const singleCatUrl = { ...singleCat[0] };

  const urlSingleCat = singleCatUrl.url;
  return (
    <div className={styles.singleCat}>
      <div className={styles.imageCatContainer}>
        <img src={urlSingleCat} alt="cat breed" className={styles.imageCat} />
      </div>
      <div className={styles.singleCatInfo}>
        <h2>{cat.name}</h2>
        <h3>{cat.origin}</h3>
        <p>
          <span className={styles.grey}>Temperament:</span> {cat.temperament}
        </p>
        <p>
          <span className={styles.grey}>Life Span:</span> {cat.life_span} years
        </p>
        <p>
          <span className={styles.grey}>Weight:</span> {cat.weight.metric} Kg
        </p>
        <p className={styles.grey}>Description: </p>
        <p>{cat.description}</p>
      </div>
    </div>
  );
};

export default Cat;
