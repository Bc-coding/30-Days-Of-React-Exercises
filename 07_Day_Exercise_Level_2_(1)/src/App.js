import React, { Component } from "react";
import styles from "./app.module.css";

let num = 0;
const numbers = [];

const numbersGenerator = () => {
  for (let i = 0; i < 32; i++) {
    num = i;
    numbers.push(num);
  }
  return numbers;
};

numbersGenerator();

const Numbers = ({ numbers }) => {
  const NumbersList = numbers.map((number) => {
    if (number === 0) {
      return <div style={{ backgroundColor: "#00916e" }}>{number}</div>;
    } else if (number === 1) {
      return <div style={{ backgroundColor: "#ffcf00" }}>{number}</div>;
    } else {
      let prime = true;
      function isPrime(num) {
        for (let i = 2; i < num; i++) if (num % i === 0) return false;
        return true;
      }
      if (isPrime(number) === prime) {
        return <div style={{ backgroundColor: "pink" }}>{number}</div>;
      }
      if (isPrime(number) !== prime && number % 2 === 0) {
        return <div style={{ backgroundColor: "#00916e" }}>{number}</div>;
      }
      if (isPrime(number) !== prime && number % 2 !== 0) {
        return <div style={{ backgroundColor: "#ffcf00" }}>{number}</div>;
      }
    }
  });
  return <div className={styles.container}>{NumbersList}</div>;
};

class App extends Component {
  render() {
    return (
      <section>
        <h1>30 Days of React</h1>
        <h3>Number Generator</h3>
        <Numbers numbers={numbers} />
        <p>
          evens are green, odds are yellow and prime numbers are pink. Build the
          above colors using React component.
        </p>
      </section>
    );
  }
}

export default App;
