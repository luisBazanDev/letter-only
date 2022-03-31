module.exports = {
  name: "lang",
  description: "🌐 Change the language of the bot.",
  permissions: ["admin"],
  options: [
    {
      name: "language",
      type: "STRING",
      description: "The language to change to.",
      required: true,
      choices: [
        {
          name: "Español",
          value: "ES",
        },
        {
          name: "English",
          value: "EN",
        },
      ],
    },
  ],
  run: async (client, lang, interaction, options) => {
    const guildDb = await client.resolveGuildDb(interaction.guild.id);
    const cmdLang = lang.commands.language;
    guildDb.language = options[0].value;
    interaction.reply({
      content: cmdLang + "`" + options[0].value + "`",
      ephemeral: true,
    });
    guildDb.save();
  },
};
