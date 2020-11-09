import React, { Component } from "react";

import styles from "./app.module.css";

class DAY10 extends Component {
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    // this.handleMouseUp = this.handleMouseUp.bind(this);
  }
  state = {
    firstName: " ",
    message: " ",
    key: " ",
    x: 0,
    y: 0,
    blur: "blurred",
  };

  // ======== mouse events ========== //

  handleClick = (e) => {
    // e gives an event object
    // check the value of e using console.log(e)
    this.setState({
      message: "A button is clicked!",
    });
  };

  // This event triggers during a text copy
  handleCopy = (e) => {
    this.setState({
      message: "Using 30 Days of React for commercial purpose is not allowed",
    });
  };

  handlePaste = (e) => {
    let paste = (e.clipboardData || window.clipboardData).getData("text");
    paste = paste.toUpperCase();
    this.setState({
      message: `${paste} has been pasted`,
    });
  };

  handleSelect = (e) => {
    const selection = e.target.value.substring(
      e.target.selectionStart,
      e.target.selectionEnd
    );
    this.setState({
      message: `You selected:  ${selection}`,
    });
  };

  handleDragStart = (e) => {
    e.target.style.opacity = 0.5;
  };

  // ======== key events ========== //

  handleFocus = (e) => {
    this.setState({
      message: "Input field has been focused",
    });
  };

  // Blurring happens when a mouse leave an input field
  handleBlur = (e) => {
    this.setState({
      message: `Input field has been ${this.state.blur}`,
    });
  };

  // to get keyboard key code when an input field is pressed
  // it works with inout and textarea
  handleKeyPress = (e) => {
    this.setState({
      message:
        `${e.target.value} has been pressed and the keycode is` + e.charCode,
    });
  };

  handleKeyUp = (e) => {
    this.setState({
      message: ` The key ${e.target.value} has been released`,
    });
  };

  handleKeyDown = (e) => {
    this.setState({
      message: ` The key ${e.target.value} has been pressed`,
    });
  };

  // ============ submit ============= //

  // submit
  handleSubmit = (e) => {
    e.preventDefault();
    alert("the submit button has been clicked!");
  };

  // ========= handle Change ========= //
  // to get value when an input field changes a value
  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      message: e.target.value,
    });
  };

  // // triggered whenever the mouse is down
  handleMouseDown = (e) => {
    this.setState({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
      isDrawing: true,
      message: `mouse is pressed 
      X-coordinate: ${this.state.x} 
      Y-coordinate: ${this.state.y}`,
    });
  };

  // triggered whenever the mouse moves
  handleMouseMove = (e) => {
    this.setState({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
      message: "mouse is moving",
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.world}>Welcome to the world of Events</h2>

        <h2 className={styles.message}>{this.state.message}</h2>

        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me </button>

        <div className={styles.double} onCopy={this.handleCopy}>
          Check copy right permission by copying this line of text
        </div>

        <div className={styles.div}>
          <label htmlFor=" ">Test for onKeyPress Event: </label>
          <input type="text" onKeyPress={this.handleKeyPress} />
        </div>

        <div className={styles.div}>
          <label htmlFor=" ">Test for onKeyUp Event: </label>
          <input type="text" onKeyUp={this.handleKeyUp} />
        </div>

        <div className={styles.div}>
          <label htmlFor=" ">Test for onKeyDown Event: </label>
          <input type="text" onKeyDown={this.handleKeyDown} />
        </div>

        <div className={styles.div}>
          <label htmlFor=" ">Test for onblur Event: </label>
          <input
            type="text"
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </div>

        <div className={styles.div}>
          <label htmlFor=" ">
            Copy the text here and paste into the input field:{" "}
          </label>
          <input type="text" onPaste={this.handlePaste} />
        </div>

        <div className={styles.div}>
          <label htmlFor=" ">Test for select Event: </label>
          <input
            onSelect={this.handleSelect}
            value="Try selecting some text here"
          />
        </div>

        <div>
          <p className={styles.para}>MouseMove events </p>
          <div
            onMouseDown={this.handleMouseDown}
            onMouseMove={this.handleMouseMove}
            // onMoueUp={this.handleMouseUp}
            className={styles.myPics}
          ></div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className={styles.div}>
            <label htmlFor="firstName">
              Type something in the input field:{" "}
            </label>
            <input
              name="firstName"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input className={styles.submit} type="submit" value="SUBMIT" />
          </div>
        </form>
      </div>
    );
  }
}

export default DAY10;

/// Bind This
// For methods in React, the this keyword should represent the component that owns the method.
// That is why you should use arrow functions. With arrow functions, this will always represent the object that defined the arrow function.
// class Football extends React.Component {
//   shoot = () => {
//     alert(this);
//     /*
//     The 'this' keyword refers to the component object
//     */
//   };
//   render() {
//     return <button onClick={this.shoot}>Take the shot!</button>;
//   }
// }

// In class components, the this keyword is not defined by default, so with regular functions the this keyword represents the object that called the method, which can be the global window object, a HTML button, or whatever.

// Read more about binding this in our React ES6 'What About this?' chapter.

// If you must use regular functions instead of arrow functions you have to bind this to the component instance using the bind() method:

// Make this available in the shoot function by binding it in the constructor function:

// class Football extends React.Component {
//   constructor(props) {
//     super(props);
//     this.shoot = this.shoot.bind(this);
//   }
//   shoot() {
//     alert(this);
//     /*
//     Thanks to the binding in the constructor function,
//     the 'this' keyword now refers to the component object
//     */
//   }
//   render() {
//     return <button onClick={this.shoot}>Take the shot!</button>;
//   }
// }

// ========== passing arguments
// If you want to send parameters into an event handler, you have two options:

// 1. Make an anonymous arrow function:
// Send "Goal" as a parameter to the shoot function, using arrow function:
// class Football extends React.Component {
//   shoot = (a) => {
//     alert(a);
//   }
//   render() {
//     return (
//       <button onClick={() => this.shoot("Goal")}>Take the shot!</button>
//     );
//   }
// }

// Or:
// 2. Bind the event handler to this
// Note that the first argument has to be this.
// class Football extends React.Component {
//   shoot(a) {
//     alert(a);
//   }
//   render() {
//     return (
//       <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
//     );
//   }
// }

// Note on the second example: If you send arguments without using the bind method, (this.shoot(this, "Goal") instead of this.shoot.bind(this, "Goal")), the shoot function will be executed when the page is loaded instead of waiting for the button to be clicked.
