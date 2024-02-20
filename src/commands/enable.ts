import { BOT_NAME } from "../Config";
import Guilds from "../models/guilds";
import { Command, CommandPermission } from "../types";

const EnableCommand: Command = {
  name: "enable",
  description: "🛫 Enable a system",
  permissions: CommandPermission.ADMIN,
  options: [
    {
      name: "duration",
      description: "Duration of the system. Default 1 hour",
      type: "INTEGER",
      minValue: 1,
      maxValue: 48,
    },
  ],
  run: async (client, lang, interaction, options) => {
    if (!client.resolveGuildDb || !interaction.guild) return;
    let duration =
      typeof options[0]?.value === "number" ? options[0]?.value : 1;
    if (duration > 48) duration = 48;
    const guildDb: InstanceType<typeof Guilds> = await client.resolveGuildDb(
      interaction.guild.id
    );
    guildDb.start_time = new Date();
    guildDb.end_time = new Date(Date.now() + duration * 60 * 60 * 1000);
    guildDb.state = true;
    await guildDb.save();
    interaction.guild.members.me?.setNickname(
      `${BOT_NAME} | ${guildDb.letter.toUpperCase()}`,
      "Letter change."
    );
    interaction.reply({
      content: lang.commands.enabled.replace("%duration%", duration + "h"),
      ephemeral: true,
    });
  },
};

export default EnableCommand;
