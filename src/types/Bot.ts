import { Client, Collection } from "discord.js";
import { GuildSchema } from "../models/guilds";
import { Command } from "./Command";

type collection = InstanceType<typeof Collection<string, Command>>;

export interface Bot extends Client {
  commands?: collection;
  resolveGuildDb?: (guildId: string) => Promise<GuildSchema>;
}
