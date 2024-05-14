import { useLoaderData, useNavigate } from "react-router-dom";
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { GrUpdate } from "react-icons/gr";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";


const UpdateAssignment = () => {
    const assignment = useLoaderData();
    const [startDate, setStartDate] = useState(new Date());

    console.log(assignment);

    const navigate = useNavigate();

    const { _id, assignmentName, difficultyLevel, assignmentTitle, assignmentMark, photo_url, dueTime, description } = assignment;

    const handleUpdateAssignment = event => {
        event.preventDefault();
        const form = event.target;

        const assignmentName = form.assignmentName.value;
        const difficultyLevel = form.difficultyLevel.value;
        const assignmentTitle = form.assignmentTitle.value;
        const assignmentMark = form.assignmentMark.value;
        const photo_url = form.photo_url.value;
        // const dueTime = form.dueTime.value;
        const description = form.description.value;

        const newAssignment = { assignmentName, difficultyLevel, assignmentTitle, assignmentMark, photo_url, dueTime, description }

        console.log(newAssignment);

        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-livid-pi.vercel.app/updateAssignment/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newAssignment)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                Swal.fire("Saved!", "", "success");
                navigate('/assignments')
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });

    }

    return (
        <div className="bg-slate-700 rounded-xl w-10/12 mx-auto p-10">
            <div>
                <h2 className="text-3xl font-bold text-center mt-8 text-emerald-400">Update of {assignmentName}</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p className="text-lime-200">Revamp Your Learning Journey: The Update Assignment Hub. Transform your academic path with seamless assignment updates. Stay agile, stay informed, and propel your progress forward effortlessly.</p>
                </p>
            </div>
            <form onSubmit={handleUpdateAssignment}>
                <div className="md:flex gap-4 ">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Name: </span>
                        <input type="text" name="assignmentName" defaultValue={assignmentName} className="input input-bordered w-full input-success" />
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Difficulty level</span>
                        <select className='input input-bordered  w-full input-success ' defaultValue={difficultyLevel} name="difficultyLevel" id="">
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex gap-4 ">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Assignment Title: </span>
                        <input type="text" name="assignmentTitle" defaultValue={assignmentTitle} className="input input-bordered w-full input-success" />
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Assignment Mark: </span>
                        <input type="number" name="assignmentMark" defaultValue={assignmentMark} className="input input-bordered w-full input-success" />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text text-lime-200">Photo url: </span>
                        <input type="text" name="photo_url" defaultValue={photo_url} className="input input-success input-bordered w-full" />
                    </div>
                    <div defaultValue={dueTime} className="form-control p-4 ">
                        <p className="text-lime-200">Select Due Time:</p>
                        <DatePicker className=" input input-success  input-bordered " showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                <div className="md:flex gap-4 mb-4 ">
                    <div className="form-control w-full p-4">
                        <span className="label-text text-lime-200">Description: </span>
                        <input type="text" name="description" defaultValue={description} className="input input-success input-bordered w-full" />
                    </div>
                </div>
                <button className=" btn btn-block bg-emerald-800 btn-outline">
                    <GrUpdate className="text-xl"></GrUpdate>
                    <input type="submit" value="Update Assignment" />
                </button>
            </form>
        </div>
    );
};

export default UpdateAssignment;