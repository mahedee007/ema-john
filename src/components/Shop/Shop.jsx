import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setcart] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

        const addToCart = (product) =>{
            const newcart = [...cart, product];
            setcart(newcart)
            
        }

    return (
        <div className="shop">
            <div className="products-container">
                
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    img= {product.img}
                   addToCart = {addToCart}
                    ></Product>)
                }
            </div>
            <div className="summery-container">
                <Cart
                cart={cart}
                ></Cart>
            </div>
            
        </div>
    );
};

export default Shop;