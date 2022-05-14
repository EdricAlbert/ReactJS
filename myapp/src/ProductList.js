import React from 'react';
import './ProductChild';
import ProductChild from './ProductChild';
import { products } from './mock/index';
const ProductList = () =>{
    return(
        <section class="newProducts">
        <h1>News Products</h1>
        <div class="newProducts__container">
            <ProductChild productInfo = {products[0]}/>
            <ProductChild />
            <ProductChild />
            <ProductChild />
        </div>
    </section>
    )
}

export default ProductList;
