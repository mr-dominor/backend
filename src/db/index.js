import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
        const connctionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Db connect, listening on port ${process.env.PORT}`)
    } catch (error) {
        console.log("Error:", error)
        process.exit(1)
    }
}
export default connectDB