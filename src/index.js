const dotenv = require("dotenv");
dotenv.config();

const client = require("./Client");
const database = require('./DataBase')
const tasks = require("./Tasks");

database.connect();
tasks.run();
client.login(process.env.TOKEN);
