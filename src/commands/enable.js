module.exports = {
  name: 'enable',
  description: 'Enable a system',
  permissions: ['admin'],
  options: [
    {
      name: 'duration',
      description: 'Duration of the system. Default 1 hour',
      type: 'INTEGER',
      minValue: 1,
      maxValue: 48,
    }
  ],
  run: async(client, lang, interaction, options) => {
    let duration = options[0]?.value || 1;
    if (duration > 48) duration = 48;
    const guildDb = await client.resolveGuildDb(interaction.guild.id);
    guildDb.start_time = Date.now();
    guildDb.end_time = Date.now() + (duration * 60 * 60 * 1000);
    guildDb.state = true;
    await guildDb.save();
    interaction.guild.me.setNickname(
      `${process.env.BOT_NAME} | ${guildDb.letter.toUpperCase()}`,
      'Letter change.'
    )
    interaction.reply({
      content: lang.commands.enabled.replace('%duration%', duration+'h'),
      ephemeral: true,
    });
  }
}