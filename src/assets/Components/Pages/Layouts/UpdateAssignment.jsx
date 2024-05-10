import { useLoaderData } from "react-router-dom";

const UpdateAssignment = () => {
    const assignment = useLoaderData();
    const { assignmentName, difficultyLevel, assignmentTitle, assignmentMark, photo_url, dueTime, description } = assignment;
    const handleCreateAssignment = () => {

    }

    return (
        <div className="bg-[#F4F3F0] rounded-xl">
            <h2 className="text-3xl text-center p-4 text-cyan-400 font-bold">Update { assignmentName}</h2>
            <form onSubmit={handleCreateAssignment}>
                <div className="md:flex gap-4 ">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text">Name</span>
                        <input type="text" name="assignmentName" defaultValue={assignmentName} className="input input-bordered w-full input-success" />
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text">difficulty level</span>
                        <select className='input input-bordered  w-full input-success' defaultValue={difficultyLevel} name="difficultyLevel"  id="">
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex gap-4 ">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text">Assignment Title</span>
                        <input type="text" name="assignmentTitle" defaultValue={assignmentTitle} className="input input-bordered w-full input-success" />
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text">Assignment Mark</span>
                        <input type="number" name="assignmentMark" defaultValue={assignmentMark} className="input input-bordered w-full input-success" />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text">Photo url</span>
                        <input type="text" name="photo_url" defaultValue={photo_url} className="input input-success input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2 p-4">
                        <span className="label-text">Due time</span>
                        <input type="time" name="dueTime" defaultValue={dueTime} className="input input-bordered w-full input-success" />
                    </div>
                </div>
                <div className="md:flex gap-4 mb-4 ">
                    <div className="form-control w-full p-4">
                        <span className="label-text">Description</span>
                        <input type="text" name="description" defaultValue={description} className="input input-success input-bordered w-full" />
                    </div>
                </div>
                <input className="btn btn-block bg-cyan-800 text-white mb-8" type="submit" value="Update Assignment" />
            </form>
        </div>
    );
};

export default UpdateAssignment;