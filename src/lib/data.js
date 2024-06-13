import { Post } from "@/models/postmodel";
import { connectToDb } from "./utils";
import { User } from "@/models/usermodel";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  connectToDb();
  try {
    const posts = await Post.find();
    return {
      message: "Success",
      statusCode: 200,
      data: posts,
    };
  } catch (error) {
    console.log("error =>", error);
  }
};

export const getPost = async (slug) => {
  connectToDb();
  try {
    const post = await Post.findOne({ slug });
    return {
      message: "Success",
      statusCode: 200,
      data: post,
    };
  } catch (error) {
    console.log("error =>", error);
  }
};

export const getUser = async (id) => {
  noStore();
  connectToDb();
  try {
    const user = await User.findById(id);
    return {
      message: "Success",
      statusCode: 200,
      data: user,
    };
  } catch (error) {
    console.log("error =>", error);
  }
};

export const getAllUsers = async () => {
  connectToDb();
  try {
    const users = await User.find();
    return {
      message: "Success",
      statusCode: 200,
      data: users,
    };
  } catch (error) {
    console.log("error =>", error);
  }
};
