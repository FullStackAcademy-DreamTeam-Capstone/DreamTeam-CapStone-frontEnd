import React, { useEffect, useState } from "react";
import { Navbar, Home, CreateProduct } from "./";
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
          setLoggedIn={setLoggedIn}
        />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <CreateProduct />
      <div id="mainBody">hello i am main</div>
    </div>
  );
};

export default Main;
