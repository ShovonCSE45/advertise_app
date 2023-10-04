import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let time = 0;
    let period =0;
    let name = "";
    for(const product of cart){
        time = time + product.time;
        period = period + product.period;
        name = name + product.name;
        
    }
    return (
        <div className='cart_container'>
            <h2>cart summary</h2>
            <p>Selected Iterms: {cart.length}</p>
            <h3>Name : {cart.name}</h3>

            <p>Total Time: {time}</p>
            <p>Time Duration: {period}</p>
            
        </div>
    );
};

export default Cart;