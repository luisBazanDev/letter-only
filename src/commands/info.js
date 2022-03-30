const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "info",
  description: "📄 Bot information, and owner information",
  permissions: [],
  run: async (client, lang, interaction, options) => {
    const cmdLang = lang.commands.info;
    const embed = new MessageEmbed()
      .setColor("#00aeef")
      .setTitle(cmdLang.title + ` | ${process.env.BOT_NAME}`)
      .setDescription(cmdLang.description)
      .setThumbnail(client.user.displayAvatarURL())
      .setImage(cmdLang.img)
      .addField(cmdLang.creator.title, cmdLang.creator.value, true)
      .addField(cmdLang.created.title, cmdLang.created.value, true)
      .addField(
        cmdLang.support.title,
        cmdLang.support.value + process.env.INVITE_SUPPORT + ")",
        true
      )
      .addField(
        cmdLang.invite.title,
        cmdLang.invite.value + process.env.INVITE_URL + ")",
        true
      )
      .addField(
        cmdLang.source.title,
        cmdLang.source.value + process.env.SOURCE_URL + ")",
        true
      );
    interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });
  },
};
