"use server";
import { Post } from "@/models/postmodel";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { User } from "./../models/usermodel";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
  const { title, description, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      description,
      slug,
      userId,
    });

    await newPost.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
    return {
      message: "post created successfully",
      status: 200,
      post: newPost,
    };
  } catch (error) {
    console.log("error => ", error);
    return { error };
  }
};

export const deletePost = async (formData) => {
  connectToDb();
  const { postId } = Object.fromEntries(formData);
  console.log("post id ?", postId);
  try {
    await Post.findByIdAndDelete(postId);
    revalidatePath("/blog");
    revalidatePath("/admin");
    return {
      status: 200,
      message: "post deleted successfully!",
    };
  } catch (error) {
    console.log("error => ", error);
    return { error };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, image } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      image,
    });

    await newUser.save();
    revalidatePath("/admin");
    return {
      message: "user created successfully",
      status: 200,
      data: newUser,
    };
  } catch (error) {
    console.log("error => ", error);
    return { error };
  }
};

export const deleteUser = async (formData) => {
  connectToDb();
  const { id } = Object.fromEntries(formData);
  try {
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    revalidatePath("/admin");
    return {
      status: 200,
      message: "user has been deleted",
    };
  } catch (error) {
    console.log("error => ", error);
    return { error };
  }
};

export const handleGithubLogin = async (e) => {
  "use server";
  await signIn("github");
};

export const handleLogout = async (e) => {
  "use server";
  await signOut();
};

export const register = async (prevState, formData) => {
  const { username, email, password, confirmPassword } =
    Object.fromEntries(formData);

  if (password !== confirmPassword) {
    return { error: "password does not match" };
  }
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "user already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return { success: true };
  } catch (error) {
    return { error };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log("during login =?", err);
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
