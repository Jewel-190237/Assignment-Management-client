import { useLoaderData } from "react-router-dom";

const Feature = () => {
    const card = useLoaderData();
    console.log(card);

    return (
        <div>
            <h2>Feature </h2>
        </div>
    );
};

export default Feature;