import React from "react";
import styles from "./app.module.css";

function App() {
  return (
    <>
      <div className={styles.div}>
        <h1 className={styles.subscribe}>SUBSCRIBE!</h1>

        <p>Sign up with your email address to receive news and updates.</p>
        <form>
          <div>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="email" placeholder="Email" />
          </div>
          <button>Subscribe</button>
        </form>
      </div>
    </>
  );
}

export default App;
