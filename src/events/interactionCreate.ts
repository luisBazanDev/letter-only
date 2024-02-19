import { Interaction } from "discord.js";
import { ES, EN } from "../languages";
import { Bot } from "../types";

const langs = {
  1: ES,
  2: EN,
};

export default {
  name: "interactionCreate",
  run: async (client: Bot, interaction: Interaction) => {
    if (!client.resolveGuildDb) return;
    if (!interaction.guild) return;
    if (!interaction.member) return;
    const guildDb = await client.resolveGuildDb(interaction.guild.id);
    const lang = langs[guildDb?.language || "EN"];

    if (!interaction.isCommand()) return;

    const { commandName, options, memberPermissions } = interaction;

    let cmd = client.commands?.get(commandName);

    if (!cmd) return;

    if (
      cmd.permissions.includes("admin") &&
      !memberPermissions?.has("ADMINISTRATOR")
    ) {
      interaction.reply({
        content: lang.commands.dont_permission,
        ephemeral: true,
      });
      return;
    }

    cmd.run(client, lang, interaction, options.data);
  },
};
