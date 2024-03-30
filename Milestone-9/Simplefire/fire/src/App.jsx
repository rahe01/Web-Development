
import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from './Firebase/firebase.init';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(null);
  console.log(user);

  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
  console.log(auth)

  const handleGoogleSingIn = () =>{
    signInWithPopup(auth, provider)
    .then((result) =>{

      const logiinuser = result.user;
      
      setUser(logiinuser);

    })

    .catch((error) => {
       console.log(error);
     });
  }


  const handleSingOut = () => {
    signOut(auth)
    .then(() => {
       setUser(null);
     })
     .catch((error) => {
       console.log(error);
     });
  }
  

  return (
    <>
    <button onClick={handleGoogleSingIn}>Google SingIn</button>
    { user && <h1>Name: {user?.displayName}</h1>}
    <button onClick={handleSingOut}>Sing Out</button>
    </>
  )
}

export default App
