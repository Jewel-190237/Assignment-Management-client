import { useLoaderData } from "react-router-dom";
import PendingAssignmentCard from "./PendingAssignmentCard";
import UseTitle from "./UseTitle";

const PendingAssignment = () => {
    UseTitle('Pending Assignment')
    const assignments = useLoaderData();
    console.log(assignments.length);
    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold text-center mt-8 text-emerald-400">Pending Assignments: {assignments.length}</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p>In Pending Assignment show now all assignment which assignment status is pending. Your Bridge to Academic Progress. Navigate through pending tasks effortlessly. Streamline your workflow and stay ahead with clear visibility into pending assignments </p>
                </p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                {
                    assignments.map(assignment => <PendingAssignmentCard key={assignment._id} assignment={assignment}></PendingAssignmentCard>)
                }
            </div>
        </div>
    );
};

export default PendingAssignment;