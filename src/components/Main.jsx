import React, { useEffect, useState } from "react";
import { Navbar, Home, CreateProduct, Profile, Products, Cart, SeeDetails, AdminPanel, EditProduct } from "./";

import { login, getProducts, getCartItems, createCartItem, getCart, getAllUsers } from "../apiAdapter";

import { createBrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [getProduct, setGetProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [product, setProduct] = useState([
    {
      name:'Shoes' ,
      price:'300' ,
      img_url:'https://media.istockphoto.com/id/1089844082/photo/close-up-of-sporty-woman-tying-shoelace-while-kneeling-outdoor-in-background-bridge-fitness.jpg?s=612x612&w=0&k=20&c=Wv91q9ihnMYw94wiR1ptwfajHYyR_y1dtUnTb6Dn5Ys='

    },
    {
      name:'Watch' ,
      price:'500' ,
      img_url:'https://media.istockphoto.com/id/533714204/photo/businessman-checking-time-from-watch.jpg?s=612x612&w=0&k=20&c=bJN94WW68Rw8uEogp3GKtBYnhcrNFNnf1SkWb0KDvGo='

    },
    {
      name:'TV' ,
      price:'1000' ,
      img_url:'https://media.istockphoto.com/id/1146517858/photo/tv-mockup-in-living-room-at-night-tv-screen-tv-cabinet-chairs-bookshelf.jpg?s=612x612&w=0&k=20&c=pVQx2e1A9CCQ0DarsAkbB0iXK6IdEEIs6LrjnQexB18=' 

    }
  ])

useEffect(() => {
  async function fetchUsers() {
    const allUsers = await getAllUsers()
    setUsers(allUsers)
  }
  fetchUsers();
}, [])

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

  const addToCart = (product) => {
    console.log(product)
    setCart([...cart, {...product, quantity: 1}])
  }


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
          element={<Products getProduct={getProduct} currentUser={currentUser} addToCart={addToCart} product={product}/>}
        />
        
        <Route path="/products/details/:productId" element={<SeeDetails currentUser={currentUser} getProduct={getProduct}/>} />
              
        <Route path="/adminpanel" element={<AdminPanel currentUser={currentUser} users={users} setUsers={setUsers} />} />



        <Route path="/products/create" element={<SeeDetails currentUser={currentUser}/>} />

       


        <Route
        path="/cart"
        element={<Cart getProduct={getProduct} cart={cart}/>}
        />
      </Routes>
    </div>
  );
};

export default Main;
