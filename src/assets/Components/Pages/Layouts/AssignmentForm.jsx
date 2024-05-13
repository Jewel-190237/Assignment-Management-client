import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useLoaderData, useNavigate } from "react-router-dom";
import { MdAddTask } from 'react-icons/md';

const AssignmentForm = () => {
    const assignment = useLoaderData();
    const navigate = useNavigate();

    const { assignmentName, difficultyLevel, assignmentTitle, assignmentMark, photo_url, dueTime, description, email } = assignment;

    const handleTakeAssignment = e => {
        e.preventDefault();

        const form = e.target;
        const assignmentLink = form.assignmentLink.value;
        const userName = form.userName.value;
        const quickNote = form.quickNote.value;

        console.log(assignmentLink, userName, quickNote);

        const submittedAssignment = { assignmentLink, userName, quickNote, assignmentName, difficultyLevel, assignmentTitle, assignmentMark, photo_url, dueTime, description, email }

        fetch('http://localhost:5000/takeAssignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submittedAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    icon: "success",
                    title: "Assignment Taken Successfully",
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate('/pendingAssignments')
            })
    }
    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold text-center mt-8 text-emerald-400">Assignments Form</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p>Crafting Your Assignment Experience. Seamlessly upload PDF files, input your username, and jot down quick notes for clarity and collaboration. Elevate your assignment submission process with ease and efficiency </p>
                </p>
            </div>
            <div className="bg-[#F4F3F0] rounded-xl w-10/12 mx-auto p-10">
                <form onSubmit={handleTakeAssignment}>
                    <div className="md:flex gap-4 ">
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text font-bold">Assignment Link: </span>
                            <input type="text" name="assignmentLink" required placeholder="Enter Your assignment doc/pdf link " className="input input-bordered w-full input-success" />
                        </div>
                        <div className="form-control md:w-1/2 p-4">
                            <span className="label-text font-bold">User Name: </span>
                            <input type="text" name="userName" required placeholder="Enter user Name" className="input input-bordered w-full input-success" />
                        </div>
                    </div>
                    <div className="form-control  p-4">
                        <span className="label-text font-bold">Quick Note: </span>
                        <input type="text" name="quickNote" required placeholder="Enter quick note" className="input input-bordered w-full input-success" />
                    </div>
                    <button className=" btn btn-block bg-emerald-300 btn-outline">
                    <MdAddTask className='text-xl'></MdAddTask>
                    <input type="submit" value="Submit Assignment" />
                </button>
                </form>
            </div>
        </div>
    );
};

export default AssignmentForm;