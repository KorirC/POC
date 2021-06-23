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
        <Route path="/CreatePatient" component={CreatePatient} />
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
      </Switch>

      <Header aria-label="Platform Name">
        <HeaderName element={Link} to="/" prefix="POC">
          [Point Of Care]
        </HeaderName>
        <HeaderName element={Link} to="/CreatePatient" prefix="POC">
          [Create Patient]
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="App Switcher"
            onClick={() => {
              setIsAuthenticated(false);
              sessionStorage.clear();
              history.push("/");
            }}
          >
            <Link>Logout</Link>
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    </div>
  );
}

export default App;
