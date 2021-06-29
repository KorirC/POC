import "./App.scss";
import Login from "./Components/Login/login";
import React, { useState } from "react";
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from "carbon-components-react";
import { Switch, Route, Link } from "react-router-dom";
import CreatePerson from "./Components/PatientDetails/CreatePerson";
import PatientsRecords from "./Components/PatientsRecords/PatientsRecords";
import PatientInfo from "./Components/PatientInfo/PatientInfo";
import { useHistory } from "react-router-dom";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import CreatePatient from "./Components/PatientDetails/CreatePatient";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <Route path="/Encounters/:id" component={PatientInfo} />

        <ProtectedRoutes
          path="/PatientsRecords"
          component={PatientsRecords}
          isAuthenticated={isAuthenticated}
        />
        <ProtectedRoutes
          path="/PatientDetails"
          component={CreatePerson}
          isAuthenticated={isAuthenticated}
        />
        <ProtectedRoutes
          path="/CreatePatient"
          component={CreatePatient}
          isAuthenticated={isAuthenticated}
        />
      </Switch>

      <Header aria-label="Platform Name" id="header">
        <HeaderName element={Link} to="/" prefix="POC">
          [Point Of Care]
        </HeaderName>

        <HeaderGlobalBar>
          <HeaderGlobalAction
            id="logout"
            aria-label="App Switcher"
            onClick={() => {
              setIsAuthenticated(false);
              sessionStorage.clear();
              history.push("/");
            }}
          >
            Logout
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </div>
  );
}

export default App;
