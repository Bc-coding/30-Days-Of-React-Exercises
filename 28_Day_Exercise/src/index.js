import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const DATA = [
  {
    id: "post-0",
    message:
      "30 Days Of React challenge has started on 1 October and still ongoing. It was a real challenge for everyone. I learned quite a lot of concepts from this challenge",
  },
  {
    id: "post-1",
    message:
      "30 Days Of JavaScript challenge started on 1 January and ended on 30 January 2020. I didn't manage to participate in this challenge during January. I hope I will be able to do this challenge soon",
  },
  {
    id: "post-2",
    message:
      "30 Days of Python created by Asabeneh sounds really interesting too. Python is of the best references for Pythonistas, data scientists and aspiring ML. Python is one of the programming langauges I would like to learn.",
  },
  {
    id: "post-3",
    message:
      "There might be more of 30 days challenges in HTML & CSS, ReactNative, Data Analysis or MERN. I'm looking forward to them",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App messages={DATA} />
  </React.StrictMode>,
  document.getElementById("root")
);
