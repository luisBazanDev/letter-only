import { BOT_NAME, INVITE_SUPPORT, INVITE_URL, SOURCE_URL } from "../Config";
import { Command, CommandPermission } from "../types";

const { MessageEmbed } = require("discord.js");

const InfoCommand: Command = {
  name: "info",
  description: "📄 Bot information, and owner information",
  permissions: CommandPermission.USER,
  run: async (client, lang, interaction, options) => {
    const cmdLang = lang.commands.info;
    const embed = new MessageEmbed()
      .setColor("#00aeef")
      .setTitle(cmdLang.title + ` | ${BOT_NAME}`)
      .setDescription(cmdLang.description)
      .setThumbnail(client.user?.displayAvatarURL())
      .setImage(cmdLang.img)
      .addField(cmdLang.creator.title, cmdLang.creator.value, true)
      .addField(cmdLang.created.title, cmdLang.created.value, true)
      .addField(
        cmdLang.support.title,
        cmdLang.support.value + INVITE_SUPPORT + ")",
        true
      )
      .addField(
        cmdLang.invite.title,
        cmdLang.invite.value + INVITE_URL + ")",
        true
      )
      .addField(
        cmdLang.source.title,
        cmdLang.source.value + SOURCE_URL + ")",
        true
      );
    interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });
  },
};

export default InfoCommand;
