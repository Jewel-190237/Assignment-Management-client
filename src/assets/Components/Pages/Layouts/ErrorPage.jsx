import { Link, useRouteError } from "react-router-dom";
import errorp from "../../../../assets/error.jpg"

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div className=" mt-2 text-center justify-center align-middle" id="error-page">
            <h1 className="text-2xl">Oops!!</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            {
                error.status === 404 && <div>
                    <h2 className="text-2xl">Page not Found</h2>
                    <img className="mx-auto rounded-badge w-1/2" src={errorp} alt="" />
                    <h2 className="text-2xl">Go Back where you from
                        <Link className="ml-4" to={'/'}>
                            <button className="btn btn-error rounded-xl p-4">Home</button>
                        </Link>
                    </h2>

                </div>
            }
        </div>
    );

};

export default ErrorPage;