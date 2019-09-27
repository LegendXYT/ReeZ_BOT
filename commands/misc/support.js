const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const work = botconfig.worker;
const ownerID = botconfig.ownerID;
const emote = require("../../emojis.json")

module.exports.run = async (bot, message, args, prefix, gsnWinner, botCommanderRole, gtnMode, winMsg, displaywinMsg, premiumServer, botLogsChannel) => {

  var server = bot.guilds.get('623059644134326272')
  var phrases = [
    'JOIN OUR DISCORD SERVER!',
    'THE SUPPORT DISCORD SERVER!'
  ]
  let torf;

  if(work === 'true'){
    torf = emote.tick
  }
  if(work === 'false'){
    torf = emote.cross
  }

  var phrase = phrases[Math.round(Math.random() * (phrases.length - 1))];


  let embed = new Discord.RichEmbed()
  .setColor("#77abff")
  .addField("Server Link", `[${phrase}](https://discord.gg/NtjRe5)`)
  .addField("Contacts:", `Legend X#0001`, true)
  .addField("Help", `${prefix}help`, true)
  .addField("Invite Bot", `${prefix}invite`, true)
  .addField(`Total Members:`, `${server.memberCount}`)
  .addField(`Online Members:`, `${server.members.filter(member => member.presence.status !== "offline").size}`, true)
  .addField("Bot Status:", `${torf}`)
  .setFooter("ReeZ", bot.user.displayAvatarURL)
  .setTimestamp()

  message.channel.send(embed)
  let embed2 = new Discord.RichEmbed()
  .setColor("#06d139")
  .setAuthor("Support command has been used!", message.guild.iconURL)
  .setDescription(`The Support information has been shown!\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
  .setTimestamp()
  botLogsChannel.send(embed2)

};
module.exports.config = {
    name: "support",
    // noalias: "No Aliases",
    aliases: ['server'],
    usage: `support`,
    category: `Utility`,
    description: "gives instant support?",
    accessableby: "everyone"
}
