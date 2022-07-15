import mongoose  from "mongoose";

const ContactSchema =new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    mobile: {
        type :String,
        required :true
    },
    owner_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required :[true, 'user not provided']
    },
    email_id: {
        type: String,
        required:true,
    }
},{timestamps: true})

export default mongoose.model('contact', ContactSchema );