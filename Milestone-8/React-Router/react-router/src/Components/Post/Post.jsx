import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {

    const {id , title} =post;

    const navigate = useNavigate()


    const userStyle ={
        border : '2px solid red',
        padding : '5px',
        borderRadius : '15px' 
    }

    const handleShowDetails = () =>{
        navigate(`/post/${id}`)

    }


    return (
        <div style={userStyle}>
            <p>Id {id}</p>
            <h1>{title}</h1>

            <Link to={`/post/${id}`}>Details</Link>
            <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};

export default Post;