import { Guild, Permissions } from "discord.js";
import { Bot } from "../types";

export default {
  name: "guildCreate",
  run: async (client: Bot, guild: Guild) => {
    if (!client.resolveGuildDb) return;
    const BOT_PERMISSIONS: bigint = BigInt(process.env.BOT_PERMISSIONS ?? "1");
    if (
      !guild.members.me?.permissions.has(Permissions.resolve(BOT_PERMISSIONS))
    ) {
      const owner = await guild.fetchOwner();
      await owner?.send(
        `I don't have the permissions to join this server. Try again https://discord.com/api/oauth2/authorize?client_id=958181869646663740&permissions=${process.env.BOT_PERMISSIONS}&scope=bot%20applications.commands`
      );
      return guild.leave();
    }
    await client.resolveGuildDb(guild.id);
  },
};
