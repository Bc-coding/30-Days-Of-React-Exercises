import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styles from "../App.module.css";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 900) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 900) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <FaArrowCircleUp
      className={styles.arrow}
      onClick={scrollTop}
      style={{ display: showScroll ? "block" : "none" }}
    />
  );
};

export default ScrollArrow;
