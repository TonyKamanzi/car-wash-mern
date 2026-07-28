import userModel from "./register.model.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate required fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if email already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getUserCount = async (req, res) => {
  try {
    const count = await userModel.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
