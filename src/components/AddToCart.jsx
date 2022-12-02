import React, { useState } from "react";
import { createCartItem } from "../apiAdapter";

const AddToCart = (props) => {
    const cart = props.cart
    const setCart = props.setCart
    const cartItems = props.cartItems
    const setCartItems = props.setCartItems
    const products = props.getProduct

    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')

    return (
        <div>
            <h2> I am cart </h2>
        </div>
    )

}

export default AddToCart;