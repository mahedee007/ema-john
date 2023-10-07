import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    
    const {name, price, img, ratings, seller, stock} = props.product;
    const addToCart = props.addToCart;
    return (
        <div className="product-cart">
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: ${ratings} stars</small></p>
            </div>
            <button onClick = {() => addToCart(props.product)} className="btn">Add To Cart <FontAwesomeIcon icon={faShoppingBasket} /> </button>
            
        </div>
    );
};

export default Product;