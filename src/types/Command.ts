import {
  ApplicationCommandOptionData,
  ChatInputCommandInteraction,
  CommandInteractionOption,
  ApplicationCommandOptionType
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
  options?: ApplicationCommandOptionData[];
  load?: (client: Bot) => void | Promise<void>;
  run: (
    client: Bot,
    lang: Lang,
    interaction: ChatInputCommandInteraction,
    options: readonly CommandInteractionOption[]
  ) => void | Promise<void>;
}
