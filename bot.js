const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(`Universe server.`,'https://www.twitch.tv/f9u9l1i')
    
});
client.login(process.env.BOT_TOKEN);
