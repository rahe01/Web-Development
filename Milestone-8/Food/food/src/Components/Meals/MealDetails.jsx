import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {

    const user = useLoaderData();
    const {name } = user;

    const navigate = useNavigate();

    const handleGo = () =>{
        navigate(-1)
    }





    return (
        <div className="w-11/12 mx-auto">
            <h1>{name}</h1>
            <button className="btn btn-primary" onClick={handleGo}>Back</button>
        </div>
    );
};

export default MealDetails;