const  mongoose  = require("mongoose");


const studentSchema= new mongoose.Schema({
     name :String,
     course: String,
     age: Number
})

const studentModel = mongoose.model('Student', studentSchema);


module.exports=studentModel
