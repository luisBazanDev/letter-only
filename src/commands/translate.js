const binary = require('../languages/binary.json');
var data = new Map();
module.exports = {
  name: 'translate',
  description: 'Translate a message to letter server.',
  permissions: [],
  options: [
    {
      name: "text",
      type: "STRING",
      description: "Introduce the text to translate.",
      required: true,
    },
  ],
  load: async(client) => {
    for(const letter of binary) {
      data.set(letter.letter, letter.translate);
    }
  },
  run: async (client, lang, interaction, options) => {
    var response = "";
    const text = options[0].value;
    const guildData = await client.resolveGuildDb(interaction.guild.id)
    for(const chacter of text) {
      response += parseLetter(chacter, guildData)+" ";
    }
    interaction.reply({
      content: response,
      ephemeral: true,
    });
  }
}

function parseLetter(letter, guildLetter) {
  return data.get(letter) || letter;
}