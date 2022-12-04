import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerLogo from "../img/istockphoto-1321277096-612x612 1.png";
import axios from "axios";
import "./Login.css";
import { validateEmail } from "../util/emailCheck";
import Loader from "../Loader/Loader";

const Login = () => {
  const navigate = useNavigate();
  const [email, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [spenar, setSpenar] = useState(false);
  // const token = localStorage.getItem("auth");
  // if (token) {
  //   setSpenar(true);
  // } else {
  //   setSpenar(false);
  // }

  const loginSubmit = async (e) => {
    e.preventDefault();
    setSpenar(!spenar);
    try {
      if (validateEmail(email)) {
        const { data } = await axios.post(`https://test.nexisltd.com/login`, {
          email,
          password,
        });
        localStorage.setItem("auth", data.access_token);
        navigate("/allUser");
      } else {
        setErrorMessage("Enter valid email.");
      }
    } catch (error) {
      console.log("error", error);
      setErrorMessage(error.response.data.error);
    }
  };
  return (
    <Fragment>
      {spenar ? (
        <Loader />
      ) : (
        <div className="registerForm">
          <div>
            <img src={registerLogo} alt="" />
          </div>
          <div>
            <h4>Sign In </h4>
            <form onSubmit={loginSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="email address"
                  required
                  value={email}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="write password"
                  required
                  value={password}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <div className="submit">
                <input type="submit" value="Sign In" />
              </div>
              {errorMessage && (
                <div className="errorMessage">
                  <p>{errorMessage}</p>
                </div>
              )}
              <div className="login">
                <p>
                  {" "}
                  Don't have an account <Link to="/">SIGN UP HERE</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Login;
