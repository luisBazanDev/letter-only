const langs = {
  ES: require("../languages/ES.json"),
  EN: require("../languages/EN.json"),
};
module.exports = {
  name: "interactionCreate",
  run: async (client, interaction) => {
    const guildDb = await client.resolveGuildDb(interaction.guild.id);
    const lang = langs[guildDb?.language || "EN"];

    if (!interaction.isCommand()) return;

    const { commandName, options, member } = interaction;

    let cmd = client.commands.get(commandName);

    if (!cmd) return;

    if (
      cmd.permissions.includes("admin") &&
      !member.permissions.has("ADMINISTRATOR")
    ) {
      interaction.reply({
        content: lang.commands.dont_permission,
        ephemeral: true,
      });
      return;
    }

    cmd.run(client, lang, interaction, options._hoistedOptions);
  },
};
