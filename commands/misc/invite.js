const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const work = botconfig.worker;
const ownerID = botconfig.ownerID;
const emote = require("../../emojis.json")

module.exports.run = async (bot, message, args, prefix, gsnWinner, botCommanderRole, gtnMode, winMsg, displaywinMsg, premiumServer, botLogsChannel) => {

  var phrases = [
    'Click here!'
  ]
  var phrase = phrases[Math.round(Math.random() * (phrases.length - 1))];


  let embed = new Discord.RichEmbed()
  .setColor("#77abff")
  .addField(":inbox_tray: Invite Link", `Bot Invite [${phrase}](https://discordapp.com/api/oauth2/authorize?client_id=623102688602619914&permissions=2147483127&scope=bot)`)
  .setFooter("ReeZ", bot.user.displayAvatarURL)
  .setTimestamp()

  message.channel.send(embed)
  let embed2 = new Discord.RichEmbed()
  .setColor("#06d139")
  .setAuthor("Invite command has been used!", message.guild.iconURL)
  .setDescription(`The bot invite link has been shown!\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
  .setTimestamp()
  botLogsChannel.send(embed2)
  function emoji(name) {return bot.emojis.find(emoji => emoji.name === name)

  }
};
module.exports.config = {
  name: "invite",
  noalias: "No Aliases",
  aliases: [],
  usage: `invite`,
  category: `Utility`,
  description: "invite the bot to your server!",
  accessableby: "everyone"
}
