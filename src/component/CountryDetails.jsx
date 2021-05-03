import { List, ListItem } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Loader, MyButton } from "../style/Style";
import "../App.css";
export default function CountryDetails(props) {
  const state = useSelector((state) => state);
  const getData = useSelector((state) => state.getData);
  const history = useHistory();

  const backHandler = () => {
    state.error = null;
    history.push("/");
  };
  const render = () => {
    if (state.loading === true) {
      return <Loader />;
    } else if (state.error !== null) {
      return (
        <>
          <h2>No found country </h2>
          <MyButton onClick={backHandler}>GO BACK</MyButton>
        </>
      );
    } else {
      return (
        <div>
          <List>
            <h1>Weather Details</h1>
            <hr />
            <ListItem>
              <label>NAME:</label> <h5>{getData.name}</h5>
            </ListItem>
            <hr />
            <ListItem>
              {" "}
              <label>CAPITAL:</label> <h5>{getData.capital}</h5>
            </ListItem>
            <hr />
            <ListItem>
              {" "}
              <label>POPULATION:</label> <h5>{getData.population}</h5>
            </ListItem>
            <hr />
            <ListItem>
              <label>FLAG: </label>
              <img src={getData.flag} width="50px" alt="img" />
            </ListItem>
            <hr />
            <ListItem>
              {" "}
              <label>LATLNG:</label> <h5>{JSON.stringify(getData.latlng)}</h5>{" "}
            </ListItem>
            <hr />
          </List>
          <Link to="/capitalweather">
            <MyButton>CapitalWeather</MyButton>
          </Link>
        </div>
      );
    }
  };

  return <div>{render()}</div>;
}
