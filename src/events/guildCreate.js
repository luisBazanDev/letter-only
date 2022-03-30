const Guilds = require("../models/guilds");
module.exports = {
  name: "guildCreate",
  run: async (client, guild) => {
    let guildDb = await Guilds.findOne({
      guild_id: guild.id,
    });
    if (!guildDb) {
      guildDb = new Guilds({
        guild_id: guild.id,
      });
      guildDb.save();
    }
  },
};
