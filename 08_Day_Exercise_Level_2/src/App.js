import React, { Component } from "react";

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
      date,
    } = this.props.data;
    const { changeBackground } = this.props;
    return (
      <header className={styles.header}>
        <h2>{welcome}</h2>
        <h4>
          {title} - {subtitle}
        </h4>
        <p>
          Author: {firstName} {lastName}
        </p>

        <small>{date}</small>
        <Button
          text="Change Background"
          onClick={changeBackground}
          style={buttonStyles}
        />
      </header>
    );
  }
}

// Main Component

class Main extends React.Component {
  render() {
    const { user, techs } = this.props;
    return (
      <>
        <p>Prerequisite to get started react.js:</p>
        <p>
          <TechList techs={techs} />
        </p>
        <UserCard user={user} />
      </>
    );
  }
}

// Footer componenet
class Footer extends React.Component {
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

class App extends React.Component {
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

    return (
      <div
        className={styles.container}
        style={{
          backgroundColor: this.state.backgroundColor,
          color: this.state.color,
        }}
      >
        <Header data={data} changeBackground={this.changeBackground} />
        <Main user={data.author} techs={data.techs} />
        <Footer date={date} />
      </div>
    );
  }
}

export default App;
