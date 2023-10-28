import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.db;

const db =  async() => {
    await mongoose.connect(uri , { useUnifiedTopology: true} );
    console.log(`Connection successfull to Database`);

}

export default db;