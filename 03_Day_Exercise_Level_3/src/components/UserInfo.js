import React from "react";
import styles from "./UserInfo.module.css";
import selfie from "../assets/kitty.jpg";
import { FaCheckCircle } from "react-icons/fa";

function UserInfo() {
  return (
    <>
      <img className={styles.selfie} src={selfie} alt="Hello Kitty" />
      <p className={styles.name}>
        Hello Kitty <FaCheckCircle style={{ color: "#4dccbd" }} />
      </p>
      <p className={styles.title}>React Developer, UK</p>
    </>
  );
}

export default UserInfo;
