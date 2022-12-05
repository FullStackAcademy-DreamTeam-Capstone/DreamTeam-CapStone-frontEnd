import {React, useState} from "react";
import { useParams } from "react-router-dom";
import { updateProduct } from "../apiAdapter";

const EditProduct = (props) => {
const {productId} = useParams();
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [imgUrl, setImgUrl] = useState("");


const handleEdit =  async (e) => {
    e.preventDefault();
    const editedProduct = await updateProduct(name, price, imgUrl, productId);
    console.log(editedProduct)
};

return (
    <div>
        <form onSubmit={handleEdit}>
        <label className="productLabel"> Product Name: </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="productLabel"> Product Price</label>
        <input
          type="text"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <label htmlFor="imgUrl"> Product Image </label>
        <input
          type="text"
          name="img"
          value={imgUrl} 
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <button>Edit Product</button>
        </form>
    </div>
)
}

export default EditProduct;