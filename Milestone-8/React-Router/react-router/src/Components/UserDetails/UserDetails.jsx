import { useLoaderData } from "react-router-dom";


const UserDetails = () => {

    const user = useLoaderData()

    const {name} = user


    return (
        <div>
            <h1>Detailsssssssssssssssss : {name}</h1>
            
        </div>
    );
};

export default UserDetails;