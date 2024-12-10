import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function AllStudents() {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate(); // Define navigate here

    useEffect(() => {
        axios.get("http://localhost:8070/student/")
            .then((res) => {
                setStudents(res.data);
            })
            .catch((err) => {
                alert("Failed to fetch students: " + err.message);
            });
    }, []);

    return (
        <div className="container">
            <h2>All Students</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student._id || index}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>{student.phone}</td>
                            <td>
                                <button
                                    onClick={() => navigate(`/update/${student._id}`)}
                                    className="btn btn-primary"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => navigate(`/delete/${student._id}`)}
                                    className="btn btn-danger ms-2"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllStudents;
