import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import LoginPage from "./components/login/LoginPage";
import SignUp from "./components/login/Signup";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Fragment>
        <Navbar />

        {isLoggedIn ? (
          <div></div>
        ) : (
          <Routes>
            <Route
              path="/login"
              element={<LoginPage setIsLoggedIn={setLoggedIn} />}
            />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        )}
      </Fragment>
    </Router>
  );
}

export default App;
