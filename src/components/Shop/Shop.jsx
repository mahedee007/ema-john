import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="shop">
            <div className="products-container">
                
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    img= {product.img}
                    ></Product>)
                }
            </div>
            <div className="summery-container">
                <h1>Order Summery</h1>
            </div>
            
        </div>
    );
};

export default Shop;