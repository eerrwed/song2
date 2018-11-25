const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setGame(`Universe server.`,'https://www.twitch.tv/f9u9l1i')
    
});


client.on('message', message => {
     var prefix = "2"
    if (message.content.toLowerCase() === prefix + "help") {
        let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(" :bulb: اوامر المساعدة")
        .addField("2play",' لـتشفيل البوت ')
        .addField("2skip",' لـخطي الاغنيه ')
        .addField("2vol",' لـرفع صوت البوت')
        message.channel.sendEmbed(embed);
    }
});


client.login(process.env.BOT_TOKEN);
