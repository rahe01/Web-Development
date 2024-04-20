import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadeduser = useLoaderData()
    const [user , setuser] = useState(loadeduser)

    console.log(user)
    const handleDelet = _id =>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'

        })
        .then((res) => res.json())
        .then(data => {
            const deletedCount = data.deletedCount;
            if(deletedCount > 0){
                alert('deleted successfully')
                const remaining = user.filter(user => user._id !== _id);
                setuser(remaining)
        }})
    

    }
    return (
        <div>
           <h1>Users : {user.length}</h1> 
           <div>
            {
                user.map(user => <p key={user._id}>{user.name} : {user.email}
                
                
                
                <Link to={`/update/${user._id}`}><button>Update</button></Link>
                
                
                 <button onClick={() => handleDelet(user._id)}
                >X</button></p>)
            }
           </div>
        </div>
    );
};

export default Users;