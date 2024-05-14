import { MdAddTask } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {

    const assignment = useLoaderData();

    const { _id, assignmentName, difficultyLevel, assignmentTitle, assignmentMark, photo_url, dueTime, description, email } = assignment;

    // const handleDelete = id => {
    //     console.log(id);
    //     fetch('')
    //     // deleteAssFromAssPage
    // }

    const handleDelete = id => {
        console.log(id);

        fetch(`http://localhost:5000/deleteAssFromAssPage/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="bg-slate-700 rounded-2xl p-4">
            <div>
                <h2 className="text-2xl font-bold text-center mt-8 text-emerald-400">Assignments Details of {assignmentName}</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p className="text-lime-200">Assignment Insights: Unlocking the Path to Academic Excellence. Delve into the intricacies of each task, from deadlines to resources, grading criteria, and more. Illuminate your academic path with clarity and precision through comprehensive assignment details. </p>
                </p>
            </div>
            <div className="hero ">
                <div className="flex  flex-col md:flex-col lg:flex-row w-full gap-8">
                    <div className="w-full">
                        <img className='w-full rounded-3xl p-3' src={photo_url} alt={assignmentName} />
                    </div>
                    <div className="p-3 w-full">
                        <h1 className="text-xl font-bold p-3 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl ">Assignment Name: {assignmentName}</h1>
                        <p className="m-1 p-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl ">Assignment Title : {assignmentTitle}</p>
                        <hr />
                        <p className="font-bold text-[#23BE0A] bg-[#23BE0A0D] rounded-xl p-2">Description: <span className="font-thin">{description}</span></p>
                        <hr />
                        <div >
                            <div className="p-2 text-[#23BE0A] bg-[#23BE0A0D] rounded-xl w-full">
                                <div className="flex mt-1 ">
                                    <p className="mr-12">Assignment Mark:</p>
                                    <p className="font-bold">{assignmentMark}</p>
                                </div>
                                <div className="flex mt-1 ">
                                    <p className="mr-14">Difficulty Level</p>
                                    <p className="font-bold">{difficultyLevel}</p>
                                </div>
                                <div className="flex mt-1 ">
                                    <p className="mr-12">Due Time</p>
                                    <p className="font-bold">{dueTime}</p>
                                </div>
                                <div className="flex mt-1 p-2  ">
                                    <p className="mr-16"> Email:</p>
                                    <p className="font-bold">{email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-block my-2 bg-emerald-700 ">
                <Link to={`/assignmentForm/${_id}`} >
                    <button className="flex gap-4">
                        <MdAddTask className="text-xl"></MdAddTask>
                        Take Assignment
                    </button>
                </Link>
            </button>
        </div>
    );
};

export default AssignmentDetails;