import Guilds from "./models/guilds";
export async function run() {
  setInterval(guilds_state, 1000 * 1);
}

async function guilds_state() {
  const guilds = await Guilds.find({});

  for (let guild of guilds) {
    if (guild.state) {
      if (guild.end_time.getTime() < Date.now()) {
        guild.state = false;
        await guild.save();
      }
    }
  }
}
