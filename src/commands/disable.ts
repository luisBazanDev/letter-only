import { CacheType, CommandInteraction } from "discord.js";
import { Command, CommandPermission } from "../types";

const DisableCommand: Command = {
  name: "disable",
  description: "✂️ Disable a system",
  permissions: CommandPermission.ADMIN,
  run: async (client, lang, interaction: CommandInteraction, options) => {
    if (!client.resolveGuildDb || !interaction.guild) return;
    const guildDb = await client.resolveGuildDb(interaction.guild.id);
    guildDb.state = false;
    await guildDb.save();
    interaction.reply({
      content: lang.commands.disabled,
      ephemeral: true,
    });
  },
};

export default DisableCommand;
