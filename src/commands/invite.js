const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "🚪 Invite links",
  permissions: [],
  run: async (client, lang, interaction, options) => {
    const embed = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#00aeef")
      .addField('Invite bot', `[☃️ Click Here](${process.env.INVITE_URL})`)
    interaction.reply({
      embeds: [embed],
      ephemeral: true,
    })
  },
};
