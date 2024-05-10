import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";

const Assignments = () => {
    const assignments = useLoaderData();
    console.log(assignments.length);

    return (
        <div>
            <h2 className="text-2xl font-bold text-center text-cyan-800">Assignments: {assignments.length}</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                {
                    assignments.map(assignment => <AssignmentCard key={assignment._id}
                        assignment={assignment}
                    ></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;