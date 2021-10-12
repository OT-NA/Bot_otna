const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "!";

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!insta
    if(message.content === prefix + "insta"){
        message.reply("Le Insta De OTNA ---> https://www.instagram.com/otna.yt/?hl=fr ");
    }
    //!role
    else if(message.content === prefix + "role"){
        message.channel.send("Ho , Tu veux des Roles C est par ici ----> #🌍┊𝚁𝚘𝚕𝚎 ");
    }
});

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login("ODk3MTA2MjYwNTQ0MDYxNTEy.YWQ1Tw.NZ4MUjxvnfnLWKbkOu80bR573uE")