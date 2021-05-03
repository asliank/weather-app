import * as actions from "./ActionType";
import { GET_API } from "../service/ApiService";

export const country = (url) => {
  return async (dispatch) => {
    dispatch({ type: actions.GET_REQUEST });
    try {
      const res = await GET_API(url);
      const data = res.data;
      const { name, capital, flag, latlng, population } = data[0];
      dispatch({
        type: actions.GET_SUCCESS,
        payload: { name, capital, flag, latlng, population },
      });
    } catch (e) {
      dispatch({ type: actions.GET_FAILURE, error: e });
    }
  };
};

export const capitalWeather = (url) => {
  return async (dispatch) => {
    dispatch({ type: actions.GET_CW_REQUEST });

    try {
      const response = await GET_API(url);
      const data = response.data;
      const temperature = data.current.temperature;
      const weather_icons = data.current.weather_icons[0];
      const wind_speed = data.current.wind_speed;
      const precip = data.current.precip;
      const obj = { temperature, weather_icons, wind_speed, precip };

      dispatch({
        type: actions.GET_CW_SUCCESS,
        payload: obj,
      });
    } catch (error) {
      dispatch({ type: actions.GET_CW_FAILURE, error: error });
    }
  };
};
