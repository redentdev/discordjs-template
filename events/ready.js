module.exports = (client, interaction) => {
    console.log(`${client.user.tag} botuna girdim.`);
    client.user.setPresence({activities: [{ name: "Merhab" }], status: "online" });   
};