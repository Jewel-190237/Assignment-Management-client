import { useContext, useEffect, useState } from "react";
import { authContext } from "../../provider/AuthProvider";
import MyAssignmentCard from "./MyAssignmentCard";

const MyAssignment = () => {
    const { user } = useContext(authContext);
    const [assignments, setAssignments] = useState([])

    const url = `http://localhost:5000/assignmentsEmail?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAssignments(data)
            })
    }, [])
    return (
        <div>
            <h2> Assignment: {assignments.length}</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {
                assignments.map(ass => <MyAssignmentCard key={ass._id}
                    assignment={ass}
                >
                </MyAssignmentCard>)
            }
            </div>
        </div>
    );
};

export default MyAssignment;