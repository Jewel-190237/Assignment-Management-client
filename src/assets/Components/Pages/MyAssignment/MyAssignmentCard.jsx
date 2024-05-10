/* eslint-disable react/prop-types */
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";

const MyAssignmentCard = ({ assignment }) => {
    const { _id,photo_url, assignmentName, difficultyLevel, assignmentTitle, assignmentMark } = assignment

    return (
        <div className="card bg-slate-100 shadow-xl mb-4 p-4">
            <figure><img src={photo_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-green-600 text-2xl font-bold">
                    {assignmentName}
                </h2>
                <p className="text-green-600 text-xl font-bold mb-4">Assignment Title: <span className="font-bold ml-5"> ${assignmentTitle} </span> </p>
                <hr />
                <p className="text-green-600 text-xl font-bold">Assignment: </p>
                <p className="text-green-600">Mark <span className="font-bold ml-5"> {assignmentMark} </span> </p>
                <p className="text-green-600">Difficulty Level: <span className="font-bold ml-5"> {difficultyLevel} </span></p>
                <hr />
                <Link to={`/updateAssignments/${_id}`} className="btn btn-outline my-2 ">
                            <button className="flex gap-4 text-green-600">
                                <GrUpdate></GrUpdate>
                                Update
                            </button>
                        </Link>
                {/* <div className="flex gap-2 justify-between">
                        <Link to={`/updateAssignments/${_id}`} className="btn btn-outline my-2 ">
                            <button className="flex gap-4 text-green-600">
                                <GrUpdate></GrUpdate>
                                Update
                            </button>
                        </Link>
                        <Link className="btn btn-outline w-1/2 my-2">
                            <button onClick={() => handleDelete(_id)} className="flex gap-4 text-green-600">
                                <RiDeleteBin6Fill></RiDeleteBin6Fill>
                                Delete
                            </button>
                        </Link>
                        <Link className="btn btn-outline w-1/2 my-2">
                            <button onClick={() => handleDelete(_id)} className="flex gap-4 text-green-600">
                                <RiDeleteBin6Fill></RiDeleteBin6Fill>
                                Delete
                            </button>
                        </Link>
                    </div> */}
            </div>
        </div>
    );
};

export default MyAssignmentCard;