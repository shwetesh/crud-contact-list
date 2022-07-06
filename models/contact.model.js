import mongoose from "mongoose";

const contactdetails =new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    mobile: {
        type :String,
        required :true
    },
    email_id: {
        type: String,
        required:true,
    }
})

export default mongoose.model('contact', contactdetails);