import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, resp) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    resp.json({ message: "All field is required!" });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    resp.status(200).json({ message: "user is created successfuly!" });
  } catch (error) {
    resp.status(500).json({ message: error.message });
  }
};
