import React from "react";
import styles from "./Skills.module.css";

function Skills() {
  const skillsArr = [
    "HTML",
    "CSS",
    "JS",
    "Sass",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Mongoose",
    "Git",
  ];
  const skillsArrFormatted = skillsArr.map((skill) => <li>{skill}</li>);
  return (
    <>
      <p className={styles.para}>Skills</p>
      <ul className={styles.list}>{skillsArrFormatted}</ul>
    </>
  );
}

export default Skills;
