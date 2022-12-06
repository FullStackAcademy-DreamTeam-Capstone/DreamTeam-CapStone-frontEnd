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
  const [totalPrice, setTotalPrice] = useState();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const CalculateCartTotal = () => {
    const result = CART.reduce((accumulator, d) => {
      return accumulator + Number(d.price);
    }, 0);
    setTotalPrice(result);
  };

  const handleIncrement = () => {
    setQuantity(CART.quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(CART.quantity - 1);
    }
  };

  return (
    <div className="cartContainer">
      <div>
        <div id="cartList">
          {CART.length ? (
            CART.map((itemInfo, cartIndex) => {
              return (
                <>
                  <img src={itemInfo.img_url} width="20%"/>
                  <div id="singleCart">
                    <p>{itemInfo.name}</p>
                    <p>${itemInfo.price}</p>
                    <button onClick={handleDecrement}>-</button>
                    <span> {itemInfo.quantity} </span>
                    <button onClick={handleIncrement}>+</button>
                  </div>
                </>
              );
            })
          ) : (
            <div>Nothing in your cart yet!</div>
          )}
        </div>
        <p>
          <button onClick={CalculateCartTotal}>Calculate Total Cost</button>
          Total Price: {totalPrice}
        </p>
      </div>
      <button id="deleteItem"> Remove Item </button>
    </div>
  );
};

export default Cart;
