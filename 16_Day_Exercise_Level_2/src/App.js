import React, { Component } from "react";

const Input = ({ type, id, style }) => {
  return <input type={type} id={id} style={style} />;
};

const inputWithType = (CompParams, name = "default") => {
  const inputs = [
    {
      name: "default",
      type: "text",
      id: "default",
    },
    {
      name: "button",
      type: "button",
      id: "button",
    },
    {
      name: "Check if today's weather is sunny",
      type: "checkbox",
      id: "checkbox",
    },
    {
      name: "favorite color",
      type: "color",
      id: "color",
    },
    {
      name: "date",
      type: "date",
      id: "date",
    },
    {
      name: "email",
      type: "email",
      id: "email",
    },
    {
      name: "upload file",
      type: "file",
      id: "file",
    },
    {
      name: "hidden",
      type: "hidden",
      id: "hidden",
    },
    {
      name: "image",
      type: "image",
      id: "image",
    },
    {
      name: "month",
      type: "month",
      id: "month",
    },
    {
      name: "number",
      type: "number",
      id: "number",
    },
    {
      name: "password",
      type: "password",
      id: "password",
    },
    {
      name: "radio",
      type: "radio",
      id: "radio",
    },
    {
      name: "happiness",
      type: "range",
      id: "happiness",
    },
    {
      name: "reset",
      type: "reset",
      id: "reset",
    },
    {
      name: "search",
      type: "search",
      id: "search",
    },
    {
      name: "submit",
      type: "submit",
      id: "submit",
    },
    {
      name: "phone",
      type: "tel",
      id: "tel",
    },
    {
      name: "time",
      type: "time",
      id: "time",
    },
    {
      name: "website",
      type: "url",
      id: "url",
    },
    {
      name: "name",
      type: "text",
      id: "name",
    },
  ];

  const inputStyles = {
    backgroundColor: "aqua",
    padding: "10px 15px",
    border: "none",
    borderRadius: 3,
    margin: 3,
    cursor: "pointer",
    fontSize: "1rem",
    marginLeft: "10px",
    marginBottom: "10px",
  };

  const { type, id } = inputs.find((input) => input.name === name);

  return (props) => {
    return (
      <>
        <label
          htmlFor={id}
          style={{ margin: "10px", textTransform: "capitalize" }}
        >
          {name}
        </label>
        <CompParams
          {...props}
          type={type}
          name={name}
          id={id}
          style={inputStyles}
        />
        <br />
      </>
    );
  };
};

const InputName = inputWithType(Input, "name");
const InputTel = inputWithType(Input, "phone");
const InputDate = inputWithType(Input, "date");
const InputEmail = inputWithType(Input, "email");
const InputSite = inputWithType(Input, "website");
const InputColor = inputWithType(Input, "favorite color");
const InputFile = inputWithType(Input, "upload file");
const InputSearch = inputWithType(Input, "search");
const InputHappiness = inputWithType(Input, "happiness");
const InputCheckbox = inputWithType(Input, "Check if today's weather is sunny");

class DAY16 extends Component {
  render() {
    return (
      <form
        style={{ border: "1px solid black", margin: "20px", padding: "20px" }}
      >
        <InputName />
        <InputTel />
        <InputDate />
        <InputEmail />
        <InputSite />
        <InputColor />
        <InputFile />
        <InputSearch />
        <InputCheckbox />
        <InputHappiness />
      </form>
    );
  }
}

export default DAY16;
