import React, { Component } from "react";
import styles from "./app.module.css";

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

const colors = [];

for (let i = 0; i < 32; i++) {
  let color = hexColor();
  colors.push(color);
}

const hexColors = colors.map((color) => (
  <div
    style={{
      backgroundColor: `${color}`,
      padding: `30px`,
      borderRadius: `15px`,
      textAlign: `center`,
      color: `white`,
    }}
  >
    {color}
  </div>
));

const ColorGrid = () => {
  return <div className={styles.wrapper}>{hexColors}</div>;
};

class App extends Component {
  render() {
    return (
      <section>
        <h1>30 Days of React</h1>
        <h3>Random Hexadecimal Colors in Grid</h3>
        <ColorGrid />
      </section>
    );
  }
}

export default App;
