import React from 'react' 
import {getProducts} from '../apiAdapter'
const Products = () => {

    async function handleOnload() {
        getProducts()
    }

return (
    <div onLoad={handleOnload}>Hello</div>
)
}

export default Products;