/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

import { GrUpdate } from "react-icons/gr";
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";
import UseTitle from "./UseTitle";

const AssignmentCard = ({ assignment }) => {
    UseTitle('Assignments')
    const { _id, photo_url, assignmentName, difficultyLevel, assignmentTitle, assignmentMark } = assignment;
    return (
        <div>
            <div className="card bg-slate-700 shadow-xl mb-4 p-4">
                <figure><img src={photo_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-green-600 text-2xl font-bold">
                        {assignmentName}
                    </h2>
                    <p className="text-green-600 font-bold mb-4"><span className="font-bold"> {assignmentTitle} </span> </p>
                    <hr/>
                    <p className="text-green-600 text-xl font-bold">Assignment: </p>
                    <p className="text-green-600">Mark <span className="font-bold ml-5"> {assignmentMark} </span> </p>
                    <p className="text-green-600">Difficulty Level: <span className="font-bold ml-5"> {difficultyLevel} </span></p>
                    <hr />
                    <div className="flex justify-between gap-4">
                        <Link to={`/assignmentDetails/${_id}`} className="btn btn-outline my-2 bg-emerald-800 w-1/2">
                            <button className="flex gap-4 ">
                                <FcViewDetails></FcViewDetails>
                                Details
                            </button>
                        </Link>
                        <Link to={`/updateAssignment/${_id}`} className="btn btn-outline my-2 bg-emerald-800 w-1/2">
                            <button className="flex gap-4">
                                <GrUpdate></GrUpdate>
                                Update
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;