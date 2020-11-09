import React, { useState, useEffect } from "react";

import kitty from "./assets/kitty.jpg";
import morning from "./assets/morning.jpg";
import noon from "./assets/noon.jpg";
import evening from "./assets/evening.jpg";
import night from "./assets/night.jpg";

import styles from "./app.module.css";

// User Card Component
const UserCard = ({ user: { firstName, lastName } }) => (
  <div className={styles.usercard}>
    <img
      src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Hello_kitty_character_portrait.png/200px-Hello_kitty_character_portrait.png"
      alt={firstName + lastName}
      className={styles.img}
    />
  </div>
);

// TechList Componenet
class TechList extends React.Component {
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
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
    } = this.props.data;
    const { techs } = this.props;
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
        </div>
      </header>
    );
  }
}

// Main Component

const Main = ({ showDate, now }) => {
  const [currentTime, setCurrentTime] = useState(showDate(now));

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(showDate(new Date()));
    }, 1000);
  });
  let displaySrc = "";
  const backgroundSrc = () => {
    let timeforImg = new Date().getHours();

    switch (true) {
      case timeforImg >= 0 && timeforImg < 6:
        displaySrc = night;
        break;
      case timeforImg >= 6 && timeforImg < 12:
        displaySrc = morning;
        break;
      case timeforImg >= 12 && timeforImg < 18:
        displaySrc = noon;
        break;
      case timeforImg >= 18 && timeforImg < 21:
        displaySrc = evening;
        break;
      case timeforImg >= 21 && timeforImg < 25:
        displaySrc = night;
        break;
      default:
        displaySrc = kitty;
    }
    return displaySrc;
  };

  return (
    <main className={styles.container}>
      <h4>
        Dynamically changing background image according to the time of the day
      </h4>
      <h4>
        The current time in UK :{" "}
        <span style={{ color: "#44BBA4" }}>{currentTime}</span>
      </h4>
      <div>
        <img src={backgroundSrc()} alt="background" />
      </div>
    </main>
  );
};

// Footer componenet
class Footer extends React.Component {
  render() {
    return (
      <footer style={{ margin: "30px" }}>
        <div>
          <p>Copyright {this.props.year}</p>
        </div>
      </footer>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      backgroundColor: "white",
      color: null,
    };
    this.showDate = this.showDate.bind(this);
  }

  showDate = (time) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
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
    const day = days[time.getDay()];
    const hour = time.getHours();
    const mins = time.getMinutes();
    const sec = time.getSeconds();
    return `${day}, ${date} ${month} ${year} - ${hour} : ${mins} : ${sec}`;
  };

  changeBackground = () => {
    const newBackgroundColor =
      this.state.backgroundColor === "white" ? "#4D5061" : "white";
    const newColor = this.state.color === null ? "white" : null;
    this.setState({ backgroundColor: newBackgroundColor, color: newColor });
  };

  render() {
    const now = new Date();

    const data = {
      welcome: "Welcome to 30 Days of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Hello",
        lastName: "Kitty",
      },
      techs: ["HTML", "CSS", "JavaScript"],
    };

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
        <Main now={now} showDate={this.showDate} />
        <Footer year={now.getFullYear()} />
      </div>
    );
  }
}

export default App;
