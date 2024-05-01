import mongoose from "mongoose";
import Color from "color";
const connectDB = async () =>
{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`MongoDB Connected: ${conn.connection.host}`.bgMagenta.while);
            
        
    } catch (error) {
        console.log(`Error in Mongodb ${error}`.bgRed.while);
    }
}