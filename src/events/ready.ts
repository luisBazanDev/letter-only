import { Bot, Command, Event } from "../types";

const ReadyEvent: Event = {
  name: "ready",
  run: async (client: Bot) => {
    console.log("Bot ready.");
    let commands = client.application?.commands;

    client.commands?.forEach((cmd: Command) => {
      commands?.create({
        name: cmd.name,
        description: cmd.description || "No description",
        options: cmd.options || [],
      });
    });
  },
};

export default ReadyEvent;
