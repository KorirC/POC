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
import PatientDetails from "./Components/PatientDetails/PatientDetails";
import PatientsRecords from "./Components/PatientsRecords/PatientsRecords";
import PatientInfo from "./Components/PatientInfo/PatientInfo";
import { useHistory } from "react-router-dom";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";

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
          component={PatientDetails}
          isAuthenticated={isAuthenticated}
        />
      </Switch>

      <Header aria-label="Platform Name">
        <HeaderName element={Link} to="/" prefix="POC">
          [Point Of Care]
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
