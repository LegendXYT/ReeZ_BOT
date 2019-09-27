const Discord = require("discord.js");
const fs = require("fs");
const botconfig =  require("../../botconfig.json");
const defaultprefix = botconfig.prefix;
const work = botconfig.worker;
const ownerID = botconfig.ownerID;
const emote = require("../../emojis.json")

module.exports.run = async (bot, message, args, prefix, gsnWinner, botCommanderRole, gtnMode, winMsg, displaywinMsg, premiumServer, botLogsChannel) => {
  if(message.author.id != ownerID) {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

  if(!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`${emote.tick} You do not have access to use this command!`);

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
  prefixes[message.guild.id] = {
    prefixes: `${defaultprefix}`
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

  message.channel.send(`${emote.tick} Successfully change the bots prefix to default: ` + "`" + `${defaultprefix}` + "`")

  let embed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setAuthor("The bots prefix has been changed to default!", message.guild.iconURL)
  .setDescription(`**Default Prefix** ${defaultprefix}\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
  .setTimestamp()
  botLogsChannel.send(embed)



};
module.exports.config = {
  name: "resetprefix",
  // noalias: "No Aliases",
  aliases: ["setprefixdefault", "prefixreset", "prefixdefault"],
  usage: `resetprefix`,
  category: `config`,
  description: "change the bots prefix back to the default",
  accessableby: "Administrator "
}
