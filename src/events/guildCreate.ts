import { Guild, Permissions } from "discord.js";
import { Bot } from "../types";
import { BOT_PERMISSIONS } from "../Config";

export default {
  name: "guildCreate",
  run: async (client: Bot, guild: Guild) => {
    if (!client.resolveGuildDb) return;
    if (
      !guild.members.me?.permissions.has(Permissions.resolve(BOT_PERMISSIONS))
    ) {
      const owner = await guild.fetchOwner();
      await owner?.send(
        `I don't have the permissions to join this server. Try again https://discord.com/api/oauth2/authorize?client_id=958181869646663740&permissions=${BOT_PERMISSIONS}&scope=bot%20applications.commands`
      );
      return guild.leave();
    }
    await client.resolveGuildDb(guild.id);
  },
};
