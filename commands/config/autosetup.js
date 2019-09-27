const Discord = require("discord.js");
const fs = require("fs");
const botconfig =  require("../../botconfig.json");
const work = botconfig.worker;
const ownerID = botconfig.ownerID;
const emote = require("../../emojis.json")

module.exports.run = async (bot, message, args, prefix, gsnWinner, botCommanderRole, gtnMode, winMsg, displaywinMsg, premiumServer, botLogsChannel) => {
  if(message.author.id != ownerID) {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }

  if(!message.member.permissions.has("ADMINISTRATOR")) {
  message.channel.send(`${emote.cross} You are unable to setup the bot!`);
  let embed1 = new Discord.RichEmbed()
  .setColor("#e07d04")
  .setAuthor("Auto-setup command User Perms!", message.guild.iconURL)
  .setDescription(`unable to setup as this user doesnt have the correct permissions!\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
  .setTimestamp()
  botLogsChannel.send(embed1)
  return;
}
  if(!message.guild.me.permissions.has(["MANAGE_CHANNELS", "MANAGE_ROLES"])) {
  message.channel.send(`${emote.cross} **It seems as i dont have permissions to Manage channels or manage roles. Please fix this and redo the command!**`)
  let embed2 = new Discord.RichEmbed()
  .setColor("#e07d04")
  .setAuthor("Auto-setup command Bot perms!", message.guild.iconURL)
  .setDescription(`I dont seem to have the right permissions to excute this command!\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
  .setTimestamp()
  botLogsChannel.send(embed2)
  return;
}
  let botMsg = await message.channel.send(`${emote.timer} Auto-Setting up the server. Wont be long!`)


  let gsnChan = message.guild.channels.find(channel => channel.name === `guess-the-number`);
  let vicRole = message.guild.roles.find(role => role.name === "Guessing Winner");
  let botCommander = message.guild.roles.find(role => role.name === `Commander`);

  if(gsnChan && vicRole && botCommander){
    botMsg.edit(`${emote.cross} Failed to setup the server! It seems as it's already been done!`)
    let embed = new Discord.RichEmbed()
    .setColor("#e07d04")
    .setAuthor("Auto-setup command has been used!", message.guild.iconURL)
    .setDescription(`A user seems to be doing this command again!\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
    .setTimestamp()
    botLogsChannel.send(embed)
  } else {

  try {
    if(!gsnChan){
        gsnChan = await message.guild.createChannel("guess-the-number", "text")
      }
    if(!vicRole){
        vicRole = await message.guild.createRole({
         name: "Guessing Winner",
         color: "#FFD700"
       })
     }
     if(!botCommander){
       botCommander = await message.guild.createRole({
        name: `Commander`,
        color: "#99aab5"
      })
     }

     botMsg.edit(`${emote.tick} Successfully setup the server!`)
     let embed = new Discord.RichEmbed()
     .setColor("#9eeb34")
     .setAuthor("Auto-setup command has been used!", message.guild.iconURL)
     .setDescription(`Server Has Successfully been setup!\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
     .setTimestamp()
     botLogsChannel.send(embed)

  } catch(e) {

    botMsg.edit(`${emote.cross} An error occured while setting up the server. Please try again later!`)
    let embed = new Discord.RichEmbed()
    .setColor("#9c0505")
    .setAuthor("Auto-setup command has experienced an error!", message.guild.iconURL)
    .setDescription(`**Error:** ${e.stack}`)
    .setTimestamp()
    botLogsChannel.send(embed)
    console.log(e.stack)
  }
}



};
module.exports.config = {
  name: "autosetup",
  noalias: "No Aliases",
  aliases: [],
  usage: `autosetup`,
  category: `config`,
  description: "autosetup guess the number! (with default)",
  accessableby: "Administrator ",
}
