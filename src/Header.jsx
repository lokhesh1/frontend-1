import React, { useEffect, useState } from "react"
import './Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import {  useStateValue } from './StateProvider';
import firebase from 'firebase/compat/app';
import 'firebase/database';
function Header(){
  const [{basket},dispatch]=useStateValue();
  const [isAuth,setAuth]=useState(false);
  const [name,setName]=useState('Guest');
 
  //console.log(basket);
    //const loginpage=async ()=>{
      useEffect(()=>{ 
        firebase.auth().onAuthStateChanged(async function (user) {
          if (user) {
            console.log("User object:", user);
            setAuth(true);
             
          }else{
            setAuth(false)
            setName('Guest')
          }
        });
              
      },[]);
      
     const handleSignOut=async()=>{
      
      try{
        await firebase.auth().signOut();
        setAuth(false);
        window.location.reload();
        }catch(error){
        console.log("error in signing out",error);
      }
     };    
         
    //};
    return(
        <div className="header">
        <Link to="/frontend-1" style={{ textDecoration:"none" }}>
           <div className="header_logo">
              <LocalMallIcon className='header_logoImage' fontSize='large'/>
              <h2 className='header_logoTitle'>ZAAK</h2>
            </div>
        </Link>
      <div className="header_search">
        <input type="text" className='header_searchInput'/>
        <SearchIcon className='header_searchIcon'/>
      </div>
      <div className="header_nav">
      
        <div className="nav_item">
          <span className="nav_itemLineone">Hello {name}</span>
          <Link to="/login" style={{ textDecoration: "none" }}>
          
          {!isAuth &&<span className="nav_itemLinetwo" >
          Sign In</span>}</Link>
          {isAuth &&<span className="nav_itemLinetwo" onClick={handleSignOut}>
          Sign Out</span>}
          
        </div>
        
        
        <Link to="/checkout" style={{ textDecoration: "none" }}>
        <div className="nav_itemBasket">
          <ShoppingCartIcon />
          <span className="nav_itemLinetwo nav_basketCount">{basket.length}</span>
        </div>
        </Link>
      </div>

        </div>
    )

}

export default Header