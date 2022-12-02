import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { createCartItem } from "../apiAdapter";

const Products = (props) => {
  const products = props.getProduct;
  const createCartItems = props.cartItems;
  const cart = props.cart;
  const currentUser = props.currentUser;


  //ADD TO CART FUNCTION
  const [cartInfo, setCartInfo] = useState({
    productId:"",
    cartId: "",
    price:"",

    quantity: 1,
  });

  async function handleSubmitAddItemToCart(event) {
    event.preventDefault();
    const price = products.price;
    const quantity = cartInfo.quantity;

    const response = await createCartItem(price, quantity);
  }

  return (
    <div>
      <div id="productList">
        {currentUser.isadmin ? (
          products.map((product) => {
            return (
              <div id="products" key={`product-${product.id}`}>
                <div id="singleProduct">
                  <div>Name: {product.name}</div>
                  <div>Price: ${product.price}</div>
                  <img src={product.img_url} alt=""/>
                  <div> 
                    <NavLink to ={`/products/details/${product.id}`}><button id="seeDetails"> See Details </button></NavLink> 
                    <NavLink to ='/cart_item/create'><button> Add to Cart </button></NavLink>
                    </div>

                    <button onClick={handleSubmitAddItemToCart}>
                      {" "}
                      Add to Cart{" "}
                    </button>
                  </div>
                </div>
            );
          })
        ) : (
            products.map((product) => {
                return (
                  <div id="products" key={`product-${product.id}`}>
                    <div id="singleProduct">
                      <div>Name: {product.name}</div>
                      <div>Price: ${product.price}</div>
                      <img src={product.img_url} alt="" />
                      <div>
                        <button onClick={handleSubmitAddItemToCart}>
                          {" "}
                          Add to Cart{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
        )};
      </div>
      {/* <NavLink to="/products/create">
        <button>Add a Product</button>
      </NavLink> */}
    </div>
  );
};

export default Products;
