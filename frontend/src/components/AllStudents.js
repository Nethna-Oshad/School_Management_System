import React, {useState,useEffect}from 'react';
import axios from "axios";

function AllStudents(){

    const [students, setStudents] = useState([]);

    useEffect(()=>{
        function getStudents(){
            axios.get("http://localhost:8070/student/")
            .then((res)=>{
                console.log(res.data);
                setStudents(res.data);
                 
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getStudents();
    },[])

    return(
        <div className="container">
        <h1>All Students</h1>
        {/* Check if students array has data */}
        {students.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Updates</th>
                <th>Delete</th>
                
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id || index}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.gender}</td>
                  <td>{student.phone}</td>
                  <td><button>Update</button></td>
                  <td><button href>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No students found</p> // Show message if no data is available
        )}
      </div>
    )

}

export default AllStudents;