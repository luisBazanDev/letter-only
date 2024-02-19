import { Bot, Command } from "../types";

export const name = "ready";
export async function run(client: Bot) {
  console.log("Bot ready.");
  let commands = client.application?.commands;

  client.commands?.forEach((cmd: Command) => {
    commands?.create({
      name: cmd.name,
      description: cmd.description || "No description",
      options: cmd.options || [],
    });
  });
}
