import { List, ListItem } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { capitalWeather } from "../redux/Action";
import { Loader, MyButton } from "../style/Style";

export default function CapitalWeather() {
  const getData = useSelector((state) => state.getData);
  const state = useSelector((state) => state);
  const getCaptialData = useSelector((state) => state.getCaptialData);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = () => {
      const url = `http://api.weatherstack.com/current?access_key=8ca8819de637a0b63aaabfaee5267cff&query=${getData.capital}`;
      dispatch(capitalWeather(url));
    };
    fetch();
  }, [dispatch, getData.capital]);

  const backHandler = () => {
    history.push("/");
  };

  const render = () => {
    if (state.loading === true) {
      return <Loader></Loader>;
    } else {
      return (
        <>
          <List>
            <h1>capital Weather Details</h1>
            <hr />
            <ListItem>
              <label>TEMPERATURE:</label> <h5>{getCaptialData.temperature}</h5>
            </ListItem>
            <hr />
            <ListItem>
              {" "}
              <label>wind_speed:</label> <h5>{getCaptialData.wind_speed}</h5>
            </ListItem>
            <hr />
            <ListItem>
              {" "}
              <label>precip:</label> <h5>{getCaptialData.precip}</h5>
            </ListItem>
            <hr />
            <ListItem>
              <label>weather_icons: </label>
              <img src={getCaptialData.weather_icons} width="50px" alt="img" />
            </ListItem>
            <hr />
          </List>
          <MyButton onClick={backHandler}>GO BACK</MyButton>
        </>
      );
    }
  };

  return <div>{render()}</div>;
}
