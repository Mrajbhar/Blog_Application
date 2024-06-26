import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, // Corrected typo
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // phone: {
    //     type: String,
    //     required: true,
    // },
    // address: {
    //     type: String,
    //     required: true,
    // },
    role: {
        type: String,
        default: '0', // Corrected default value
    }
}, { timestamps: true });

export default mongoose.model('users', userSchema);
