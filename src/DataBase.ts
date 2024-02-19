import mongoose from "mongoose";

export async function connect() {
  mongoose.connect(process.env.MONGO_URI ?? "").then(() => {
    console.log("Database connected.");
  });
}
