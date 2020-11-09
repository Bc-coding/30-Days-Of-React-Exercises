import React from "react";
import UserInfo from "./components/UserInfo";
import Skills from "./components/Skills";
import DateJoining from "./components/DateJoining";

function App() {
  return (
    <div
      style={{
        width: "80%",
        margin: "50px auto",
        padding: "20px",
        backgroundColor: "white",
      }}
    >
      <UserInfo />
      <Skills />
      <DateJoining />
    </div>
  );
}

export default App;
