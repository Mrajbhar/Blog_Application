import e from "express";
import userModel from "../model/userModel.js";

export const registerController = async (req,res)=>
{
  
  try {
    const{name,email,password,phone,address}= req.body;


    if(!name)
    {
      return res.status(400).json({
                        message:"name is required"
                    });
    }
    if(!email)
    {
      return res.status(400).json({
                        message:"email is required"
                    });
    }
    if(!password)
    {
      return res.status(400).json({
                        message:"password is required"
                    });
    }
    if(!phone)
    {
      return res.status(400).json({
                        message:"phone is required"
                    });
    }
    if(!address)
    {
      return res.status(400).json({
                        message:"address is required"
                    });
    }
  
    const existinguser = await userModel.findOne({email});

    if(existinguser){
      return res.status(400).json({
                        success:false,
                        message:"user already exists"
                    });
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await new userModel({
      name,
      email,
      password:hashedPassword,
      phone,
      address
    }).save();

    res.status(200).json({
      success:true,
      message:"user created successfully",
      user
    });
  } catch (error) {   
    console.log(error);
    res.status(500).json({
      success:false,
      message:"Error in Registration"
    });
  }
};

export const loginController = async (req,res) =>
{
  try {
    const {email,password} = req.body;

    if(!email || !password)
    {
      return res.status(400).json({
        success:false,
        message:"Please enter email and password"
      });
    }

    const user = await userModel.findOne({email});

    if(!user)
    {
      return res.status(400).json({
        success:false,
        message:"User not found"
      });
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch)
    {
      return res.status(400).json({
        success:false,
        message:"Incorrect password"
      });
    }
    
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET,{

      expiresIn:process.env.JWT_EXPIRE
    });

    res.status(200).json({
      success:true,
      message:"Login Successful",

      user:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address,
        role:user.role,
      },
      token,
    });


  } catch (error) {
    console.log(error)
    res.status(500).json({
      success:false,
      message:error.message,
      error,
      message:"Error in Login"
    });
  }
};

export const testController = (req,res)=>
{
  res.send('protected Router')
}