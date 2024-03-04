import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model("User", userSchema);

export interface IUser {
  username: string;
  password: string;
  email: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}