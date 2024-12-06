 const router = require("express").Router();
 let Student = require("../models/Student");

//insert part 
 router.route("/add").post((req,res) => { // post method use 

    const name = req.body.name;      //user input krm en requset ek ekke body ek athule ek eliyt gnn body kiyl dnw 
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const phone = Number(req.body.phone);

    const newStudent = new Student({
        name,
        age,
        gender,
        phone
    })

    newStudent.save().then(()=>{

        res.json("Student Added")    //success 
    }).catch((err)=>{
        console.log(err);            // error   
    })

 })


//read part 

router.route("/").get((req,res) => {

    Student.find().then((students)=>{        //response ekak yawann  then catch method
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})       


//update part
router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;    //   "/update/:studentid" id use to this line params.studentid
    //const name = req.body.name;
    //const age = req.body.age;          you can use this type deta save 
    
    const {name ,age , gender , phone} = req.body;    //destructure method use 

    const updateStudent = {
        name,
        age,
        gender,
        phone
    }

    const update = await Student.findByIdAndUpdate(userId, updateStudent)    //first pass id second pass object   // udpateStudent or {name,age,gender,phone}
            .then(() =>{
                res.status(200).send({status: "User Updated"})
            }).catch((err)=>{
                console.log(err);
                res.status(500).send({status: "Error with updating data",error :err.message});
            })


})

//delete part
router.route("/delete/:id").delete(async (req, res) =>{
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId)
        .then(()=> {
            res.status(200).send({status: "User deleted" });
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with delete user", error: err.message});
        })
})


router.route("/get/:id").get(async (req,res)=> {
    let userId = req.params.id;

    await Student.findById(userId)
        .then((student)=>{
            res.status(200).send({status: "User fetched", user: student})
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with get user ", error: err.message});
        })
})

 module.exports = router;
