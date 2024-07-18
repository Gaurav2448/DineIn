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
        <div className="signup-page app__bg app__wrapper align">

            <div className="flex justify-center items-center">

            <div>

            <h3 className="headtext__cormorant" style={{ marginBottom: '1rem' }}>Sign up</h3>

            <form>

                <div>  
                    <label><p className="p__cormorant" style={{ color: '#DCCA87' }}>Email :</p></label>
                    <input onChange={e=>setEmail(e.target.value)} value={email} type="email" required placeholder="Enter your email" className='input-box-2' />
                </div>

        

                <div>
                    <label><p className="p__cormorant" style={{ color: '#DCCA87' }}>Password :</p></label>
                    <input onChange={e=>setPassword(e.target.value)} value={password} type="password" required placeholder="Enter your password" className='input-box-2'/>
                </div>

                <div>
                
                <button type="button" className="custom__button-3" style={{ marginTop: '2rem' } } onClick={()=>{firebase.signupGoogle();navigate('/')}}>Signup with Google</button>        
                </div>

                <div>
                <button type="button" className="custom__button-3" style={{ marginTop: '2rem' } } onClick={()=>{firebase.signupuser(email,password);navigate('/login')}}>Signup</button>        
                </div>

            </form>

        </div>

            </div>

        </div>
    )
}

export default SignupPage;