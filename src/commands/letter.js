module.exports = {
  name: "letter",
  description: "Change the letter of the bot.",
  permissions: ["admin"],
  options: [
    {
      name: "letter",
      type: "STRING",
      description: "The letter change to.",
      required: true,
    },
  ],
  run: async (client, lang, interaction, options) => {
    const guildDb = await client.resolveGuildDb(interaction.guild.id);
    const cmdLang = lang.commands.letter;
    if (!options[0].value.match(/^[a-zA-Z]$/) && options[0].value !== "ñ") {
      interaction.reply({
        content:
          cmdLang.error.p1 + " `" + options[0].value + "` " + cmdLang.error.p2,
        ephemeral: true,
      });
      return;
    }
    guildDb.letter = options[0].value.toLowerCase();
    interaction.guild.me.setNickname(
      `${process.env.BOT_NAME} | ${options[0].value.toUpperCase()}`,
      "Letter change."
    );
    interaction.reply({
      content:
        cmdLang.success.p1 +
        " `" +
        options[0].value +
        "` " +
        cmdLang.success.p2,
      ephemeral: true,
    });
    guildDb.save();
  },
};
