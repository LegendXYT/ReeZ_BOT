const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const work = botconfig.worker;
const ownerID = botconfig.ownerID;
const emote = require("../../emojis.json")

module.exports.run = async (bot, message, args, prefix, gsnWinner, botCommanderRole, gtnMode, winMsg, displaywinMsg, premiumServer, botLogsChannel) => {
  if(message.author.id != ownerID) {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }
  if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead.`)

   if(args[0]) {
       let command = args[0];
       if(bot.commands.has(command)) {
           command = bot.commands.get(command);
           var SHembed = new Discord.RichEmbed()
           .setColor('#5780cd')
           .setAuthor(bot.user.username, bot.user.displayAvatarURL)
           .setThumbnail(message.guild.iconURL)
           .setDescription(`The bot prefix is: ${prefix}\n\n**>Command:** ${command.config.name}\n**>Aliases:** ${command.config.noalias || command.config.aliases}\n**>Usage:** ${prefix}${command.config.usage || "No Usage"}\n**>Category:** ${command.config.category || "No Category"} \n**>Description:** ${command.config.description || "No Description"}\n**>Accessable by:** ${command.config.accessableby || "everyone"}`)
           .setFooter(`Requested by: ${message.author.username}`, message.author.displayAvatarURL )
           message.channel.send(SHembed);
           let embed2 = new Discord.RichEmbed()
           .setColor("#06d139")
           .setAuthor("Further Help command has been used!", message.guild.iconURL)
           .setDescription(`The Further help info has been shown!\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
           .setTimestamp()
           botLogsChannel.send(embed2)
       }}
 if (message.author.id != "513571036688547871") {
   if(!args[0]) {
       let Sembed = new Discord.RichEmbed()
       .setColor('#5780cd')
       .setAuthor(bot.user.username + "help", bot.user.displayAvatarURL)
       .setThumbnail( message.guild.iconURL)
       .setTimestamp()
       .setDescription(`These are the avaliable commands for ${bot.user.username}!\nThe bot prefix is: ${prefix}\n**Do** ${prefix}help [Command] **- for further information**`)
       .addField(`:gear: Config (4)`, "`setprefix` `resetprefix` `autosetup` `configlist`")
       .addField(`:video_game: Games (1)`, "`start-guess`")
       .addField(`:wrench: Utility (7)`,  "`invite` `support` `ping` `serverinfo` `profile` `help` `botinfo`")
       .setFooter(`Requested by: ${message.author.username}`, message.author.displayAvatarURL )
       message.channel.send(Sembed)
       let embed2 = new Discord.RichEmbed()
       .setColor("#06d139")
       .setAuthor("The regular help command has been used!", message.guild.iconURL)
       .setDescription(`The regular help info has been shown!\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
       .setTimestamp()
       botLogsChannel.send(embed2)
   }
 }else {
       if(!args[0]) {
       let Saembed = new Discord.RichEmbed()
       .setColor('#5780cd')
       .setAuthor(bot.user.username + "help", bot.user.displayAvatarURL)
       .setThumbnail( message.guild.iconURL)
       .setTimestamp()
       .setDescription(`These are the avaliable commands for ${bot.user.username}!\nThe bot prefix is: ${prefix}\n**Do** ${prefix}help [Command] **- for further information**`)
       .addField(`:warning: Bot owner (4)`, "`setstatus` `listservers` `leaveserver` `shutdown`" )
       .addField(`:gear: Config (4)`, "`setprefix` `resetprefix` `autosetup` `configlist`")
       .addField(`:video_game: Games (1)`, "`start-guess`")
       .addField(`:wrench: Utility (7)`,  "`invite` `support` `ping` `serverinfo` `profile` `help` `botinfo`")
       .setFooter(`Requested by: ${message.author.username}`, message.author.displayAvatarURL )
       message.channel.send(Saembed)
       let embed2 = new Discord.RichEmbed()
       .setColor("#06d139")
       .setAuthor("The Bot Owners help command has been used!", message.guild.iconURL)
       .setDescription(`The Bot Owners help info has been shown!\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
       .setTimestamp()
       botLogsChannel.send(embed2)
   }
 }
};
module.exports.config = {
    name: "help",
    // noalias: "No Aliases",
    aliases: ["commands"],
    usage: `help <command_>`,
    category: `Utility`,
    description: "Lists all the bots commands!",
    accessableby: "everyone"
}
