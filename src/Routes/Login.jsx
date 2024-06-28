import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { getAuth ,signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebase";

const auth=getAuth(app);

const Login=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const signinUser=()=>{
        signInWithEmailAndPassword(auth,email,password).then(value=>alert("success"));
        navigate('/');
    }
    return (
        <div className="signin-page">
            <br />
            <label htmlFor="">Email</label>
            <input onChange={e=>setEmail(e.target.value)} value={email} type="email" required placeholder="Enter your email" />
            <br /><br />
            <label htmlFor="">Password</label>
            <input onChange={e=>setPassword(e.target.value)} value={password} type="password" required placeholder="Enter your password"/>
            <br /><br />
            <button onClick={signinUser}>Login</button>
        </div>
    )
}

export default Login;