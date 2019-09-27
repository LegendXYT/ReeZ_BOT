const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const work = botconfig.worker;
const ownerID = botconfig.ownerID;
const emote = require("../../emojis.json")

module.exports.run = async (bot, message, args, prefix, gsnWinner, botCommanderRole, gtnMode, winMsg, displaywinMsg, premiumServer, botLogsChannel) => {

  if(message.author.id != ownerID) {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }
     let resence = true
     const status = {
         online: `${emote.online} Online`,
         idle: `${emote.idle} Idle`,
         dnd: `${emote.dnd} Do Not Disturb`,
         offline: `${emote.offline} Offline/Invisible`
       }

 const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

 if (member.user.bot === true) {
     bot = ":robot: Yes";
   } else {
     bot = `${emote.user} No`;
   }
         let embed = new Discord.RichEmbed()
             .setAuthor(member.user.username + `'s Profile 📑 `)
             .setThumbnail(member.displayAvatarURL)
             .setColor("#00ff00")
             .addField("Username", `${member.user.tag}`, true)
             .addField("ID", member.user.id, true)
             .addField(":calendar_spiral:  Joined Discord At", member.user.createdAt)
             .addField(":inbox_tray: Joined Server At", member.joinedAt)
             .addField("Nickname", `${member.nickname !== null ? `${emote.tick} Nickname: ${member.nickname}` : `${emote.cross} None`}`, true)
             .addField("Bot", `${bot}`, true)
             .addField("Status", `${status[member.user.presence.status]}`, true)
             .addField("Playing", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : `${emote.cross} Not playing`}`, true)
             .addField(`:scales: Roles (${member.roles.size})`, member.roles.map(roles => `${roles.name}`).join(" **|** "))
             .setFooter(`Information about ${member.user.username}`)
             .setTimestamp()

        message.channel.send(embed);
        let embed2 = new Discord.RichEmbed()
        .setColor("#06d139")
        .setAuthor("Profile command has been used!", message.guild.iconURL)
        .setDescription(`The user's information has been shown!\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
        .setTimestamp()
        botLogsChannel.send(embed2)

};
module.exports.config = {
    name: "userinfo",
    // noalias: "No Aliases",
    aliases: ["profile", "whois"],
    usage: `profile <@user_name>`,
    category: `Utility`,
    description: "information about a user!",
    accessableby: "everyone"
}
