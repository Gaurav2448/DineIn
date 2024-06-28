import { createContext, useContext,useEffect,useState } from "react";

import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
// import { getDatabase } from "firebase/database";
const FirebaseContext=createContext(null);


const firebaseConfig = {
    apiKey: "AIzaSyCDMJhcMYuC4u_rwCs1GBtcOm0EzDT1ltE",
    authDomain: "dinein-8dcbb.firebaseapp.com",
    projectId: "dinein-8dcbb",
    storageBucket: "dinein-8dcbb.appspot.com",
    messagingSenderId: "700711024925",
    appId: "1:700711024925:web:bcee414d948063b05fc9f4",
    databaseURL: "https://dinein-8dcbb-default-rtdb.firebaseio.com/"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth=getAuth(firebaseApp);
const googleProvider=new GoogleAuthProvider();

export const useFirebase=()=>useContext(FirebaseContext);

export const FirebaseProvider=({ children })=>{
    const [user,setuser]=useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setuser(user);
            }
            else{
                setuser(null);
            }
        })
    },[])
    const signupuser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password).then(value=>alert("success"));
    }

    const signupGoogle=()=>{
        signInWithPopup(auth,googleProvider);
    }

    const logout=()=>{
        signOut(auth);
    }
    return(
        <FirebaseContext.Provider value={{signupuser,signupGoogle,user,logout}}>
            {children}
        </FirebaseContext.Provider>
    )
}


