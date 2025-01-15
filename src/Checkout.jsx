import React from "react";
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
//import Cookies from 'js-cookie';
function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    //Cookies.set('token',JSON.stringify(basket), { expires: 7, secure: true });
    //const bask=JSON.parse(Cookies.get('token'));
    return (
        <div className="checkout">
           <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                   {basket.map((item,i)=>(
                      <CheckoutProduct 
                        key={i}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                      />
                   ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
        </div>
    )
}

export default Checkout

