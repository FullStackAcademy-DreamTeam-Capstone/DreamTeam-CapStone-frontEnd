import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { getCart } from "../apiAdapter";
import Products from "./Products";
import Profile from "./Profile";


const Cart = (props) => {
    const cart = props.getCart;


    //async delete cart item function
    
    //async edit cart item function

    //function to add all the item prices to get total price

    //buy button, does nothing but clear the cart and say that you have purchased the items


return (

    <div className="cartContainer">
        <div> I am cart </div>
        <button id="deleteItem"> Remove Item </button>


    {/* <div>
      <div id="cartList">
        {cart.length ? (
          cart.map((cart) => {
            return (
              <div id="carts" key={`cart-${cart.id}`}>
                <div id="singleCart">
                  <div>{cart.user_id}</div>
                  <div>$ {cart.isActive}</div>
                </div>

              </div>
            );
          })
        ) : (
          <div>Loading Cart..</div>
        )}
      </div>

    </div> */}
    </div>
  );
}

export default Cart;