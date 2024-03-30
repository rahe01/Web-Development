import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [regiError , setRegierror] = useState('')
    const [success , setSuccess] = useState('')
    const [showPass , setShow] = useState(false)


    const handleRegister = e =>{
        e.preventDefault();
        console.log("Register")
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accpted = e.target.terms.checked;
        const name = e.target.name.value;
        console.log(email, password)
        setRegierror('')
        setSuccess('')
        if(password.length < 6){
            setRegierror('Password must be at least 6 characters longer');
            return
        }

        else if(!/[A-Z]/.test(password)){
            setRegierror('Password must contain at least one uppercase letter');
            return 
        }
        else if(!accpted){
            setRegierror('You must accept the terms and conditions');
            return
        }
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user)
            setSuccess('user created successfully')
            sendEmailVerification(result.user)
            .then(
              alert('check email')
            )
        })
        .catch(error => {
             console.log(error.message)
             setRegierror(error.message)
 
        })
    }



  return (
    <div className="">
      <div className="w-1/2 mx-auto">
        <h1>Registation</h1>
        <form onSubmit={handleRegister}>
          <input className="mb-4" type="email" name="email" id="" required /> <br />
          <input className="mb-4" type="text" name="name" placeholder="name" id="" required /> <br />
          <input type={showPass ? 'text': 'password'} name = 'password' id=""required/> <br />

          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">Accept terms</label>
          <br />
          <span onClick={()=>setShow(!showPass)}>Show</span>
          <input type="submit" value="Register" />
        </form>
        {regiError && <p>{regiError}</p>}
        {success && <p>{success}</p>}

        <p>Already account<Link to={'/login'}>Log in</Link> </p>
      </div>
    </div>
  );
};

export default Register;
