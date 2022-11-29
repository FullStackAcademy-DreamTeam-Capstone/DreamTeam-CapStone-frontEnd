import {React, useState} from "react";
import {createProduct} from "../apiAdapter"

const CreateProduct = () => {
const [ name,  setName] = useState('')
const [ price,  setPrice] = useState('')
const [ img,  setImg] = useState('')


    async function handleSubmit(event) {
        event.preventDefault()
        console.log(name, price, img)
        const product = await createProduct(name, price, img);
        console.log(product, 'this is the product')
        return product
    }

    async function handleChangeName(e) {
        setName(e.target.value)
    }
    async function handleChangePrice(e) {
        setPrice(e.target.value)
    }
    async function handleChangeImg(e) {
        setImg(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Create a product</h3>
                <label htmlFor="productName"> Name: </label>
                <input id="productName" type="text" onChange={handleChangeName} required/>
                <label htmlFor="productPrice"> Price: </label>
                <input id="productPrice" type="text" onChange={handleChangePrice} required/>
                <label htmlFor="productImg"> img_url: </label>
                <input id="productImg" type="img_url" onChange={handleChangeImg} />
                <button type="submit">Create Product</button>
            </form>
        </div>
    )

}

export default CreateProduct;