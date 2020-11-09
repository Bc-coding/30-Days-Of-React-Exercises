import React from "react";

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

for (let i = 0; i < 8; i++) {
  let color = hexColor();
  colors.push(color);
}

const hexColors = colors.map((color) => (
  <div
    style={{
      backgroundColor: `${color}`,
      margin: `10px`,
      padding: `30px`,
      borderRadius: `15px`,
      textAlign: `center`,
    }}
  >
    {color}
  </div>
));

const Colors = () => (
  <div>
    <p style={{ textAlign: "center" }}>
      {" "}
      === Refresh the page to generate 8 random colors ===
    </p>
    {hexColors}
  </div>
);
export default Colors;
