import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, price, img, ratings, seller, stock} = props.product
    return (
        <div className="product-cart">
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: ${ratings} stars</small></p>
            </div>
            <button className="btn">Add To Cart</button>
            
        </div>
    );
};

export default Product;