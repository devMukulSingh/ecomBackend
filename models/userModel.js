import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    firstname:{
        trim:true,
        type:String,
        required:'firstname is required',
        min:5,
        max:20,
    },
    lastname:{
        trim:true,
        type:String,
        required:'lastname is required',
        min:5,
        max:20,
    },
    username:{
        trim:true,
        type:String,
        required:'username is required',
        unique:true,
        lowercase:true,
        index:true,
    },
    email:{
        trim:true,
        type:String,
        required:'email is required',
        unique:true,
        lowercase:true,
    },
    phonenumber:{
        trim:true,
        type:Number,
        required:'phonenumber is required',
        unique:true,
    },
    password:{
        trim:true,
        type:String,
        required:'password is required',
    }
})

const userModel = new mongoose.model('userModel',userSchema);
export default userModel;