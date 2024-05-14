/* eslint-disable react/prop-types */
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const MyAssignmentCard = ({ assignment, assignments, setAssignments }) => {
    const { _id, photo_url, assignmentName, obtainedMark, assignmentTitle, assignmentMark, status, feedback } = assignment;

    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this Art",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-livid-pi.vercel.app/deleteAssignment/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const remaining = assignments.filter(ass => ass._id !== _id)
                        setAssignments(remaining)
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="card bg-slate-700 shadow-xl mb-4 p-4">
            <figure><img src={photo_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-green-600 text-2xl font-bold">
                    {assignmentName}
                </h2>
                <p className="text-green-600 font-bold mb-4">Assignment Title: <span className="font-bold ml-5"> {assignmentTitle} </span> </p>
                <hr />
                <p className="text-green-600 font-bold">Assignment: </p>
                <p className="text-green-600"> Assignment Mark: <span className="font-bold ml-5"> {assignmentMark} </span> </p>
                <p className="text-green-600">My Obtained Mark: <span className="font-bold ml-5"> {obtainedMark} </span></p>
                <p className="text-green-600">Assignment Status: <span className="font-bold ml-5"> {status} </span></p>
                <p className="text-green-600">Feedback: <span className="font-bold ml-5"> {feedback} </span></p>
                <hr />

                <div className="flex gap-2 justify-between pr-4">
                    
                    <Link className=" btn btn-outline btn-block bg-emerald-800 my-2">
                        <button onClick={() => handleDelete(_id)} className="flex gap-4">
                            <RiDeleteBin6Fill></RiDeleteBin6Fill>
                            Delete
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyAssignmentCard;