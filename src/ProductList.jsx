import React, { useEffect, useState } from "react";
import './ProductList.css'
import Product from "./Product";
import axios from "axios";
import { useParams } from "react-router-dom";
function  ProductList() {
    const [data,setData]=useState([]);
   const{products}= useParams();
    useEffect(()=>{
        const fetchData=async () =>{
            try{const res=await axios.get(`http://localhost:8080/${products}`);
            setData(res.data);}
            catch(error){
              console.log("error in fetching data");
            }
        };
        fetchData();
    },[]);
    
    return (
      <div>
        <div className="prod_list">
            <div className="List_container">
                
            {data.map((item,index)=>(
                <Product  
                        key={index}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                    />
            ))}
                    
                    
                
            </div>
        </div>
      </div>
    );
  }
  
  export default ProductList;