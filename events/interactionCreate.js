const { CLient, CommandInteraction } = require("discord.js");
const fs = require("fs");

module.exports = (client, interaction) => {
    if (interaction.isCommand()){
    try {
      fs.readdir("./komutlar/", (err, files) => {
        if (err) throw err;

        files.forEach(async (x) => {
          const command = require(`../komutlar/${x}`);
          if (
            interaction.commandName.toLowerCase() === command.name.toLowerCase()
          ) {
            return command.run(client, interaction);
          }
        });
      });
    } catch (err) {
      console.error(err);
    }
  }
};