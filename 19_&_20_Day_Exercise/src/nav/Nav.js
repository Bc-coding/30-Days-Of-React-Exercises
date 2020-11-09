import React from "react";
import styles from "../App.module.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <p>
        <Link to={props.to} className={styles.dayLink}>
          {props.label} &gt;&gt;
        </Link>

        <img
          alt="an animated cat"
          className={styles.gif}
          src="https://pic.funnygifsbox.com/uploads/2019/06/funnygifsbox.com-2019-06-24-13-13-08-67-d9n.gif"
        />
      </p>
    </>
  );
};

export default Navbar;
