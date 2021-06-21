import "./App.scss";
import Login from "./Components/Login/login";
import React from "react";
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from "carbon-components-react";
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PatientDetails from "./Components/PatientDetails/PatientDetails";
import PatientsRecords from "./Components/PatientsRecords/PatientsRecords";
import PatientInfo from "./Components/PatientInfo/PatientInfo";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  // const user = sessionStorage.getItem("user");

  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Logout"></Route>
        <Route exact path="/PatientDetails" component={PatientDetails} />
        <Route exact path="/PatientsRecords" component={PatientsRecords} />
        <Route path="/Encounters/:id" component={PatientInfo} />
      </Switch>
      </Router>
      <Header aria-label="Platform Name">
        <HeaderName element={Link} to="/" prefix="POC">
          [Point Of Care]
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="App Switcher"
            onClick={() => {
              sessionStorage.clear();
              history.push("/");
            }}
          >
            <i className="fa fa-sign-out" aria-hidden="true">Logout</i>
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </div>
  );
}

export default App;
