import React, { useState, useEffect } from "react";
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

  const savedCart = localStorage.getItem("cart");
  const cartArray = JSON.parse(savedCart);
  const [localCart, setLocalCart] = useState(cartArray);

  useEffect(() => {
    setCART(cart);
  }, [cart]);


  const CalculateCartTotal = () => {

    const result = localCart.reduce((accumulator, d) => {
      return accumulator + Number(d.price);

    }, 0);
    setTotalPrice(result);
  };

  const finalPrice = () => {
    const result = localCart
      .map((item) => item.price * item.quantity)
      .reduce((total, value) => total + value, 0);
    setTotalPrice(result);
  };

  return (
    <div className="cartContainer">
      <div>
        <div id="cartList">
          {localCart.length ? (
            localCart.map((itemInfo, cartIndex) => {
              return (
                <>
                  <img src={itemInfo.img_url} width="20%" />
                  <div id="singleCart">
                    <p>{itemInfo.name}</p>
                    <p>${itemInfo.price}</p>
                    <button
                      onClick={() => {
                        const cartQtyFinal = localCart.map(
                          (cartItem, index) => {
                            return cartIndex === index
                              ? {
                                  ...cartItem,
                                  quantity:
                                    cartItem.quantity > 0
                                      ? cartItem.quantity - 1
                                      : 0,
                                }
                              : cartItem;
                          }
                        );
                        setLocalCart(cartQtyFinal);
                      }}
                    >
                      -
                    </button>
                    <span> {itemInfo.quantity} </span>
                    <button
                      onClick={() => {
                        const cartQtyFinal = localCart.map((item, index) => {
                          return cartIndex === index
                            ? { ...item, quantity: item.quantity + 1 }
                            : item;
                        });

                        setLocalCart(cartQtyFinal);

                      }}
                    >
                      +
                    </button>
                    <button id="deleteItem" >
                      {" "}
                      Remove Item{" "}
                    </button>
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
          Total Price: {finalPrice}
        </p>
      </div>
    </div>
  );
};

export default Cart;
