import React, { useEffect, useState } from "react";
import { Navbar, Home, CreateProduct, Profile, Products } from "./";
import { login, getProducts } from "../apiAdapter";

import { createBrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [getProduct, setGetProduct] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      const allProfile = await login(userName);
      setUsers(allProfile);
    }
    if (userName) {
      fetchProfile();
    }
  });

  const getLoggedInUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
    const user = localStorage.getItem("userName");
    if (user) {
      setUserName(user);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getLoggedInUser();
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProducts();
      console.log(productData.products, "this is data");
      setGetProduct(productData.products);
    };
    fetchData();
  }, []);

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
        <Route
          path="/profile"
          element={
            <Profile
              users={users}
              setUsers={setUsers}
              loggedIn={loggedIn}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route
          path="/products"
          element={<Products getProduct={getProduct} />}
        />
      </Routes>
    </div>
  );
};

export default Main;
