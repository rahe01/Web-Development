import { Link, useNavigate } from "react-router-dom";


const ErrorPage = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }



    return (
        <div>
          <h1>Opps</h1>  
          <button> <Link onClick={handleNavigate} >Back</Link> </button>
        </div>
    );
};

export default ErrorPage;