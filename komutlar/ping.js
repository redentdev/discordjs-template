const Discord = require("discord.js");

module.exports = {
    name: "Ping",
    description: "Botun pingi",
    type: "CHAT_INPUT",
    category: "bot",
    options:[],
    run: async (client, interaction) => {

     interaction.reply({content: `Pingim ${client.ws.ping}ms`});
      
}
};