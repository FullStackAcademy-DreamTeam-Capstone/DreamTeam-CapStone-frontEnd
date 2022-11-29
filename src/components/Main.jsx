import React, { useEffect, useState } from "react";
import { Navbar, Home, CreateProduct, Products } from "./";
import { createBrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div id="main">
      <div id="NavbarDiv">
        <Navbar
          error={error}
          setError={setError}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/create" element={<CreateProduct />} />
      </Routes>
      <Products />    
      <div id="mainBody">hello i am main</div>
    </div>
  );
};

export default Main;
