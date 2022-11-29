import React, { useEffect, useState } from "react";
import { Navbar, Home, CreateProduct, Profile } from "./";
import { createBrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div id="main">
      <div id="NavbarDiv">
        <Navbar
          error={error}
          setError={setError}
          loggedIn={loggedIn}
          setloggedIn={setLoggedIn}
        />
      </div>
      <div id="mainBody">
        hello i am main
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {/* <CreateProduct /> */}
      </div>
    </div>
  );
};

export default Main;
