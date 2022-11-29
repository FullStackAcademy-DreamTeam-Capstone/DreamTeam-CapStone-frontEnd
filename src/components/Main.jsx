import React, { useEffect, useState } from "react";
import { Navbar, Home, CreateProduct, Profile, Product } from "./";
import { login } from "../apiAdapter";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import { getProducts } from "../apiAdapter";

const Main = () => {
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [getProduct, setGetProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProducts();
      console.log(productData.products, 'this is data')
      setGetProduct(productData.products)
    }
    fetchData()

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
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/products" element={<Products getProduct={getProduct}/>} />
      </Routes>

    </div>
  );
};

export default Main;
