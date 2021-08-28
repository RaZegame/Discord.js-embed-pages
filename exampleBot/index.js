const Discord = require("discord.js");
const depb = require("../index.js");
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] })

client.on("messageCreate", (message) => {
    if (message.content === "!help") {
        depb.pages(message, [new Discord.MessageEmbed().setTitle("1"), new Discord.MessageEmbed().setTitle("2"), new Discord.MessageEmbed().setTitle("3")], 3 * 60 * 1000, 'PRIMARY');
    }
    if (message.content.startsWith("!help 2")) {
        depb.menuPages(message, [
            {
                value: "1",
                embed: new Discord.MessageEmbed().setTitle("1"),
                label: "number 1",
                description: "It is a number 1",
                emoji: "1️⃣",
            },
            {
                value: "2",
                embed: new Discord.MessageEmbed().setTitle("2"),
                label: "number 2",
                description: "It is a number 2",
                emoji: "2️⃣",
            },
            {
                value: "3",
                embed: new Discord.MessageEmbed().setTitle("3"),
                label: "number 3",
                description: "It is a number 3",
                emoji: "3️⃣",
            }
        ], 1 * 60 * 1000)
    }
});

client.on("ready", () => {
    console.log("I am online 😎")
});
client.login("token here")