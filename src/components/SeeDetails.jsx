import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { deleteProduct } from "../apiAdapter";
import { EditProduct, HomeFooter } from "./";

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
      <div id="details">
        {currentUser ? (
          <div id="borders">
            <h2>Product Name: {filterProduct.name}</h2>
            <img src={filterProduct.img_url} alt="" />
            <div className="Price">Product Price: {filterProduct.price}</div>
            <div className="edit">
              {currentUser.isadmin ? <EditProduct /> : null}
            </div>
              <h3><NavLink to="/products">Go Back to Products</NavLink></h3>
          </div>
        ) : null}
      </div>
      <HomeFooter />
    </div>
  );
};

export default SeeDetails;
