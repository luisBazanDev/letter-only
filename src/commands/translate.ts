import { Binary } from "../languages";
import { Command, CommandPermission } from "../types";
var data = new Map();
const TranslateCommand: Command = {
  name: "translate",
  description: "Translate a message to letter server.",
  permissions: CommandPermission.USER,
  options: [
    {
      name: "text",
      type: "STRING",
      description: "Introduce the text to translate.",
      required: true,
    },
  ],
  load: async (client) => {
    for (const letter of Binary) {
      data.set(letter.letter, letter.translate);
    }
  },
  run: async (client, lang, interaction, options) => {
    if (!client.resolveGuildDb || !interaction.guild) return;
    var response = "";
    const text = String(options[0].value);
    for (const chacter of text) {
      response += parseLetter(chacter) + " ";
    }
    interaction.reply({
      content: response,
      ephemeral: true,
    });
  },
};

function parseLetter(letter: string) {
  return data.get(letter) || letter;
}

export default TranslateCommand;
