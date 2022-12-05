import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteProduct } from "../apiAdapter";
import { EditProduct } from "./";

const SeeDetails = (props) => {
  const [filterProduct, setFilterProduct] = useState({});
  const currentUser = props.currentUser;
  const { productId } = useParams();
  const products = props.getProduct;

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

  console.log(currentUser, "this is current user");

  return (
    <div>
      {currentUser ? (
        <>
          <h2>Product Name: {filterProduct.name}</h2>
          <div>Product Price: {filterProduct.price}</div>
          <img src={filterProduct.img_url} alt="" />
          {currentUser.isadmin ? <EditProduct /> : null}
        </>
      ) : null}
    </div>
  );
};

export default SeeDetails;
