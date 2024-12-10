import React, { useState }from "react";
import axios from "axios";

function AddStudent(){

    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const[gender, setGender] = useState("");
    const[phone, setPhone] = useState("");


    function sendData(e){
        e.preventDefault();

        const newStudent ={
            name,
            age,
            gender,
            phone  
        }

        axios.post("http://localhost:8070/student/add",newStudent)
            .then(()=>{
                alert("Student Added")
                setName("");
                setAge("");
                setGender("");
                setPhone("");
            }).catch((err)=>{
                alert(err)
            })
        
    }
    return(
        <div Class ="container">
            <form class = "from1" onSubmit={sendData}>
            <div class="mb-3">
                 <label for="name" class="form-label">Student  Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="Enter Name" placeholder="Enter Your Name"required 
                onChange= {(e)=>{
                    setName(e.target.value);
                }}/>
            </div>
         <div class="mb-3">
                 <label for="age" class="form-label">Student  Age</label>
                <input type="text" class="form-control" id="age" aria-describedby="Enter age" placeholder="Enter Your Age"required 
                onChange= {(e)=>{
                    setAge(e.target.value);
                }}/>
         </div>
         <div class="mb-3">
                 <label for="gender" class="form-label">Student  Gender</label>
                <input type="text" class="form-control" id="gender" aria-describedby="Enter Gender" placeholder="Enter Your Gender"required 
                onChange= {(e)=>{
                    setGender(e.target.value);
                }}/>
         </div>
         <div class="mb-3">
                 <label for="phone" class="form-label">Student  phone</label>
                <input type="text" class="form-control" id="phone" aria-describedby="Enter phone" placeholder="Enter Your PhoneNumber" required 
                onChange= {(e)=>{
                    setPhone(e.target.value);
                }}/>
         </div>
                     <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>

    )
}

export default AddStudent;        
