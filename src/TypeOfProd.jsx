import React from "react";
import './TypeOfProd.css';
function TypeOfProd({nameOf,image}){
    return(
        <div className="typeOf">
             <img src={image} alt="" />
            <strong>{nameOf}</strong>
        </div>
    );
}

export default TypeOfProd;