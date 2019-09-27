const Discord = require("discord.js");
const fs = require("fs");
const botconfig =  require("../../botconfig.json");
const work = botconfig.worker;
const ownerID = botconfig.ownerID;
const emote = require("../../emojis.json")

module.exports.run = async (bot, message, args, prefix, gsnWinner, botCommanderRole, gtnMode, winMsg, displaywinMsg, premiumServer, botLogsChannel) => {
  if(message.author.id != ownerID) {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`"  `${prefix}support` + "`" + ` for more information`)
  }

  if(!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`${emote.cross} You do not have access to use this command!`);
  if(!args[0] || args[0 == "help"]) return message.channel.send(`how do you use this command? example: ` + "`" + `${prefix}setprefix <new_prefix>` + "`")

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) {
    let embed = new Discord.RichEmbed()
    .setColor("#9c0505")
    .setAuthor("Auto-setup command has experienced an error!", message.guild.iconURL)
    .setDescription(`**Error:** ${err}`)
    .setTimestamp()
    botLogsChannel.send(embed)
    console.log(err)
    }
  });

  message.channel.send(`${emote.tick} Successfully change the bots prefix to ` + "`" + `${args[0]}` + "`")

  let embed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setAuthor("The bots prefix has been changed!", message.guild.iconURL)
  .setDescription(`**New Prefix** ${args[0]}\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
  .setTimestamp()
  botLogsChannel.send(embed)

};
module.exports.config = {
  name: "setprefix",
  // noalias: "No Aliases",
  aliases: ["prefix"],
  usage: `setprefix`,
  category: `config`,
  description: "change the bots prefix to what ever you like",
  accessableby: "Administrator "
}
