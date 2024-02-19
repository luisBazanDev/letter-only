import {
  CacheType,
  CommandInteraction,
  CommandInteractionOption,
  Interaction,
  Options,
} from "discord.js";
import { Lang } from "./Lang";
import { Bot } from "./Bot";

export enum CommandPermission {
  ADMIN,
  USER,
}

export interface Command {
  name: string;
  description: string;
  permissions: CommandPermission;
  options?: [any];
  run: (
    client: Bot,
    lang: Lang,
    interaction: CommandInteraction,
    options: [CommandInteractionOption]
  ) => void | Promise<void>;
}
