import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import Cookies from 'js-cookie';
function Subtotal() {
    const [{basket},dispatch]=useStateValue();
    //Cookies.set('token',JSON.stringify(basket), { expires: 7, secure: true });
    //const bask=JSON.parse(Cookies.get('token'));
    return (
        <div className='subtotal'>
           <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>${value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
