import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {

    const users = useLoaderData();


    console.log(users);



    return (
        <div>
            <h1>I am a users component</h1>
            <p>Users : {users.length}</p>

            <div className="users">
                {
                    users.map((user , idx) => <User key={idx} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;