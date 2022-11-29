import React from "react";

const Products = (props) => {
  const products = props.getProduct;
  console.log(products, "I am passing it through properly");

  return (
    <div id="productsList">
      {products.length ? products.map((product) => {
          return <div key={`product-${product.id}`}>
                <div>{product.name}</div>
                <div>{product.price}</div>
                <div>{product.img_url}</div>
            </div>;
        }) : (
        <div>Loading Products..</div>
      )}
    </div>
  );
};

export default Products;
