import React from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css';
const ProductDetails=()=>{
    const {productIds}=useParams();
    const decode=decodeURIComponent(productIds);
    const product=JSON.parse(decode);
    console.log(product);

    return(
        <div className="container">
            <div className="product">
           <div className="product_info">
              <p>{product.title}</p>
              <p className="product_price">
                 <small>$</small>
                  <strong>{product.price}</strong>
               </p>
              <div className="product_rating">
               
                   <p>{"⭐".repeat(product.rating)}</p>
               
              </div>
              
           </div>
        
        <img src={product.image}
               alt="" />

        </div>
        </div>
    );
};
export default ProductDetails;