import { useLoaderData, useNavigate } from "react-router-dom";
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useContext } from "react";
import { authContext } from "../../provider/AuthProvider";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import UseTitle from "./UseTitle";
const GiveMark = () => {
    UseTitle('Give Mark')
    const assignment = useLoaderData();

    const navigate = useNavigate();
    const { user } = useContext(authContext);
    const email = user.email;


    const { assignmentLink, photo_url, difficultyLevel, dueTime, description, assignmentName, assignmentTitle, assignmentMark, userName, quickNote } = assignment;

    const status = 'Completed';

    // const { _id,assignmentName, difficultyLevel, assignmentTitle, assignmentMark, photo_url, dueTime, description } = assignment;

    console.log(assignment);

    const handleMarkAssignment = event => {
        event.preventDefault();

        const form = event.target;
        const obtainedMark = form.obtainedMark.value;
        const feedback = form.feedback.value;

        const myAssignment = { assignmentName, assignmentMark, assignmentTitle, obtainedMark, feedback, status, photo_url, description, dueTime, difficultyLevel, email }

        fetch('https://assignment-11-server-livid-pi.vercel.app/myAssignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    icon: "success",
                    title: "Assignment mark given successfully",
                    showConfirmButton: false,
                    timer: 2000
                });

                navigate('/myAssignments')

            })
    }

    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold text-center mt-8 text-emerald-400">Give Assignment Mark and Feedback</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p>GiveAssignment mark and Feedback page, the nucleus of academic growth and collaboration. Here, creators craft assignments while collaborators provide constructive feedback, fostering a vibrant ecosystem of learning and progress</p>
                </p>
            </div>
            <div className="card  bg-slate-700 mb-4 p-4 md:w-1/2 w-full mx-auto">
                <div className="card-body">
                    <h2 className="text-green-600 text-2xl font-bold text-center">
                        Assignment Name: {assignmentName}
                    </h2>
                    <hr />
                    <p className="text-green-600">Examinee name <span className="font-bold ml-5"> {userName} </span> </p>
                    <p className="text-green-600">Quick Note<span className="font-bold ml-5"> {quickNote} </span> </p>
                </div>
            </div>

            <div className="bg-slate-700 rounded-xl w-10/12 mx-auto p-10">
                <form onSubmit={handleMarkAssignment}>
                    <div className="md:flex gap-4 ">
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text font-bold">Give Mark: </span>
                            <input type="number" name="obtainedMark" required placeholder="Enter obtained Mark" className="input input-bordered w-full input-success" />
                        </div>
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text font-bold">Feedback: </span>
                            <input type="text" name="feedback" required placeholder="Enter Feedback" className="input input-bordered w-full input-success" />
                        </div>
                    </div>
                    <button className=" btn btn-block bg-emerald-800 btn-outline">
                        <IoCheckmarkDoneCircle className="text-xl"></IoCheckmarkDoneCircle>
                        <input type="submit" value="Submit" />
                    </button>
                </form>
            </div>
            {/* show pdf file after submit link of a pdf file */}
            <div>
                <iframe className="mx-auto mt-8 w-full h-96 p-2 my-1" src={assignmentLink} allow="autoplay"></iframe>
            </div>
        </div>
    );
};

export default GiveMark;