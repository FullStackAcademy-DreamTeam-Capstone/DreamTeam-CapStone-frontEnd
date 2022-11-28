import React, { useEffect, useState } from "react";
import { Navbar, Home, Register } from "./";
import { createBrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div id="main">
      <div id="NavbarDiv">
        <Navbar error={error} setError={setError} setloggedIn={setLoggedIn} />
      </div>
      <Routes>
        <Route
          path="/register"
          element={
            <Register
              error={error}
              setError={setError}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
      <div id="mainBody">hello i am main</div>
    </div>
  );
};

export default Main;
