import mongoose from "mongoose";
import { MONGO_URI } from "./Config";

export async function connect() {
  mongoose.set("strictQuery", false);

  mongoose.connect(MONGO_URI).then(() => {
    console.log("Database connected.");
  });
}
