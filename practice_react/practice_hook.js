import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = (initialVaule, validator) => {
  const [value, setValue] = useState(initialVaule);
  const onChange = (e) => {
    const {
      target: { value }
    } = e;
    let willUpdate = true;
    if(typeof validator === "function") {
      willUpdate = validator(value)
    }
    if(willUpdate){
      setValue(value);
    }
  };
  return { value, onChange };
}

const App = () => {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr. ", maxLen)
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name}/>
    </div>
  )
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
