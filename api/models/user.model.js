import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      reqired: true,
      unique: true,
    },
    email: {
      type: String,
      reqired: true,
      unique: true,
    },
    password: {
      type: String,
      reqired: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("user", userSchema);
