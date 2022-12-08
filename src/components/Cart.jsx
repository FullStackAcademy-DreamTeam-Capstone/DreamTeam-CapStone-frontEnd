import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getCart, deleteCartItem } from "../apiAdapter";
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

  const navigate = useNavigate();

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  //PRICE TOTAL FUNCTION
  const CalculateCartTotal = () => {
    const result = localCart.reduce((accumulator, d) => {
      return accumulator + Number(d.price) * Number(d.quantity);
    }, 0);
    setTotalPrice(result);
  };

  const finalPrice = () => {
    const result = localCart
      .map((item) => item.price * item.quantity)
      .reduce((total, value) => total + value, 1);
    setTotalPrice(result);
  };

  //DELETE CART ITEM FUNCTION
  async function handleDeleteCartItem(event) {
    const cartLocal = JSON.parse(localStorage.getItem("cart"));
    const filteredCartLocal = cartLocal.filter((cartItem) => {
      console.log(cartItem, event.target.id, 'line49')
      if (cartItem.id != event.target.id) {
        return true;
      } else {
        return false;
      }
    });
    localStorage.removeItem('cart')
    localStorage.setItem('cart', JSON.stringify(filteredCartLocal))
    window.location.reload();

    alert("This item has been deleted off your local cart.");

  }

  //BUY BUTTON FUNCTION
  const handleSubmitBuyButton = () => {
    localStorage.removeItem("cart");
    navigate("/");
    window.location.reload();
    alert("Thank you for purchasing with us!");
  };

  return (
    <div className="cartContainer">
      <div id="cartHeader">
        <h1>Your Cart</h1>
      </div>
      <div>
        <div id="cartList">
          {localCart.length ? (
            localCart.map((itemInfo, cartIndex) => {
              return (
                <>
                  <div id="singleCart">
                    <img id="image-box" src={itemInfo.img_url} width="70%" />
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
                            ? {
                                ...item,
                                quantity: item.quantity ? item.quantity + 1 : 1,
                              }
                            : item;
                        });

                        setLocalCart(cartQtyFinal);
                      }}
                    >
                      +
                    </button>
                    <button onClick={handleDeleteCartItem} id={itemInfo.id}>
                      Remove Item
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
          Total Price: {totalPrice}
        </p>
      </div>
      <div>
        <button id="buyNowButton" onClick={handleSubmitBuyButton}>
          {" "}
          BUY NOW{" "}
        </button>
      </div>
    </div>
  );
};

export default Cart;
