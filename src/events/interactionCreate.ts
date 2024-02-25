import { CommandInteractionOption, Interaction } from "discord.js";
import { ES, EN } from "../languages";
import { Bot, Command, CommandPermission, Event } from "../types";

const langs = {
  1: ES,
  2: EN,
};

const InteractionEvent: Event = {
  name: "interactionCreate",
  run: async (client: Bot, interaction: Interaction) => {
    if (!interaction.isCommand()) return;

    if (!client.resolveGuildDb) return;
    if (!interaction.guild) return;
    if (!interaction.member) return;
    const guildDb = await client.resolveGuildDb(interaction.guild.id);
    const lang = langs[guildDb?.language || "EN"];

    const { commandName, options, memberPermissions } = interaction;

    let cmd: Command | undefined = client.commands?.get(commandName);

    if (!cmd) return;

    if (
      cmd.permissions === CommandPermission.ADMIN &&
      !memberPermissions?.has("ADMINISTRATOR")
    ) {
      interaction.reply({
        content: lang.commands.dont_permission,
        ephemeral: true,
      });
      return;
    }

    cmd.run(
      client,
      lang,
      interaction,
      options.data as [CommandInteractionOption]
    );
  },
};

export default InteractionEvent;
