import { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function DeleteStudent() {
    const { id } = useParams(); // Extract the student ID from the URL
    const navigate = useNavigate();

    useEffect(() => {
        // Prompt the user to confirm the deletion
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (confirmDelete) {
            // If confirmed, send the delete request
            axios
                .delete(`http://localhost:8070/student/delete/${id}`)
                .then(() => {
                    alert("Student deleted successfully!");
                    navigate("/"); // Redirect to the homepage
                })
                .catch((err) => {
                    alert("Failed to delete student: " + err.message);
                });
        } else {
            navigate("/"); // Redirect back if the user cancels
        }
    }, [id, navigate]);

    return null; // No UI is needed since it's a deletion operation
}

export default DeleteStudent;
