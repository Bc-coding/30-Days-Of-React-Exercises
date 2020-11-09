import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  let now = new Date();
  let year = now.getFullYear();
  return (
    <footer>
      <div>
        <p>Copyright&copy;{year} 30 Days of React</p>
        <p>
          Join{" "}
          <a
            href="https://github.com/Asabeneh/30-Days-Of-React"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            30 Days of React challenge
          </a>
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://www.linkedin.com/in/asabeneh/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            Asabeneh Yetayeh
          </a>{" "}
          and Coded By{" "}
          <a
            href="https://twitter.com/BCarrie5"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            Belle Carrie
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
