import React, { useState, useRef } from "react";
import styles from "./form.module.css";

function Form(props) {
  const [input, setInput] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addPost(input);
    setInput("");

    ref.current.textContent = "250";
  };

  const handleChange = (e) => {
    if (e.target.value !== null) {
      setInput(e.target.value);
      setButtonActive(true);
    }
    if (e.target.value === "") {
      setButtonActive(false);
    }
  };

  const countCharacters = (e) => {
    let textEntered = e.target.value;
    let counter = textEntered.length;
    console.log(counter);
    let countRemaining = 250 - counter;
    console.log(countRemaining);
    ref.current.textContent = `${countRemaining}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className={styles.formGroup}>
          <textarea
            rows="10"
            cols="90"
            placeholder="Tweet about 30 Days of
          React..."
            value={input}
            onChange={handleChange}
            onKeyUp={countCharacters}
            required
          ></textarea>
        </div>
        <p ref={ref} className={styles.other}>
          250
        </p>
      </div>
      <div>
        <button
          type="submit"
          value="Submit"
          className={styles.postButton}
          style={{ backgroundColor: buttonActive ? "#1da1f2" : null }}
        >
          Add Post
        </button>
      </div>
    </form>
  );
}

export default Form;
