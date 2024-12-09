import React, {}from "react";

export default function AddStudent(){

    return(
        <div Class ="container">
            <form class = "from1">
            <div class="mb-3">
                 <label for="name" class="form-label">Student  Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="Enter Name"/>
         </div>
         <div class="mb-3">
                 <label for="age" class="form-label">Student  Age</label>
                <input type="text" class="form-control" id="age" aria-describedby="Enter age"/>
         </div>
         <div class="mb-3">
                 <label for="gender" class="form-label">Student  Gender</label>
                <input type="text" class="form-control" id="gender" aria-describedby="Enter Gender"/>
         </div>
         <div class="mb-3">
                 <label for="phone" class="form-label">Student  phone</label>
                <input type="text" class="form-control" id="phone" aria-describedby="Enter phone"/>
         </div>
                     <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}