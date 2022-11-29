import React from "react";
import {createProduct} from "../apiAdapter"

const CreateProduct = () => {

    async function handleSubmit(event) {
        event.preventDefault()
        const name = event.target[0].value;
        const price = event.target[1].value;
        const img_url = event.target[2].value;
        const product = await createProduct(name, price, img_url);
        localStorage.removeItem("token");
        localStorage.setItem("token", token)
        return product
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Create a product</h3>
                <label htmlFor="productName"> Name: </label>
                <input id="productName" type="text" required/>
                <label htmlFor="productPrice"> Price: </label>
                <input id="productPrice" type="text" required/>
                <label htmlFor="productImg"> img: </label>
                <input id="productImg" type="img_url" />
                <button type="submit">Create Product</button>
            </form>
        </div>
    )


}

export default CreateProduct;