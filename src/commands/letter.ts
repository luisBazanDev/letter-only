import { BOT_NAME } from "../Config";
import { Command, CommandPermission } from "../types";

const LetterCommand: Command = {
  name: "letter",
  description: "🔠 Change the letter of the bot.",
  permissions: CommandPermission.ADMIN,
  options: [
    {
      name: "letter",
      type: "STRING",
      description: "The letter change to.",
      required: true,
    },
  ],
  run: async (client, lang, interaction, options) => {
    if (!client.resolveGuildDb || !interaction.guild) return;
    const guildDb = await client.resolveGuildDb(interaction.guild.id);
    const cmdLang = lang.commands.letter;

    const letter = typeof options[0].value === "string" ? options[0].value : "";

    if (!letter.match(/^[a-zA-Z]$/) && letter !== "ñ") {
      interaction.reply({
        content: cmdLang.error.p1 + " `" + letter + "` " + cmdLang.error.p2,
        ephemeral: true,
      });
      return;
    }
    guildDb.letter = letter.toLowerCase();
    interaction.guild.members.me?.setNickname(
      `${BOT_NAME} | ${letter.toUpperCase()}`,
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

export default LetterCommand;
