module.exports = {
  name: "messageCreate",
  run: async (client, msg) => {
    const guildDb = client.resolveGuildDb(msg.guild.id);
  },
};