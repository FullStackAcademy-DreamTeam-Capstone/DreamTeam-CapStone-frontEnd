import React from "react";
import { NavLink } from "react-router-dom";

const Products = (props) => {
  const products = props.getProduct;

  return (
    <div>
      <div id="productList">
        {products.length ? (
          products.map((product) => {
            return (
              <div id="products" key={`product-${product.id}`}>
                <div id="singleProduct">
                  <div>{product.name}</div>
                  <div>{product.price}</div>
                  <div>{product.img_url}</div>
                </div>

              </div>
            );
          })
        ) : (
          <div>Loading Products..</div>
        )}
      </div>
      <NavLink to="/products/create"><button>Create Products</button></NavLink>
    </div>
  );
};

export default Products;
