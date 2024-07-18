import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { getAuth ,signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebase";
import { useFirebase } from "../context/Firebase";

const auth=getAuth(app);

const Login=()=>{
    const firebase=useFirebase();
    console.log(firebase);
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const signinUser=()=>{
        signInWithEmailAndPassword(auth,email,password).then(value=>alert("success"));
        navigate('/');
    }
    return (
        <div className="signin-page app__bg app__wrapper align">

        <div className="flex items-center justify-center">

        <div className="lg:w-[450px] bg-white py">



        </div>

        <div>

            <h1 className="headtext__cormorant" style={{ marginBottom: '1rem' }}>Login</h1>

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
                
                <button type="button" className="custom__button-2" style={{ marginTop: '2rem' } } onClick={()=>{firebase.signupGoogle();navigate('/')}}>Login with Google</button>        
                </div>

                <button type="button" className="custom__button-2" style={{ marginTop: '2rem' } } onClick={signinUser}>Login</button>        

            </form>

        </div>

        </div>

        </div>

    )

}

export default Login;