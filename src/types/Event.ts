import { Bot } from "./Bot";

import { ClientEvents } from "discord.js";

export interface Event {
  name: string;
  run: (client: Bot, ...args: any) => void | Promise<void>;
}
