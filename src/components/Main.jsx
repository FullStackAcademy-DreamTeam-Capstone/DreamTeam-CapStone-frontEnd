import React, { useEffect, useState } from "react";
import { Navbar, Home, CreateProduct, Profile, Products, Cart, SeeDetails } from "./";
import { login, getProducts, getCart } from "../apiAdapter";

import { Navbar, Home, CreateProduct, Profile, Products, Cart, AddToCart } from "./";
import { login, getProducts, getCartItems, createCartItem } from "../apiAdapter";

import { createBrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [getProduct, setGetProduct] = useState([]);
  const [cart, setCart] = useState({});
  const [cartItems, setCartItems] = useState({});


  //Use Effect for Login
  useEffect(() => {
    async function fetchProfile() {
      const allProfile = await login(userName);
      setUsers(allProfile);
    }
    if (userName) {
      fetchProfile();
    }
  });

  //Use Effect for get logged in User
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

  //Use Effect for getProducts
  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProducts();
      setGetProduct(productData.allActiveProducts);
    };
    fetchData();
  }, []);

  //Use Effect for getCartItems
  useEffect(() => {
    const fetchData = async () => {
      const cartData = await getCartItems();
      // console.log(cartData);
      setCart(cartData);
    };
    fetchData();
  }, []);

  //Use Effect for createCartItems
  useEffect(()=> {
    const fetchData = async () => {
      const createCartItemData = await createCartItem();
      setCartItems(createCartItemData);
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
          element={<Products getProduct={getProduct}/>}
        />

        <Route path="/products/create" element={<SeeDetails/>} />

        <Route path="/create_item/create" element = {<AddToCart 
        cart={cart} 
        setCart={setCart}
        cartItems={cartItems}
        setCartItems={setCartItems} />} />

        <Route
        path="/cart"
        element={<Cart />}
        />
      </Routes>
    </div>
  );
};

export default Main;
