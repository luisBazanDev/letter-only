import { Client, Interaction, Options } from "discord.js";
import { Lang } from "./Lang";

export interface Command {
  name: string;
  description: string;
  permissions: ["admin", "user"];
  options: [any];
  run: (
    client: Client,
    lang: Lang,
    interaction: Interaction,
    options: Options
  ) => void | Promise<void>;
}
