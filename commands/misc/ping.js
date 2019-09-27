const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const work = botconfig.worker;
const ownerID = botconfig.ownerID;
const emote = require("../../emojis.json")

module.exports.run = async (bot, message, args, prefix, gsnWinner, botCommanderRole, gtnMode, winMsg, displaywinMsg, premiumServer, botLogsChannel) => {

  if(message.author.id != ownerID) {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

  message.channel.send(`🏓 Ping...`).then(message => {
    message.edit(`🏓 Pong!\nLatency is ${Math.floor(message.createdAt - message.createdAt)}ms\nAPI Latency is ${Math.round(bot.ping)}ms`)
  })
  let embed2 = new Discord.RichEmbed()
  .setColor("#06d139")
  .setAuthor("Ping command has been used!", message.guild.iconURL)
  .setDescription(`The bots ping has been shown!\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
  .setTimestamp()
  botLogsChannel.send(embed2)

};
module.exports.config = {
  name: "ping",
  noalias: "No Aliases",
  aliases: [],
  usage: `ping`,
  category: `Utility`,
  description: "Get the bots api and latency status!",
  accessableby: "everyone"
}
