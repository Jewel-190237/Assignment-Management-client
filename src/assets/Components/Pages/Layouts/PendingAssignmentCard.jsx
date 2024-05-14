/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const PendingAssignmentCard = ({ assignment }) => {
    const { _id, photo_url, assignmentName, assignmentTitle, assignmentMark, userName } = assignment;

    const handleDelete = id => {
        console.log(id);

        fetch(`http://localhost:5000/deletePendingAssignment/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <div className="card bg-slate-700 shadow-xl mb-4 p-4">
                <figure><img src={photo_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-green-600 text-2xl font-bold">
                        {assignmentName}
                    </h2>
                    <p className="text-green-600 font-bold mb-4">Assignment Title: <span className="font-bold ml-5"> {assignmentTitle} </span> </p>
                    <hr />
                    <p className="text-green-600 font-bold">Assignment: </p>
                    <p className="text-green-600">Assignment Mark: <span className="font-bold ml-5"> {assignmentMark} </span> </p>
                    <p className="text-green-600">Examinee name: <span className="font-bold ml-5"> {userName} </span> </p>
                    <p className="text-green-600">Status: <span className="font-bold ml-5"> Pending </span> </p>
                    <hr />
                    <button onClick={() => handleDelete(_id)}>
                        <Link to={`/giveMark/${_id}`} className="btn btn-outline btn-block bg-emerald-800 ">
                            <button className="flex gap-4">
                                Give Mark
                            </button>
                        </Link>
                    </button>
                    <div className="flex gap-2 justify-between pr-4">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PendingAssignmentCard;