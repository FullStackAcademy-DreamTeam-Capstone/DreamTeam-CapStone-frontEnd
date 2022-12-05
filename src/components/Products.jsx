import { React, useState } from "react";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { createCartItem, deleteProduct } from "../apiAdapter";
// import { EditProduct } from "./";


const Products = (props) => {
  const products = props.getProduct;
  const createCartItems = props.cartItems;
  const cart = props.cart;
  const currentUser = props.currentUser;
  const {productId} = useParams();
  const addToCart = props.addToCart;

  const [editActive, setEditActive] = useState(false);

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

  async function handleDeleteProduct(productId) {

    const deletedProduct = await deleteProduct(productId)
    if(deletedProduct.success) {
      //TO DO...fix this asap
      Navigate("/")
    }
  }


console.log("All products: " + props.getProduct)

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
                        <button onClick={() => addToCart(product)}> Add to Cart </button>
                      <button onClick={() => handleDeleteProduct(product.id)}>Delete Product</button>
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

                      
                        <button onClick={() => addToCart(product)}> Add to Cart </button>

                     
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Products;
