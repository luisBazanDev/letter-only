module.exports = {
  name: "ready",
  run: async (client) => {
    console.log("Bot ready.");

    let commands = client.application?.commands

    client.commands.forEach(cmd => {
      commands.create({
        name: cmd.name,
        description: cmd.description || 'No description',
        options: cmd.options || []
      })
    })
  },
};