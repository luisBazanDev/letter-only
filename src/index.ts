import dotenv from "dotenv";
dotenv.config();

import client from "./Client";
import { connect as connectDatabase } from "./DataBase";
// const tasks = require("./Tasks");

connectDatabase();
// tasks.run();
client.login(process.env.TOKEN ?? "");
