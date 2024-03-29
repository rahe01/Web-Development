import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";
import { GithubAuthProvider } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  const googleprovider = new GoogleAuthProvider();
  const githubprovider = new GithubAuthProvider();
  console.log(auth);

  const handleGoogleSingin = () => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const loggedinuser = result.user;
        setUser(loggedinuser);
        console.log(user);
      })

      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSingOut = () => {
      signOut(auth)
      .then(result =>{
         setUser(null);
         console.log(user);
         console.log(result);
 
      })
      .catch((error) => {
         console.log("error", error.message);
       });
  }

  const handleGithubSingIn =()=>{
    signInWithPopup(auth,githubprovider)
     .then((result) => {
        const loggedinuser = result.user;
        setUser(loggedinuser);
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  }
  return (
    <div>
    {  user ?  <button onClick={handleSingOut}>Sing Out</button> :
    <div><button onClick={handleGoogleSingin}>Google Sign In</button>    
    
    <button onClick={handleGithubSingIn}>Github</button>
    </div>
    
      }
      <div>
        {user && <h3>User : {user?.displayName}</h3>}
        {user && <h3>Email : {user?.email}</h3>}
        <img src={user?.photoURL} alt="" />
      </div>
    </div>
  );
};

export default Login;
