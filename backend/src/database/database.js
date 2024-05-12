import mongoose from "mongoose";
import {} from 'dotenv/config'


const MONGODB_URL = process.env.MONGODB_URL

const connect = async () => {
    try {
        if (MONGODB_URL) {
            await mongoose.connect(MONGODB_URL)
            console.log("MongoDB connected");
        }
    } catch (error) {
        console.log("Not Connected", error);
    }
}

export default connect 
