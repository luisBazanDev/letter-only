const Guilds = require("./models/guilds");
module.exports = {
  run: async () => {
    setInterval(guilds_state, 1000 * 1);
  }
};
async function guilds_state() {
  const guilds = await Guilds.find({});

  for (let guild of guilds) {
    if (guild.state) {
      if (guild.end_time < Date.now()) {
        guild.state = false;
        await guild.save();
      }
    }
  }
}
