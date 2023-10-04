import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props.product);
    console.log(props);
    const {id,img, seller, name, period,time} = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='product_container'>
            <img src={img} alt="" />
            <div className='name_time'>
                <h3>{name}</h3>
                <p>{time} min read  
                <FontAwesomeIcon icon={faShoppingCart} />
                </p>
            </div>
            <p><small>{period} Days ago</small></p>
            <h2>{seller}</h2>
            <button onClick={()=>handleAddToCart(props.product)}>Mark as more</button>
            <br />
            <br />
        </div>
    );
};

export default Product;