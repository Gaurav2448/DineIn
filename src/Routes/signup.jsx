import React from "react";
import { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";

const SignupPage=()=>{
    const firebase=useFirebase();
    console.log(firebase);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
   
    return (
        <div className="signup-page">
            <br />
            <label htmlFor="email">Email</label>
            <input id="email" onChange={e=>setEmail(e.target.value)} value={email} type="email" required placeholder="Enter your email" />
            <br /><br />
            <label htmlFor="pass">Password</label>
            <input id="pass" onChange={e=>setPassword(e.target.value)} value={password} type="password" required placeholder="Enter your password"/>
            <br /><br />
            <button onClick={()=>{firebase.signupGoogle();navigate('/')}}>Signup with Google</button>
            <br />
            <button onClick={()=>{firebase.signupuser(email,password);navigate('/login')}}>Signup</button>
        </div>
    )
}

export default SignupPage;