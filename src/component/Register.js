import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerLogo from "../img/istockphoto-1321277096-612x612 1.png";
import "./Register.css";
import axios from "axios";
import { validateEmail } from "../util/emailCheck";
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_Name: "",
    phone_number: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { first_name, last_Name, phone_number, email, password } = user;

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (phone_number.length > 10) {
        if (validateEmail(email)) {
          if (password.length > 7) {
            const { data } = await axios.post(
              `https://test.nexisltd.com/signup`,
              {
                first_name,
                last_Name,
                phone_number,
                email,
                password,
              }
            );
            navigate("/login");
            console.log("success", data);
          } else {
            setErrorMessage("Password must be at-least 8 characters");
          }
        } else {
          setErrorMessage("Enter valid email.");
        }
      } else {
        setErrorMessage("Phone number is not valid");
      }
    } catch (error) {
      console.log("error", error);

      setErrorMessage(error.response.data.error);
    }
  };
  return (
    <div className="registerForm">
      <div>
        <img src={registerLogo} alt="" />
      </div>
      <div>
        <h4>Sign up </h4>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="first name"
              required
              name="first_name"
              value={first_name}
              onChange={registerDataChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="first name"
              required
              name="last_Name"
              value={last_Name}
              onChange={registerDataChange}
            />
          </div>
          <div className="number">
            <label htmlFor="">+880</label>
            <input
              type="text"
              placeholder="1xxxxxxx"
              required
              name="phone_number"
              value={phone_number}
              onChange={registerDataChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="email address"
              required
              name="email"
              value={email}
              onChange={registerDataChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="write password"
              required
              name="password"
              value={password}
              onChange={registerDataChange}
            />
          </div>
          <div className="submit">
            <input type="submit" value="Sign Up" />
          </div>
          {errorMessage && (
            <div className="errorMessage">
              <p>{errorMessage}</p>
            </div>
          )}

          <div className="login">
            <p>
              {" "}
              Already have an account <Link to="/login">LOGIN HERE</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
