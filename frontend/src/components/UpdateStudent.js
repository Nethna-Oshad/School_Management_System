import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateStudent() {
    const { id } = useParams(); // Getting the student ID from the route
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        // Fetch the current student data
        axios.get(`http://localhost:8070/student/get/${id}`)
            .then((res) => {
                const { name, age, gender, phone } = res.data.user; // Accessing user object in the response
                setName(name);
                setAge(age);
                setGender(gender);
                setPhone(phone);
            })
            .catch((err) => alert("Failed to fetch student data: " + err.message));
    }, [id]);

    function updateStudent(e) {
        e.preventDefault();

        const updatedStudent = { name, age, gender, phone };

        axios.put(`http://localhost:8070/student/update/${id}`, updatedStudent)
            .then(() => {
                alert("Student Updated Successfully!");
                navigate("/"); // Redirect to the home page after updating
            })
            .catch((err) => alert("Failed to update student: " + err.message));
    }

    return (
        <div className="container">
            <h2>Update Student</h2>
            <form onSubmit={updateStudent}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Student Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Student Age</label>
                    <input
                        type="number"
                        className="form-control"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Student Gender</label>
                    <select
                        className="form-control"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Student Phone</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
                <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => navigate("/")}
                >
                    Back
                </button>
            </form>
        </div>
    );
}

export default UpdateStudent;
