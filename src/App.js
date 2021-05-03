import "./App.css";
import Home from "./component/Home";
import CapitalWeather from "./component/CapitalWeather";
import CountryDetails from "./component/CountryDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/countrydetails" component={CountryDetails} />
          <Route exact path="/capitalweather" component={CapitalWeather} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
