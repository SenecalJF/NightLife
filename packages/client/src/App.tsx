import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./components/login/LoginPage";
import SignUp from "./components/login/Signup";
import Navbar from "./components/navbar/Navbar";

const styles = {
  maxHeight: "100vh",
};

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <Router>
        <Fragment>
          <div style={styles}>
            {isLoggedIn ? (
              <Fragment>
                <Navbar />
              </Fragment>
            ) : (
              <Routes>
                <Route
                  path="/login"
                  element={<LoginPage setIsLoggedIn={setLoggedIn} />}
                />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            )}
          </div>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
