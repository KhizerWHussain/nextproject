import mongoose from "mongoose";

const connection = {};

console.log(process.env.MONGO);

export const connectToDb = async () => {
  try {
    if (connection?.isConnected) {
      console.log("using existing connection");
      return;
    }

    // const db = await mongoose.connect(process.env.MONGO);
    const db = await mongoose.connect(
      "mongodb+srv://admin:admin@khizerapi.5wsywx6.mongodb.net/next_project?retryWrites=true&w=majority&appName=KhizerAPI"
    );

    connection.isConnected = db?.connections[0]?.readyState;
    console.log("db connection established");
  } catch (error) {
    console.log(error);
    // throw new Error(`error connecting with database -> ${error}`);
  }
};
