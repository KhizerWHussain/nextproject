import { connectToDb } from "@/lib/utils";
import { Post } from "@/models/postmodel";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  connectToDb();
  const { slug } = params;
  try {
    const post = await Post.findOne({ slug });
    return NextResponse.json({
      message: "successfully found post!",
      statusCode: 200,
      data: post,
    });
  } catch (error) {
    console.log("error => ", error);
    throw new Error("failed to fetch post!");
  }
};

export const DELETE = async (req, { params }) => {
  connectToDb();
  const { slug } = params;
  try {
    await Post.deleteOne({ slug });
    return NextResponse.json({
      message: "post has been deleted!",
      statusCode: 200,
    });
  } catch (error) {
    console.log("error => ", error);
    throw new Error("failed to delete post!");
  }
};
