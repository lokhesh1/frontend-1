

import { useEffect, useReducer } from "react";
import Cookies from "js-cookie";

// here we define all the application level states and define actions to make the changes to the state



export const initialState = {
    basket:[],
};

export const getBasketTotal = (basket) => {
    return(basket?.reduce((amount, item) => item.price + amount, 0));
}

const reducer = (state, action) => {
    switch(action.type) {
        case "addtobasket":
            return {
                ...state,
                basket: [...state.basket, action.item]
               
            }
        
        case "removefrombasket":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index>=0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product(id: ${action.id}) as its not in the basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }
        case 'SET_DATA':
            return action.payload;

        default:
            return state;
    }
   
}
export const useCookieReducer=(reducer,initialState)=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    useEffect(()=>{
        try{
        const storedData=JSON.parse(Cookies.get('userdata'));
        if(storedData){
            dispatch({type:'SET_DATA',payload:storedData});
        }}
        catch(error){
            console.log(error);
        }
    },[]);
    useEffect(()=>{
        Cookies.set('userdata',JSON.stringify(state));
    },[state]);
    return [state,dispatch];
}
export default reducer;

