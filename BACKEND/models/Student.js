const mongoose = require(`mongoose`);

const studentschema = mongoose.Schema({
    name : {
        type : String,
        require: true
    },

    age : {
        type : Number,
        require: true
    },

    gender : {
        type : String,
        require: true
    },

    phone : {
        type : Number,
        require: true
    },
})


const Student = mongoose.model("Student",studentschema);

module.exports = Student;