import { Client, Collection } from "discord.js";
import Guild from "../models/guilds";
import { Command } from "./Command";

type collection = InstanceType<typeof Collection<string, Command>>;

export interface Bot extends Client {
  commands?: collection;
  resolveGuildDb?: (guildId: string) => Promise<InstanceType<typeof Guild>>;
}
