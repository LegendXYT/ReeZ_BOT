const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const work = botconfig.worker;
const ownerID = botconfig.ownerID;
const emote = require("../../emojis.json")


module.exports.run = async (bot, message, args, prefix, gsnWinner, botCommanderRole, gtnMode, winMsg, displaywinMsg, premiumServer, botLogsChannel) => {

  if(message.author.id != ownerID) return message.channel.send(":warning: Only the **Bot Owner** can use this command:warning: ")

  try {
    await message.channel.send("Bot is shutting down...")
    bot.user.setStatus('dnd')
    process.exit()
  } catch(e) {
    console.log(`ERROR ${e.message}`)
    let embed = new Discord.RichEmbed()
    .setColor("#ab0303")
    .setAuthor("Shutdown Error", message.guild.iconURL)
    .setDescription(`**ERROR:** ${e.message}`)
    .setTimestamp()
    botLogsChannel.send(embed)
  }
};
module.exports.config = {
  name: "shutdown",
  noalias: "No Aliases",
  aliases: [],
  usage: `shutdown`,
  category: `Bot Owner`,
  description: "shutdown the bot!",
  accessableby: "Bot Owner"
}
