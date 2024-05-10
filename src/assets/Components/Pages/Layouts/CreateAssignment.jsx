import { useContext } from "react";
import { authContext } from "../../provider/AuthProvider";
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const CreateAssignment = () => {

    const { user } = useContext(authContext);
    const email = user.email;

    const handleCreateAssignment = event => {
        event.preventDefault();
        const form = event.target;

        const assignmentName = form.assignmentName.value;
        const difficultyLevel = form.difficultyLevel.value;
        const assignmentTitle = form.assignmentTitle.value;
        const assignmentMark = form.assignmentMark.value;
        const photo_url = form.photo_url.value;
        const dueTime = form.dueTime.value;
        const description = form.description.value;

        const newAssignment = { email, assignmentName, difficultyLevel, assignmentTitle, assignmentMark, photo_url, dueTime, description }

        console.log(newAssignment)

        fetch('http://localhost:5000/assignments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    icon: "success",
                    title: "Art Added Successfully",
                    showConfirmButton: false,
                    timer: 2000
                });

                // navigate('/myCurt')

            })
    }
    return (
        <div className="bg-[#F4F3F0] rounded-xl">
            <h2 className="text-3xl text-center p-4 text-cyan-400 font-bold">Create a new Assignment</h2>
            <form onSubmit={handleCreateAssignment}>
                <div className="md:flex gap-4 ">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text">Name</span>
                        <input type="text" name="assignmentName" placeholder="Enter Assignment Name" className="input input-bordered w-full input-success" />
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text">difficulty level</span>
                        <select className='input input-bordered w-full input-success' name="difficultyLevel" id="">
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex gap-4 ">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text">Assignment Title</span>
                        <input type="text" name="assignmentTitle" placeholder="Enter Assignment Title" className="input input-bordered w-full input-success" />
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text">Assignment Mark</span>
                        <input type="number" name="assignmentMark" placeholder="Enter Assignment Mark" className="input input-bordered w-full input-success" />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text">Photo url</span>
                        <input type="text" name="photo_url" placeholder="Enter Photo url" className="input input-success input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text">Due time</span>
                        <input type="time" name="dueTime" placeholder="Enter processing Time" className="input input-bordered w-full input-success" />
                    </div>
                </div>
                <div className="md:flex gap-4 mb-4 ">
                    <div className="form-control w-full p-4">
                        <span className="label-text">Description</span>
                        <input type="text" name="description" placeholder="Enter Assignment Description" className="input input-success input-bordered w-full" />
                    </div>
                </div>
                <input className="btn btn-block bg-cyan-800 text-white mb-8" type="submit" value="Create Assignment" />
            </form>
        </div>
    );
};

export default CreateAssignment;