import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header>
      <div>
        <h1 className={styles.title}>30 DAYS OF REACT</h1>
        <h2>DAY27 CHALLENGE </h2>
        <h3>27 HEXADECIMAL COLORS GENERATOR</h3>
      </div>
    </header>
  );
};

export default Header;
