import React,{useState} from "react";
import { getAuth ,signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebase";

const auth=getAuth(app);

const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const signinUser=()=>{
        signInWithEmailAndPassword(auth,email,password).then(value=>alert("success"));
    }
    return (
        <div className="signin-page">
            <label htmlFor="">Email</label>
            <input onChange={e=>setEmail(e.target.value)} value={email} type="email" required placeholder="Enter your email" />
            <label htmlFor="">Password</label>
            <input onChange={e=>setPassword(e.target.value)} value={password} type="password" required placeholder="Enter your password"/>
            <button onClick={signinUser}>Login</button>
        </div>
    )
}

export default Login;