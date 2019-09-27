const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const work = botconfig.worker;
const ownerID = botconfig.ownerID;
const emote = require("../../emojis.json")

module.exports.run = async (bot, message, args, prefix, gsnWinner, botCommanderRole, gtnMode, winMsg, displaywinMsg, premiumServer, botLogsChannel) => {
  message.channel.send("TBA")
};
module.exports.config = {
  name: "money",
  noalias: "No Aliases",
  aliases: [],
  usage: ``,
  category: ``,
  description: "",
  accessableby: "everyone"
}
