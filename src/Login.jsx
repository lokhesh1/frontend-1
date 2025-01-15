import React, {  useEffect, useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { auth } from './firebase';
import firebase from 'firebase/compat/app';
import axios from "axios";
import 'firebase/database';
import { useStateValue } from './StateProvider';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setName] = useState('');
    const credential={email,password};
    var {name}=useStateValue();
    name=username;
    useEffect(()=>{
        ((async)=>{firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                navigate('/'); 
              return;
            }
          })})();

    },[]);
    
    const signIn = async(e)=> {
        e.preventDefault();
        firebase.auth().onAuthStateChanged(async function (user) {
            if (user) {
                navigate('/'); 
            } else {
                try{
                    await firebase.auth().signInWithEmailAndPassword(email, password);
                    
                    axios.post('http://localhost:8080/login', credential)
                    navigate('/');   
                
                }catch (error) {
                       
                        console.error(error.message);
                      }
                    
            }
          });
        
    }

    const register = e => {
        e.preventDefault();
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/');
                
                axios
                    .post('http://localhost:8080/login', credential)
                    .then(() => console.log('user created'))
                    .catch(err => {
                      console.error(err);
                    });    
                    
                }
            })
            .catch(error => alert(error.message))

    }
    
   
    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <LocalMallIcon className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>
                <div className='alignbox'>
                <form>
                    <h5>Name</h5>
                    <input type='text' name='username' value={username} onChange={e => setName(e.target.value)} />


                    <h5>E-mail</h5>
                    <input type='text' name='email' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />

                    
                </form>
                <div>
                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                    <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                     <button className='login__registerButton' onClick={register}>Create your eShop Account</button>
                </div>
                </div>
                
                
            </div>
        </div>
    )
}


export default Login;