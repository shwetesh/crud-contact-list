import mongoose from "mongoose";

const UserSchema =new mongoose.Schema({
    email: {
        type : String,
        required : [true, 'Email Id required']
    },
    password: {
        type : String,
        required : [true, 'Password required']
    }
})

export default mongoose.model('user', UserSchema);