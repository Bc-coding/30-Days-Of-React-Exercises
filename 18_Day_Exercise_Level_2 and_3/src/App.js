import React, { Component } from "react";
import styles from "./app.module.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.numOfCountries = this.numOfCountries.bind(this);
  }

  state = {
    data: [],
    filteredOrigin: [],
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = async () => {
    const url = "https://api.thecatapi.com/v1/breeds";

    try {
      const response = await axios.get(url);
      const data = await response.data;
      this.setState({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  numOfCountries = () => {
    const cats = [...this.state.data];
    const filteredOrigin = [];
    const originArr = cats.map((cat) => cat.origin).sort();

    originArr.map((item) => {
      if (!filteredOrigin.includes(item)) {
        filteredOrigin.push(item);
      }
      return filteredOrigin;
    });

    return filteredOrigin;
  };

  countDuplicate = () => {
    const cats = [...this.state.data];
    const a = cats.map((cat) => cat.origin).sort();
    let counts = {};
    for (let i = 0; i < a.length; i++) {
      if (counts[a[i]]) {
        counts[a[i]] += 1;
      } else {
        counts[a[i]] = 1;
      }
    }
    for (let prop in counts) {
      if (counts[prop] >= 2) {
        console.log(prop + " counted: " + counts[prop] + "times.");
      }
    }

    const entries = Object.entries(counts);
    console.log(entries);

    const entriesSorted = entries.sort((a, b) => {
      if (a[1] < b[1]) {
        return -1;
      }
      if (a[1] > b[1]) {
        return 1;
      }
      return 0;
    });

    const entriesInTable = entriesSorted.map((item) => (
      <tr key={item[0]}>
        <td>{item[0]}</td>
        <td className={styles.numberOfBreeds}>{item[1]}</td>
      </tr>
    ));

    const countryHighest = { ...entriesSorted[entriesSorted.length - 1] };

    return (
      <>
        <p>
          Among these countries, {countryHighest[0]} has the highest number of
          cat breeds.
        </p>
        <table style={{ border: "1px solid black" }}>
          <thead>
            <tr>
              <th>Country</th>
              <th>Number of breeds</th>
            </tr>
          </thead>
          <tbody>{entriesInTable}</tbody>
        </table>
      </>
    );
  };

  render() {
    const cats = this.state.data;

    const weight = () => {
      let catsWeight = [];

      cats.map((cat) => {
        const eachWeightArr = cat.weight.metric
          .split(" - ")
          .map((item) => parseInt(item, 10));

        const eachWeightAvg = eachWeightArr.reduce(
          (acc, cur) => (acc + cur) / 2
        );
        catsWeight.push(eachWeightAvg);

        return catsWeight;
      });

      const totalWeight = catsWeight.reduce((acc, cur) => acc + cur, 0);

      const averageWeight = (totalWeight / cats.length).toFixed(2);

      return averageWeight;
    };

    const lifeSpan = () => {
      let catsLifeSpan = [];

      cats.map((cat) => {
        const eachLifeSpanArr = cat.life_span
          .split(" - ")
          .map((item) => parseInt(item, 10));

        const eachLifeSpanAvg = eachLifeSpanArr.reduce(
          (acc, cur) => (acc + cur) / 2
        );

        catsLifeSpan.push(eachLifeSpanAvg);
        return catsLifeSpan;
      });

      const totalLifeSpan = catsLifeSpan.reduce((acc, cur) => acc + cur, 0);
      const averageLifeSpan = (totalLifeSpan / cats.length).toFixed(2);
      return averageLifeSpan;
    };

    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.intro}>
            <img
              src="https://assets.teenvogue.com/photos/558304b0fb1995762be29ce7/master/w_400%2Cc_limit/entertainment-2014-10-hello-kitty-01.jpg"
              alt="Hello Kitty"
            />
            <div>
              <h2>30 Days Of React - Day 18</h2>
              <h2 className={styles.typeWriter}>
                React Component Life Cycle - Calling API
              </h2>
            </div>
          </div>

          <div className={styles.catsParadise}>
            <h2>Cats Paradise</h2>
            <h3>There are {this.state.data.length} cat breeds</h3>
            <p>
              On average a cat can weight about{" "}
              <span className={styles.span}>{weight()}</span> kg and live{" "}
              <span className={styles.span}>{lifeSpan()}</span> years
            </p>

            <p>
              There are <span> {this.numOfCountries().length}</span> countries
              in total that have cat breeds, which are{" "}
              <span style={{ color: "white" }}>
                {this.numOfCountries().join(", ")}
              </span>
              .
            </p>

            {this.countDuplicate()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
