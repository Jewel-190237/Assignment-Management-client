/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useEffect, useState } from "react";

const Assignments = () => {
    const assignments = useLoaderData();
    console.log(assignments.length);
    const [assignment, setAssignment] = useState(assignments)

    const [value, setValue] = useState([]);

    const handleLevel = (event) => {
        setValue(event.target.value)
    }
    const level = value.toString();
    // const level = 'Easy';
    // const level = 'Medium';
    console.log(typeof level)
    console.log(level)

    useEffect(() => {
        fetch(`http://localhost:5000/assignmentLevel?difficultyLevel=${level}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAssignment(data)
            })
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold text-center mt-8 text-emerald-400">Assignments: {assignments.length}</h2>
            <p className="text-center mx-auto md:w-3/4 mb-10">
                <p>Welcome to Assignment Central: Your All-in-One Destination for Assignment Management and Collaboration. Streamline your workflow, track your progress, and foster collaboration with ease. Here, every task finds its place, ensuring efficiency and clarity in your academic journey. </p>
            </p>
            
            <p className="text-center font-bold m-4 text-emerald-400 text-xl ">Difficulty Level:
                <select className='text-xl form-select ml-8' name="difficultyLevel" onChange={handleLevel} >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                {
                    assignment.map(assignment => <AssignmentCard key={assignment._id}
                        assignment={assignment}
                    ></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;