import User from "../model/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { JWT_KEY } from "../config";

export const RegisterController = async (req, res) => {
  const { name, email, password, answer } = req.body;

  const hashpassword = await bcrypt.hashSync(password);
  const user = await new User({
    name,
    email,
    password: hashpassword,
    answer
  });
  try {
    const data = await user.save();
    res.status(201).json({
      sucess: true,
      data,
      message: "register sucessfully",
    });
  } catch (error) {
    res.status(401).json({
      sucess: false,
      error,
      message: "something worng",
    });
  }
};

export const LoginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(401).json({
        sucess: false,
        message: " user is not exist",
      });
    }
  
    const ispassword = await bcrypt.compareSync(password,userExist.password)
    if (!ispassword) {
      return res.status(401).json({
        sucess: false,
        message: "email password is unvalid",
      });
    }
  
    const accesstoken = jwt.sign({_id:userExist.id}, JWT_KEY,{expiresIn:"2h"})
    return res.status(401).json({
      sucess: true,
      userExist,
      accesstoken,
      message: "Login sucessfully",
    });
  } catch (error) {
        res.status(401).json({
        sucess: false,
        error,
        message: "login is unvalid",
      });
  }

 

};
