import jwt  from "jsonwebtoken";
import User from "../models/user.model.js";

export const deleteUser = async(req, res) => {
    const user = await User.findById(req.params.id)
 

     if(req.userId !== user._id.toString()){
      return  res.status(403).send("Cannot Delete!")
     }
     await User.findByIdAndDelete(req.params.id)
     return res.status(200).send("Deleted!")
};