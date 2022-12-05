import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getCart } from "../apiAdapter";
import Products from "./Products";
import Profile from "./Profile";

const Cart = (props) => {
  const products = props.getProducts;
  const cart = props.cart;
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart)
  }, [cart])

  return (
    <div className="cartContainer">
      <div> I am cart </div>
      <button id="deleteItem"> Remove Item </button>

      <div>
        <div id="cartList">
          {CART.length ? 
            CART.map((itemInfo, cartIndex) => {
              return (
                <><img src={itemInfo.img_url} />
                <div id="singleCart">
                  <div>{itemInfo.name}</div>
                  <div>${itemInfo.price}</div>
                </div></>
              )
            }) : (
              <div>Loading Cart..</div>
            )
          }
        </div>
      </div>

      <div> I am cart </div>
      <button id="deleteItem"> Remove Item </button>

    </div>
  );
};

export default Cart;
