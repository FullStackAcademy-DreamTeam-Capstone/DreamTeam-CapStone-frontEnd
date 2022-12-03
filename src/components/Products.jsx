import React, { useState } from "react";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { createCartItem, deleteProduct } from "../apiAdapter";

const Products = (props) => {
  const products = props.getProduct;
  const createCartItems = props.cartItems;
  const cart = props.cart;
  const currentUser = props.currentUser;
  const {productId} = useParams();

  //ADD TO CART FUNCTION
  const [cartInfo, setCartInfo] = useState({
    productId: "",
    cartId: "",
    price: "",

    quantity: 1,
  });

  async function handleSubmitAddItemToCart(event) {
    event.preventDefault();
    const price = products.price;
    const quantity = cartInfo.quantity;

    const response = await createCartItem(price, quantity);
  }

  async function handleDeleteProduct(e) {
    e.preventDefault()

    const deletedProduct = await deleteProduct(productId)
    if(deletedProduct.success) {
      navigate("/")
    }

  }

  return (
    <div>
      <div id="productList">
        {currentUser.isadmin
          ? products.map((product) => {
              return (
                <div id="products" key={`product-${product.id}`}>
                  <div id="singleProduct">
                    <div>Name: {product.name}</div>
                    <div>Price: ${product.price}</div>
                    <img src={product.img_url} alt="" />
                    <div>
                      <NavLink to={`/products/details/${product.id}`}>
                        <button id="seeDetails"> See Details </button>
                      </NavLink>
                      <NavLink to="/cart_item/create">
                        <button> Add to Cart </button>
                      </NavLink>
                      <button onClick={handleDeleteProduct}>Delete Product</button>
                    </div>
                  </div>
                </div>
              );
            })
          : products.map((product) => {
              return (
                <div id="products" key={`product-${product.id}`}>
                  <div id="singleProduct">
                    <div>Name: {product.name}</div>
                    <div>Price: ${product.price}</div>
                    <img src={product.img_url} alt="" />
                    <div>
                      <NavLink to={`/products/details/${product.id}`}>
                        <button id="seeDetails"> See Details </button>
                      </NavLink>

                      <NavLink to="/cart_item/create">
                        <button> Add to Cart </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
        ;
      </div>
    </div>
  );
};

export default Products;
