import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate correctly
import axios from "axios";

function AddStudent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate(); // Initialize navigate correctly

    function sendData(e) {
        e.preventDefault();

        const newStudent = {
            name,
            age,
            gender,
            phone
        };

        axios.post("http://localhost:8070/student/add", newStudent)
            .then(() => {
                alert("Student Added");
                setName("");
                setAge("");
                setGender("");
                setPhone("");
                navigate('/'); // Correct usage of navigate
            }).catch((err) => {
                alert(err);
            });
    }

    return (
        <div className="container">
            <form className="from1" onSubmit={sendData}>
                <div className="col-6 mb-3">
                    <label htmlFor="name" className="form-label">Student Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="Enter Name"
                        placeholder="Enter Your Name"
                        required
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="age" className="form-label">Student Age</label>
                    <input
                        type="text"
                        className="form-control"
                        id="age"
                        aria-describedby="Enter age"
                        placeholder="Enter Your Age"
                        required
                        onChange={(e) => {
                            setAge(e.target.value);
                        }}
                    />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="gender" className="form-label">Student Gender</label>
                    <input
                        type="text"
                        className="form-control"
                        id="gender"
                        aria-describedby="Enter Gender"
                        placeholder="Enter Your Gender"
                        required
                        onChange={(e) => {
                            setGender(e.target.value);
                        }}
                    />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="phone" className="form-label">Student Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        aria-describedby="Enter phone"
                        placeholder="Enter Your PhoneNumber"
                        required
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default AddStudent;
