import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    image: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, timeseries: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
