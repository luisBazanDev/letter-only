const { Client, Collection, Intents } = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
});

client.commands = new Collection();

(async () => {
  const EventsFiles = fs.readdirSync(__dirname+'/events/')
  for(const eventFile of EventsFiles) {
    const event = require('./events/'+eventFile)
    client.on(event.name, (...args) => event.run(client, ...args));
  }

  const CommandsFiles = fs.readdirSync(__dirname+'/commands/')
  for(const commandFile of CommandsFiles) {
    const command = require('./commands/'+commandFile)
    client.commands.set(command.name, command);
  }
})();


module.exports = client;