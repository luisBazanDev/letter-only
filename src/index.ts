import dotenv from "dotenv";
dotenv.config();

import client from "./Client";
import { connect as connectDatabase } from "./DataBase";
import { run as RunTasks } from "./Tasks";

connectDatabase();
RunTasks();
client.login(process.env.TOKEN ?? "");
