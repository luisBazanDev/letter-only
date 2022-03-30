module.exports = {
  name: "disable",
  description: "Disable a system",
  permissions: ["admin"],
  run: async (client, lang, interaction, options) => {
    const guildDb = await client.resolveGuildDb(interaction.guild.id);
    guildDb.state = false;
    await guildDb.save();
    interaction.reply({
      content: lang.commands.disabled,
      ephemeral: true,
    });
  },
};
