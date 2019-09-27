const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const work = botconfig.worker;
const ownerID = botconfig.ownerID;
const emote = require("../../emojis.json")


module.exports.run = async (bot, message, args, prefix, gsnWinner, botCommanderRole, gtnMode, winMsg, displaywinMsg, premiumServer, botLogsChannel) => {

  if(message.author.id != ownerID) return message.channel.send(":warning: Only the **Bot Owner** can use this command:warning: ")
  message.channel.send(bot.guilds.map(r => r.name + ` | ` + r.id + ` | ${r.memberCount} members`))


  function emoji(name) {return bot.emojis.find(emoji => emoji.name === name)
}
};
module.exports.config = {
  name: "serverlisting",
  // noalias: "No Aliases",
  aliases: ['listservers'],
  usage: `serverlisiting`,
  category: `Bot Owner`,
  description: "lists the servers the bot is in!",
  accessableby: "Bot Owner"
}
