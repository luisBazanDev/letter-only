import { Client, ClientOptions, Collection } from "discord.js";
import Guilds from "../models/guilds";
import { Command } from "./Command";

type collection = InstanceType<typeof Collection<string, Command>>;

export class Bot extends Client {
  commands: collection;
  resolveGuildDb: (guildId: string) => Promise<InstanceType<typeof Guilds>>;

  constructor(options: ClientOptions) {
    super(options);
    this.commands = new Collection();
    this.resolveGuildDb = async (guild_id: string) => {
      return new Promise(() => {});
    };
  }
}
