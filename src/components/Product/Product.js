import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const { product, handleAddToCart } = props;
    const { name, img, price, ratings, seller
    } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p>{name}</p>
                <p>Price: ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='cart-btn'>Add to Cart  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;