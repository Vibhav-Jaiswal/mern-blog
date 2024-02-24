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
    profilePicture:{
      type: String,
      default: "https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?w=257&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  },
  { timestamps: true }
);

export default mongoose.model("user", userSchema);
