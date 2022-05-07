import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import LoginPage from "./components/login/LoginPage";
import SignUp from "./components/login/Signup";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
