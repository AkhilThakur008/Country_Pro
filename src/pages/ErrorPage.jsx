import { use } from "react";
import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    
    const error=useRouteError();
    console.log(error);
    return (
        <div>
            <h1>OOPS!</h1>
            <h2>Something Went Wrong</h2>
            <h3>{error && <p>{error.data}</p>} {<p>statusCode:{error.status}</p>}</h3>
            <NavLink to="/">Back to Home</NavLink>
        </div>
    );
}