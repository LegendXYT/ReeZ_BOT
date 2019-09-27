const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const work = botconfig.worker;
const ownerID = botconfig.ownerID;
const emote = require("../../emojis.json")


module.exports.run = async (bot, message, args, prefix, gsnWinner, botCommanderRole, gtnMode, winMsg, displaywinMsg, premiumServer, botLogsChannel) => {

  if(message.author.id != ownerID) return message.channel.send(":warning: Only the **Bot Owner** can use this command:warning: ")
  if(args.length < 1) return message.reply("Supply a Guild ID");
  bot.guilds.get(args.join(" ")).leave()
  .then(g => botLogsChannel.send(`Left the guild: **${g}**`)).catch(console.error)
};
module.exports.config = {
  name: "leaveserver",
  // noalias: "No Aliases",
  aliases: ["leave"],
  usage: `leaveserver <id>`,
  category: `Bot Owner`,
  description: "let the bot leave a certain guild!",
  accessableby: "Bot Owner"
}
