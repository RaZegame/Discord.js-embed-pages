const Discord = require("discord.js");
const depb = require("../index.js");
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] })

client.on("messageCreate", (message) => {
    if (message.content.startsWith("!help")) {
        depb.pages(message, [new Discord.MessageEmbed().setTitle("1"), new Discord.MessageEmbed().setTitle("2"), new Discord.MessageEmbed().setTitle("3")], 100 * 60 * 1000, 'PRIMARY');
    }
});

client.on("ready", () => {
    console.log("I am online 😎")
});
client.login("token here")