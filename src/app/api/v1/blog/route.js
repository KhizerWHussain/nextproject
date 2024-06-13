import { connectToDb } from "@/lib/utils";
import { Post } from "@/models/postmodel";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json({
      message: "successfully found posts!",
      statusCode: 200,
      data: posts,
    });
  } catch (error) {
    console.log("error => ", error);
    throw new Error("failed to fetch posts!");
  }
};
