import { Link } from "react-router-dom";

const User = ({user}) => {

    const {id, name, email, } = user;

    const userStyle ={
        border : '2px solid red',
        padding : '5px',
        borderRadius : '15px' 
    }


    return (
        <div style={userStyle}>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Id : {id}</p>
            <Link to={`/user/${id}`}> Show details</Link>
            <Link to={`/user/${id}`}><button>Click ME</button></Link>
        </div>
    );
};

export default User;