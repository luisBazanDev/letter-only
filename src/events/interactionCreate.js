const Guilds = require('../models/guilds')
const langs = {
  'ES': require('../languages/ES.json'),
  'EN': require('../languages/EN.json')
}
module.exports = {
  name: 'interactionCreate',
  run: async(client, interaction) => {
    const lang = langs[Guilds.findOne({ guild_id: interaction.guild.id })?.language || 'EN']

    if(!interaction.isCommand())return;

    const { commandName, options } = interaction;

    let cmd = client.commands.get(commandName)
    
    if(!cmd)return;
    
    cmd.run(client, lang, interaction, options)
  }
}