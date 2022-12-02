import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { createCartItem } from "../apiAdapter";

const Products = (props) => {
  const products = props.getProduct;
  const createCartItems = props.cartItems;
  const cart = props.cart;
  console.log(products)

  //ADD TO CART FUNCTION
  const [cartInfo, setCartInfo] = useState({
    productId:"",
    cartId: "",
    price:"",
    quantity: 1,
  })

  async function handleSubmitAddItemToCart(event) {
    event.preventDefault();
    const price = products.price
    const quantity = cartInfo.quantity

    const response = await createCartItem(price, quantity)

  }



  return (
    <div>
      <div id="productList">
        {products.length ? (
          products.map((product) => {
            return (
              <div id="products" key={`product-${product.id}`}>
                <div id="singleProduct">
                  <div>Name: {product.name}</div>
                  <div>Price: ${product.price}</div>
                  <img src={product.img_url} alt=""/>
                  <div> 
                    <button id="editProduct"> Edit Product </button>
                    <button id="deleteProduct"> Delete Product </button> 
                    <button onClick={handleSubmitAddItemToCart}> Add to Cart </button>
                    </div>
                </div>

              </div>
            );
          })
        ) : (
          <div>Loading Products..</div>
        )}
      </div>
      <NavLink to="/products/create"><button>Add a Product</button></NavLink>
    </div>
  );
};

export default Products;
