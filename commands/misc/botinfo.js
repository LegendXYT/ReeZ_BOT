const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const work = botconfig.worker;
const ownerID = botconfig.ownerID;
const emote = require("../../emojis.json")

module.exports.run = async (bot, message, args, prefix, gsnWinner, botCommanderRole, gtnMode, winMsg, displaywinMsg, premiumServer, botLogsChannel) => {

  if(message.author.id != ownerID) {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

  function duration(ms) {
    let sec = Math.floor((ms / 1000) % 60).toString()
    let min = Math.floor((ms / (1000 * 60)) % 60).toString()
    let hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
    let days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
    return `${days.padStart(1, '0')}d ${hrs.padStart(2, '0')}h ${min.padStart(2, '0')}m ${sec.padStart(2, '0')}s `
}

  var phrases = [
    'Invite'
  ]
  var phrase = phrases[Math.round(Math.random() * (phrases.length - 1))];
  var phrases2 = [
    'Support'
  ]
  var phrase2 = phrases2[Math.round(Math.random() * (phrases2.length - 1))];

  var phrases3 = [
    'Discord.js'
  ]
  var phrase3 = phrases3[Math.round(Math.random() * (phrases3.length - 1))];

  let embed = new Discord.RichEmbed()
  .setColor("#77abff")
  .setAuthor("Bot Info", bot.user.displayAvatarURL)
  .setDescription(`:tada: [${phrase}](https://discordapp.com/api/oauth2/authorize?client_id=623102688602619914&permissions=2147483127&scope=bot) | [${phrase2}](https://discord.gg/NtjRe5)`)
  .addField("Uptime:", `**:alarm_clock: ${duration(bot.uptime)}**`)
  .addField("Servers:", `**:shield:  ${bot.guilds.size}**`)
  .addField("Developer:", `**:crown: Legend X#0001 **`)
  .addField("Libary:", `**${emote.discordjs} [${phrases3}](https://discord.js.org)**`)
  .addField("Created On", `**:calendar_spiral: ${bot.user.createdAt}**`)
  .setFooter("ReeZ", bot.user.displayAvatarURL)
  .setTimestamp()

  message.channel.send(embed)

  let embed2 = new Discord.RichEmbed()
  .setColor("#06d139")
  .setAuthor("botinfo command has been used!", message.guild.iconURL)
  .setDescription(`The botinfo information has been shown!\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
  .setTimestamp()
  botLogsChannel.send(embed2)
};
module.exports.config = {
  name: "botinfo",
  // noalias: "No Aliases",
  aliases: ["uptime", "botlibary", "botdev", "botdeveloper", "about"],
  usage: `botinfo`,
  category: `Utility`,
  description: "see the bots information!",
  accessableby: "everyone"
}
