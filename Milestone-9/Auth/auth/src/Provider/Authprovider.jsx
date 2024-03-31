import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut =()=>{
    setLoading(true)
    return signOut(auth)
  }


  useEffect(()=>{
   const unSubscribe =  onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser)
        console.log('ovserving current user' , currentUser)
        setLoading(false)
    })

    return ()=>{
        unSubscribe()
    }
  },[])

  const authInfo = { loading, user, createUser, singInUser , logOut};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
