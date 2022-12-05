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
  const initialValue = 0;
  const [totalPrice, setTotalPrice] = useState()

  useEffect(() => {
    setCART(cart);
  }, [cart]);


  const CalculateCartTotal = () => {
    const result = CART.reduce((accumulator, d) => {
      return accumulator + Number(d.price)
    }, 0);
    setTotalPrice(result)
    }


  return (
    <div className="cartContainer">
      <div> I am cart </div>
      <button id="deleteItem"> Remove Item </button>

      <div>
        <div id="cartList">
          {CART.length ? (
            CART.map((itemInfo, cartIndex) => {
              return (
                <>
                  <img src={itemInfo.img_url} />
                  <div id="singleCart">
                    <div>{itemInfo.name}</div>
                    <div>${itemInfo.price}</div>
                  </div>
                </>
              );
            })
          ) : (
            <div>Loading Cart..</div>
          )}
        </div>
        <div>
          
          <button onClick={CalculateCartTotal}>
            
            Calculate Total Cost
          </button>
          Total Price: {totalPrice}
        </div>
      </div>

      <div> I am cart </div>
      <button id="deleteItem"> Remove Item </button>
    </div>
  );
};

export default Cart;
