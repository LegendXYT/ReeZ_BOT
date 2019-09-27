const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const work = botconfig.worker;
const ownerID = botconfig.ownerID;
const emote = require("../../emojis.json")


module.exports.run = async (bot, message, args, prefix, gsnWinner, botCommanderRole, gtnMode, winMsg, displaywinMsg, premiumServer, botLogsChannel) => {

  if(message.author.id != ownerID) return message.channel.send(":warning: Only the **Bot Owner** can use this command:warning: ")
  if(args == "") {
    message.channel.send(`Make sure it is either **dnd**, **online**, **idle**, **invisible**`)
  } else {

  if(args[0] === 'dnd') {
    bot.user.setStatus('dnd')
    message.channel.send(`${emote.tick} Successfully changed the bots status to **Do Not Disturb**`)
    botLogsChannel.send(`The bots status has been changed to **Do Not Disturb**`)
  } else {

  if(args[0] === 'idle') {
    bot.user.setStatus('idle')
    message.channel.send(`${emote.tick} Successfully changed the bots status to **idle**`)
    botLogsChannel.send(`The bots status has been changed to **idle**`)
  } else {

  if(args[0] === 'online') {
    bot.user.setStatus('online')
    message.channel.send(`${emote.tick} Successfully changed the bots status to default -> **online**`)
    botLogsChannel.send(`The bots status has been changed to **online**`)
  } else {

  if(args[0] === 'invisible') {
    bot.user.setStatus('invisible')
    message.channel.send(`${emote.tick} Successfully changed the bots status to **invisible**`)
    botLogsChannel.send(`The bots status has been changed to **invisible**`)
  } else {

  if(args[0] === 'offline') {
    bot.user.setStatus('invisible')
    message.channel.send(`${emote.tick} Successfully changed the bots status to **invisible**`)
    botLogsChannel.send(`The bots status has been changed to **invisible**`)
  } else {
    message.channel.send(`${emote.cross} Invalid Arugments`)
  }
}
}
}
}
}
};
module.exports.config = {
  name: "setstatus",
  noalias: "No Aliases",
  aliases: [],
  usage: `setstatus <status>`,
  category: `Bot Owner`,
  description: "set the bots status (online/idle/dnd/invisible)",
  accessableby: "Bot Owner"
}
