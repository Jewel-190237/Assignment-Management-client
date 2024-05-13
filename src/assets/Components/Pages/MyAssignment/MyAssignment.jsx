import { useContext, useEffect, useState } from "react";
// import { authContext } from "../../provider/AuthProvider";
import MyAssignmentCard from "./MyAssignmentCard";
import { authContext } from "../../provider/AuthProvider";

const MyAssignment = () => {

    const [assignments, setAssignments] = useState([]);

    const { user } = useContext(authContext);

    const url = `http://localhost:5000/takeAssignmentsAll?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAssignments(data)
            })
    }, []);

    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold text-center mt-8 text-emerald-400">My Assignment</h2>
                <p className="text-center mx-auto md:w-3/4 mb-10">
                    <p>GiveAssignment mark and Feedback page, the nucleus of academic growth and collaboration. Here, creators craft assignments while collaborators provide constructive feedback, fostering a vibrant ecosystem of learning and progress</p>
                </p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                {
                    assignments.map(ass => <MyAssignmentCard key={ass._id}
                        assignment={ass}
                        assignments={assignments}
                        setAssignments={setAssignments}
                    >
                    </MyAssignmentCard>)
                }
            </div>
        </div>
    );
};

export default MyAssignment;