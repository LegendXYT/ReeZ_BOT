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
  let mode_number;
  if(gtnMode = "1"){
    mode_number = "normal";
  } else if (gtnMode = "2"){
    mode_number = "Ongoing"
  }
  let premMSG;
  if(premiumServer == true){
    premMSG = `This servers premium status is **true**`
  } else {
    premMSG = `This server is not premium yet, to get premium join our discord!`
  }

  let embed = new Discord.RichEmbed()

    .setColor("#ffff00")
    .setAuthor(`${message.guild.name} Settings`)
    .setDescription("Need help setting up the settings? join our discord server: https://discord.gg/Fgw8gqq")
    .addField("Prefix:", `The servers prefix is **${prefix}**`)
    .addField("Premium:", premMSG)
    .addField("Mini Game Settings:", `**^^Winning Role:** ${gsnWinner}\n**^^Bot Commander Role:** ${botCommanderRole}\n**Guessing Mode:** ${mode_number}\n**Win Message:** ${displaywinMsg
    }\nDo you want to change the **mini game** settings above? join our discord server and we will do it for you **manually**\nnote: settings with ^^ are not changeable!`)
    .setTimestamp()

  message.channel.send(`:gear: Server settings :gear:\n`, embed)

  let embed2 = new Discord.RichEmbed()
  .setColor("#06d139")
  .setAuthor("settings command has been used!", message.guild.iconURL)
  .setDescription(`The settings list has been shown!\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
  .setTimestamp()
  botLogsChannel.send(embed2)
};
module.exports.config = {
  name: "configlist",
  // noalias: "No Aliases",
  aliases: ["settings"],
  usage: `configlist`,
  category: `config`,
  description: "see how the server is setup for this bot!",
  accessableby: "everyone",
}
