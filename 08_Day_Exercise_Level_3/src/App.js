// STATE

// state is an object in react which let the componenet re-render when dta changes
// we do not directly change or mutate the state but we use setState() method.
import React, { Component } from "react";
import countriesData from "./data/countries";
import styles from "./app.module.css";

// User Card Component
const UserCard = ({ user: { firstName, lastName } }) => (
  <div className={styles.usercard}>
    <img
      src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Hello_kitty_character_portrait.png/200px-Hello_kitty_character_portrait.png"
      alt={firstName + lastName}
    />
  </div>
);

// button component
const Button = ({ text, onClick, style }) => (
  <butotn style={style} onClick={onClick}>
    {text}
  </butotn>
);

// CSS styles in JAvaScript object
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  marginLeft: 10,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

// Country Card
const countries = countriesData;
class CountryRandom extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    const { index, changeCountry } = this.props;
    let src = countries[index].flag;
    const handleCountry = () => {
      changeCountry();
    };

    return (
      <>
        <div className={styles.countryRandom}>
          <div>
            <img src={src} alt="country flag" className={styles.flag} />
            <p>{countries[index].name.toUpperCase()}</p>
          </div>
          <div className={styles.countryInfo}>
            <p>CAPITAL: {countries[index].capital}</p>
            <p>LANGUAGES: {countries[index].languages}</p>
            <p>
              POPULATION:{" "}
              {new Intl.NumberFormat().format(countries[index].population)}
            </p>
            <p>CURRENCY: {countries[index].currency}</p>{" "}
          </div>
        </div>
        <Button
          style={buttonStyles}
          text="change country"
          onClick={handleCountry}
        />
      </>
    );
  }
}

// TechList Componenet
class TechList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => (
      <span style={{ paddingRight: "5px" }} key={tech}>
        {tech}
      </span>
    ));
    return techsFormatted;
  }
}

// class based componenet
class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;
    const { techs, changeBackground } = this.props;
    return (
      <header className={styles.header}>
        <UserCard user={this.props.data.author} />
        <div>
          <h2>{welcome}</h2>
          <h4>
            {title} - {subtitle}
          </h4>
          <p>
            Author: {firstName} {lastName}
          </p>
          <p>Prerequisite to get started react.js:</p>
          <p>
            <TechList techs={techs} />
          </p>
          <small>{date}</small>
          <Button
            text="Change Background"
            onClick={changeBackground}
            style={buttonStyles}
          />
        </div>
      </header>
    );
  }
}

// Main Component

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      index: (() => Math.floor(Math.random() * countries.length))(),
    };
    this.changeCountry = this.changeCountry.bind(this);
  }

  changeCountry = () => {
    this.setState({
      index: (() => Math.floor(Math.random() * countries.length))(),
    });
  };

  render() {
    return (
      <main className={styles.container}>
        <h4>
          Not sure your next holiday destination? click the button below for
          some ideas!
        </h4>
        <CountryRandom
          index={this.state.index}
          changeCountry={this.changeCountry}
        />
      </main>
    );
  }
}

// Footer componenet
class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <footer style={{ margin: "30px" }}>
        <div>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

class DAY8_ONE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      backgroundColor: "white",
      color: null,
    };
  }

  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return `${month} ${date}, ${year}`;
  };

  changeBackground = () => {
    const newBackgroundColor =
      this.state.backgroundColor === "white" ? "#4D5061" : "white";
    const newColor = this.state.color === null ? "white" : null;
    this.setState({ backgroundColor: newBackgroundColor, color: newColor });
  };

  render() {
    const data = {
      welcome: "Welcome to 30 Days of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Hello",
        lastName: "Kitty",
      },
      techs: ["HTML", "CSS", "JavaScript"],
      date: "Oct 7, 2020",
    };
    const date = new Date();
    // copying the author from data object to user variable using spread operator

    return (
      <div
        className={styles.container}
        style={{
          backgroundColor: this.state.backgroundColor,
          color: this.state.color,
        }}
      >
        <Header
          data={data}
          user={data.author}
          techs={data.techs}
          changeBackground={this.changeBackground}
        />
        <Main />
        <Footer date={date} />
      </div>
    );
  }
}

export default DAY8_ONE;
