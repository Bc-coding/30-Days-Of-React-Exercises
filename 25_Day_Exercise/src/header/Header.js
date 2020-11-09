import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header>
      <div>
        <h1 className={styles.title}>WORLD COUNTRIES DATA</h1>
        <h2>Currently, we have {props.countries.length} countries</h2>
      </div>
    </header>
  );
};

export default Header;
