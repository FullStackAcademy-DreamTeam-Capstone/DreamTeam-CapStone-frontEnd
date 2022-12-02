import React from "react";
import { NavLink } from "react-router-dom";

const Products = (props) => {
  const products = props.getProduct;
  const createCartItems = props.cartItems;
  const cart = props.cart;

  async function handleAddToCart(event) {
    event.preventDefault();
    createCartItems(products.id, cart.id, products.price, +1);
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
                    <NavLink to ='/cart_item/create'><button> Add to Cart </button></NavLink>
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
