import { Command, CommandPermission } from "../types";

const { MessageEmbed } = require("discord.js");

const PingCommand: Command = {
  name: "ping",
  description: "🪄 Command for test speed from the bot to discord.",
  permissions: CommandPermission.USER,
  run: async (client, lang, interaction, options) => {
    const cmdLang = lang.commands.ping;
    const embed = new MessageEmbed()
      .setTimestamp()
      .setThumbnail(client.user?.displayAvatarURL())
      .setColor("#00aeef")
      .addField(cmdLang.title, `${client.ws.ping}ms`);
    interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });
  },
};

export default PingCommand;
