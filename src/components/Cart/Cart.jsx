import React from 'react';

const Cart = ({cart}) => {

    let totalPrice = 0;
    let shippingCharge = 0;

    for(const product of cart){

         totalPrice = totalPrice + product.price;
         shippingCharge = shippingCharge + product.shipping;
    }
    const tax = totalPrice*7.5/100;
    const grandTotal = totalPrice+shippingCharge+tax;

    return (
        <div>
                <h1>Order Summery</h1>
                <p>Selected cart: {cart.length} </p>
                <p>Total Price: ${totalPrice} </p>
                <p>Total Shipping Charge: ${shippingCharge} </p>
                <p>Tax: ${tax.toFixed(2)} </p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;