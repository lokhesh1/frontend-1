import React from "react";
import './Product.css' 
import { useStateValue } from "./StateProvider";
import { useNavigate, useParams } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Product({id, title, image, price, rating}) {
   const  [state,dispatch]=useStateValue();
   const navigate=useNavigate();
   const {products}=useParams();
   const addToBasket = () => {
      dispatch({
          type: "addtobasket",
          item: {
              id: id,
              title:title,
              image: image,
              price: price,
              rating: rating,
          },
      });
  };

    const viewProduct=()=>{
         const serializedIds=JSON.stringify({id, title, image, price, rating}) ;
         navigate(`/${products}/${encodeURIComponent(serializedIds)}`);
    };

    return (
      <div className="prod_container">
      <div className="product">
           <div className="product_info">
              <p>{title}</p>
              <p className="product_price">
                 <small>$</small>
                  <strong>{price}</strong>
               </p>
              <div className="product_rating">
              <p>{"⭐".repeat(rating)}</p>
              </div>
              
           </div>
        
        <img src={image}
               alt="" />
            <div className="buttons">
                    <button onClick={addToBasket}><AddShoppingCartIcon /></button>
                    <button onClick={viewProduct}>VIEW</button>
            </div>
        </div>
        </div> 
    );
  }
  
  export default Product;