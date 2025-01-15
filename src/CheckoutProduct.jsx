import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
function CheckoutProduct({ id, image, title, price, rating }) {
    const  [{basket},dispatch]=useStateValue();
    
    const removeProduct=()=>{
        dispatch({
            type:"removefrombasket",
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeProduct}>Remove from Basket<RemoveShoppingCartIcon /></button>
            </div>
        </div>
    )
}

export default CheckoutProduct
