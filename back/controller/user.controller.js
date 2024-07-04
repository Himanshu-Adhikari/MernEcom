import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password
    const hashpass = await bcryptjs.hash(password, 10);

    // Create new user
    const newUser = new User({
      name: name,
      email: email,
      password: hashpass,
    });
    await newUser.save();

    res.status(201).json({ message: "User Created Successfully",user: {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
  },});
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: "User Not present" });
    } 
    const isMatch = await (user.password===password);
    if(!isMatch){
      return res.status(400).json({message:"Password didn't matched",og:password,gt:user.password});
    }
    else {
      res.status(200).json({
        message: "Login Successful",
        user: {
          _id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
