import { useLoaderData } from "react-router-dom";

const Feature = () => {
    const ass = useLoaderData();
    console.log(ass)

    return (
        <div>
            <h2>Feature </h2>
        </div>
    );
};

export default Feature;