import { Command, CommandPermission } from "../types";

const { MessageEmbed } = require("discord.js");

const InviteCommand: Command = {
  name: "invite",
  description: "🚪 Invite links",
  permissions: CommandPermission.USER,
  run: async (client, lang, interaction, options) => {
    const cmdLang = lang.commands.invite;
    const embed = new MessageEmbed()
      .setThumbnail(client.user?.displayAvatarURL())
      .setColor("#00aeef")
      .addField(cmdLang.title, cmdLang.value + `${process.env.INVITE_URL})`);
    interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });
  },
};

export default InviteCommand;
