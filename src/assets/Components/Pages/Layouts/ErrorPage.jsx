import { Link, useRouteError } from "react-router-dom";
import errorPhoto from "../../../Photos/error.jpg"
import UseTitle from "./UseTitle";

const ErrorPage = () => {
    UseTitle('Error')

    const error = useRouteError();
    console.error(error);

    return (
        <div className=" mt-2 text-center justify-center align-middle" id="error-page">
            <h1 className="text-4xl font-bold mb-2">Oops!!</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            {
                error.status === 404 && <div>
                    <img className="mx-auto rounded-badge w-1/2" src={errorPhoto} alt="" />
                    <h2 className="text-2xl">Go Back where you from
                        <Link className="ml-4" to={'/'}>
                            <button className="btn btn-error rounded-xl p-4 mt-3">Home</button>
                        </Link>
                    </h2>

                </div>
            }
        </div>
    );

};

export default ErrorPage;