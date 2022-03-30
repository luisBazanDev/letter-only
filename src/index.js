const dotenv = require("dotenv");
dotenv.config();

const client = require("./Client");
const database = require('./DataBase')

database.connect();
client.login(process.env.TOKEN);
