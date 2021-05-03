import React, { useState } from "react";
import { Input } from "@material-ui/core";
import { MyButton } from "../style/Style";
import { useHistory } from "react-router-dom";
import { country } from "../redux/Action";
import { useDispatch } from "react-redux";
import "../App.css";
export default function Home() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const inputHandler = (evt) => {
    const temp = evt.target.value;
    setInput(temp);
  };
  const submitHandler = () => {
    const url = `https://restcountries.eu/rest/v2/name/${input}`;
    dispatch(country(url));

    history.push("/countrydetails");
  };
  return (
    <div className="App">
      <Input
        type="string"
        placeholder="Enter country"
        color="primary"
        onChange={inputHandler}
      />

      <MyButton
        onClick={submitHandler}
        disabled={input.length === 0 ? true : false}
      >
        Submit
      </MyButton>
    </div>
  );
}
