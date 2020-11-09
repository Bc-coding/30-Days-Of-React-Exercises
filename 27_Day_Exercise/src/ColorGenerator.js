import React, { useState, useRef } from "react";
import styles from "./ColorGenerator.module.css";
import { FaRegClipboard } from "react-icons/fa";

const ColorItem = (props) => {
  const colors = props.colors;

  let hexcodeRefs = useRef([]);
  hexcodeRefs.current = new Array(colors.length);

  let copyRefs = useRef([]);
  copyRefs.current = new Array(colors.length);

  const handleClickCopy = (e) => {
    const index = parseInt(e.currentTarget.dataset.index, 10);
    if (index) {
      hexcodeRefs.current[index].focus();
      hexcodeRefs.current[index].select();
      document.execCommand("copy");

      copyRefs.current[index].textContent = "copied";
    }
    if (!index) {
      console.log("no index");
      return;
    }
  };

  const enter = (e) => {
    const index = parseInt(e.target.dataset.index, 10);

    if (index) {
      copyRefs.current[index].style.display = "block";
    }
    if (!index) {
      console.log("no index");
      return;
    }
  };

  const leave = (e) => {
    const index = parseInt(e.target.dataset.index, 10);

    if (index) {
      copyRefs.current[index].style.display = "none";
      copyRefs.current[index].textContent = "copy";
      console.log("leave");
    }
    if (!index) {
      console.log("no index");
      return;
    }
  };

  return colors.map((color, i) => (
    <div
      key={color}
      className={styles.colorWrapper}
      style={{ backgroundColor: color }}
    >
      <input
        type="text"
        readOnly
        ref={(color) => (hexcodeRefs.current[i] = color)}
        value={color}
        className={styles.inputHexcode}
      />

      <button
        data-index={i}
        className={styles.buttonClipboard}
        onClick={handleClickCopy}
        onMouseOverCapture={enter}
        onMouseLeave={leave}
      >
        <FaRegClipboard
          data-index={i}
          className={styles.faRegClipboard}
          onClick={handleClickCopy}
        />
      </button>

      <div
        style={{ display: "none" }}
        ref={(color) => (copyRefs.current[i] = color)}
        className={styles.textCopy}
      >
        copy
      </div>
    </div>
  ));
};

const HexColors = (props) => {
  const colors = props.colors;

  return (
    <div className={styles.grid}>
      <ColorItem colors={colors} />
    </div>
  );
};

const Colors = () => {
  // Hexadecimal color generator
  const hexColor = () => {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return "#" + color;
  };

  let colors27 = [];

  const randomColors27 = () => {
    for (let i = 0; i < 27; i++) {
      let color = hexColor();
      colors27.push(color);
    }
    return colors27;
  };

  randomColors27();

  const [colors, setColors] = useState(colors27);

  const handleClickGenerate = () => {
    colors27 = [];
    const value = randomColors27();

    setColors(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.generator}>
        <input type="text" />
        <button onClick={handleClickGenerate}>GENERATE</button>
      </div>

      <HexColors colors={colors} />
    </div>
  );
};
export default Colors;
