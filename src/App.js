import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import "./App.css";
import Allpage from "./component/Allpage";
import Header from "./component/Header";
import Login from "./component/Login";
import PrivetRoute from "./util/PrivetRoute";
import AlluserData from "./component/ALLUserData/AlluserData";
import PublicRoute from "./util/PublicRoute";

function App() {
  return (
    <div className="container">
      <div>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/allUser"
              element={
                <PrivetRoute>
                  <AlluserData />
                </PrivetRoute>
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
