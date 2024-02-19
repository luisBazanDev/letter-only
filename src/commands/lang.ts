import { Command, CommandPermission, Langs } from "../types";

const LangCommand: Command = {
  name: "lang",
  description: "🌐 Change the language of the bot.",
  permissions: CommandPermission.ADMIN,
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
    if (!client.resolveGuildDb || !interaction.guild) return;

    const guildDb = await client.resolveGuildDb(interaction.guild.id);
    const cmdLang = lang.commands.language;

    const newLang: Langs =
      typeof options[0].value === "string"
        ? Langs[options[0].value as keyof typeof Langs]
        : Langs.EN;

    guildDb.language = newLang;
    interaction.reply({
      content: cmdLang + "`" + options[0].value + "`",
      ephemeral: true,
    });
    guildDb.save();
  },
};

export default LangCommand;
