import { Form, TextInput, Button } from "carbon-components-react";
import React, { useState } from "react";
import { LoginUser } from "../Auth/Auth";
import { useHistory } from "react-router-dom";
import "./login.scss";
const btoa = require("btoa");

const Login = ({setIsAuthenticated}) => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const history = useHistory();
  const HandleAuth = async (e) => {
    e.preventDefault();

    const token = btoa(`${Username}:${Password}`);
    await LoginUser(token).then((resp) => {
      if (resp.authenticated === true) {
        setIsAuthenticated(true);
        sessionStorage.setItem("user", token);
        history.push("/PatientsRecords");
      } else {
        alert("Failed");
      }
    });
  };

  return (
    <>
      <Form onSubmit={HandleAuth} data-testid="login">
        <div className="bx--grid--full-width">
          <div className="bx--row">
            <div className="bx--col"></div>
            <div className="bx--col" id="loginform">
              <h2>Login</h2>
              <hr />
              <br />

              <TextInput
                labelText="User name: "
                id="name"
                data-testid="name"
                required
                placeholder="Enter user name"
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextInput.PasswordInput
                 id="password"
                data-testid="password"
                hidePasswordLabel="Hide password"
                invalidText="A valid value is required"
                labelText="Password: "
                required
                placeholder="Enter Password"
                showPasswordLabel="Show password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <Button  size="default" kind="secondary" type="submit" data-testid="submit">
                Login
              </Button>
            </div>
            <div className="bx--col"></div>
          </div>
        </div>
      </Form>
    </>
  );
}
export default Login;
