import React, { useEffect, useState } from "react";
import logo from "../img/Vector (1).png";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("auth");
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (token) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [token]);
  const handleClick = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <div className="header">
      <div>
        {" "}
        <img src={logo} alt="logo" />
      </div>
      <div>{show ? <button onClick={handleClick}>Logout</button> : ""}</div>
    </div>
  );
};

export default Header;
