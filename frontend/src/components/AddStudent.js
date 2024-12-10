import React, {}from "react";

function AddStudent(){

    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const[gender, setGender] = useState("");
    const[phone, setPhone] = useState("");


    function setData(e){
        e.preventDefault();

        const newStudent ={
            name,
            age,
            gender,
            phone
        }
        
    }
    return(
        <div Class ="container">
            <form class = "from1">
            <div class="mb-3">
                 <label for="name" class="form-label">Student  Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="Enter Name" placeholder="Enter Your Name"
                onChange= {(e)=>{
                    setName(e.target.value);
                }}/>
            </div>
         <div class="mb-3">
                 <label for="age" class="form-label">Student  Age</label>
                <input type="text" class="form-control" id="age" aria-describedby="Enter age" placeholder="Enter Your Age"
                onChange= {(e)=>{
                    setAge(e.target.value);
                }}/>
         </div>
         <div class="mb-3">
                 <label for="gender" class="form-label">Student  Gender</label>
                <input type="text" class="form-control" id="gender" aria-describedby="Enter Gender" placeholder="Enter Your Gender"
                onChange= {(e)=>{
                    setGender(e.target.value);
                }}/>
         </div>
         <div class="mb-3">
                 <label for="phone" class="form-label">Student  phone</label>
                <input type="text" class="form-control" id="phone" aria-describedby="Enter phone" placeholder="Enter Your PhoneNumber"
                onChange= {(e)=>{
                    setPhone(e.target.value);
                }}/>
         </div>
                     <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default AddStudent;