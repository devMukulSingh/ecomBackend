import userModel from "../models/userModel.js";

export const saveUserDataController = async(req,res) => {
  try {
    const exist = await userModel.findOne( {username : req.body.username });
    if(exist){
        return res.status(401).json(`User already exists`);
    }
    else{
        const userData = new userModel(req.body);
        await userData.save();
        res.status(200).json(`Userdata saved Successfully`);
    }
  } catch (error) {
        res.status(500).json(`Error in saveUserDataController ${error}`);
  }
}

export const authLoginController = async(req,res) => {
 try {
   const exist = await userModel.findOne( {username: req.body.username, password: req.body.password} );
   if(exist){
     res.status(200).json( {message:'User Login Sucess'});
   }
   else{
     res.status(401).json( {message: 'User does not exist '});
   }
 } catch (error) {
    res.status(500).json(`Error in authLoginController ${error}`);
 }
}