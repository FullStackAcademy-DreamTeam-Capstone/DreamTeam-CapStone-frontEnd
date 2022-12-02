import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getCart } from "../apiAdapter";
import Products from "./Products";
import Profile from "./Profile";

const Cart = (props) => {
  const products = props.getProducts;

  //async delete cart item function

  //async edit cart item function

  //function to add all the item prices to get total price

  //buy button, does nothing but clear the cart and say that you have purchased the items

  return (
    <div className="cartContainer">
      <div> I am cart </div>
      <button id="deleteItem"> Remove Item </button>

      <div>
        <div id="cartList">
          {cart.length ? 
            cart.map((carts) => {
              return (
                <div id="carts" key={`carts-${carts.id}`}>
                  <div id="singleCart">
                      <div>{cart.user_id}</div>
                      <div>$ {cart.isActive}</div>
                  </div>
                </div>
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
