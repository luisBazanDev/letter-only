import { TOKEN } from "./Config";

import client from "./Client";
import { connect as connectDatabase } from "./DataBase";
import { run as RunTasks } from "./Tasks";

connectDatabase();
RunTasks();
client.login(TOKEN);
