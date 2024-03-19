import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {

    const post = useLoaderData();
    const {title} = post;


    const navigate = useNavigate();

    const handleGoback = () =>{
        navigate(-1);
    }

    const params = useParams()
    const {postId} = params;
    console.log(postId)
    return (
        <div>
            <h1>post details</h1>
            <p>Name : {title}</p>
            <button onClick={handleGoback}>Go Back</button>
        </div>
    );
};

export default PostDetails;