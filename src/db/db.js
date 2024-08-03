const  mongoose  = require("mongoose")
const dotenv = require('dotenv');

dotenv.config()

 async function connectDB(){
    try {
        await mongoose.connect("mongodb+srv://gmukejohnbaptist:FsZNQhIvQx9oSpxd@cluster0.lxsmawj.mongodb.net/lesson-2",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("DB connected successfully 😁😁")
    } catch (error) {
        console.log(error)
        console.log("Failed to connect to the DataBase 😒😒")
    }
}

module.exports= connectDB