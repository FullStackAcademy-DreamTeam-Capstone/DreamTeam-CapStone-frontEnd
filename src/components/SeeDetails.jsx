import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteProduct } from "../apiAdapter";
import { EditProduct } from "./";


const SeeDetails = (props) => {
  const [filterProduct, setFilterProduct] = useState({});
  const currentUser = props.currentUser
  const { productId } = useParams();
  console.log(typeof productId, "THIS IS PRODUCT ID");
  const products = props.getProduct;
  console.log(products, "THIS IS PRODUCTS");

  useEffect(() => {
    const found = products.find((element) => {
      console.log(element, "THIS IS ELEMENT");
      console.log(typeof element.id);
      if (productId == element.id) {
        return true;
      }
    });
    setFilterProduct(found);
  }, [products]);

  

  return (
    <div>
      {filterProduct && filterProduct.name ? (
        <>
          <h2>Product Name: {filterProduct.name}</h2>
          <div>Product Price: {filterProduct.price}</div>
          <img src={filterProduct.img_url} alt="" />
          <EditProduct />
        </>
        
      ) : null}
    </div>
  );
};

export default SeeDetails;
