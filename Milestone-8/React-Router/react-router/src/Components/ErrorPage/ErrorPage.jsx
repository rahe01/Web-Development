import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError()
    console.log(error)


    return (
        <div>
            <h1>Opps</h1>
            <p>
                {error.statusText || error.message}
            </p>

            {
                error.status === 404 &&
               <div>
                 <p>Page not found</p>
                <Link to='/' >Home</Link>
               </div>
            }
        </div>
    );
};

export default ErrorPage;