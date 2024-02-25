import fs from "fs";
import { join as joinPath } from "path";
import { Intents } from "discord.js";
import { Bot } from "./types";
import Guilds from "./models/guilds";

const client: Bot = new Bot({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
});

(async () => {
  const EventsFiles = fs.readdirSync(joinPath(__dirname + "/events/"));
  for (const eventFile of EventsFiles) {
    const event = require("./events/" + eventFile)?.default;
    client.on(event.name, (...args: [string]) => event.run(client, ...args));
  }

  const CommandsFiles = fs.readdirSync(__dirname + "/commands/");
  for (const commandFile of CommandsFiles) {
    let command = require("./commands/" + commandFile);
    if (command.default) {
      command = command.default;
    }
    if (command.load) {
      command.load(client);
    }
    client.commands?.set(command.name, command);
  }

  client.resolveGuildDb = async (guild_id: string) => {
    let guildDb = await Guilds.findOne({
      guild_id: guild_id,
    });
    if (!guildDb) {
      guildDb = new Guilds({
        guild_id,
      });
      await guildDb.save();
    }
    return guildDb;
  };
})();

export default client;
