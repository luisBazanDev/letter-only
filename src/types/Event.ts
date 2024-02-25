import { Bot } from "./Bot";

import { ClientEvents } from "discord.js";

export interface Event {
  name: keyof ClientEvents;
  run: (client: Bot, ...args: any) => void | Promise<void>;
}
