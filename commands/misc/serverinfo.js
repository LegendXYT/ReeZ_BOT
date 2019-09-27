const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const work = botconfig.worker;
const ownerID = botconfig.ownerID;
const emote = require("../../emojis.json")

module.exports.run = async (bot, message, args, prefix, gsnWinner, botCommanderRole, gtnMode, winMsg, displaywinMsg, premiumServer, botLogsChannel) => {

  if(message.author.id != ownerID) {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }
  // function checkDays(date) {
  //         let now = new Date();
  //         let diff = now.getTime() - date.getTime();
  //         let days = Math.floor(diff / 86400000);
  //         return days + (days == 1 ? " day" : " days") + " ago";
      // };
      let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
      let region = {
          "brazil": ":flag_br: Brazil",
          "eu-central": ":flag_eu: Central Europe",
          "singapore": ":flag_sg: Singapore",
          "us-central": ":flag_us: U.S. Central",
          "sydney": ":flag_au: Sydney",
          "us-east": ":flag_us: U.S. East",
          "us-south": ":flag_us: U.S. South",
          "us-west": ":flag_us: U.S. West",
          "eu-west": ":flag_eu: Western Europe",
          "vip-us-east": ":flag_us: VIP U.S. East",
  "london": ":flag_gb: London",
          "amsterdam": ":flag_nl: Amsterdam",
          "hongkong": ":flag_hk: Hong Kong",
          "russia": ":flag_ru: Russia",
          "southafrica": ":flag_za:  South Africa"
      };
      let image;
      if(premiumServer === true){
        image = 'https://im.ezgif.com/tmp/ezgif-1-848a2e8dc3d0.gif'
      } else {
        image = '';
      }

  const embed = new Discord.RichEmbed()
          .setColor("#00ff00")
          .setThumbnail(message.guild.iconURL)
          .setAuthor(message.guild.name, message.guild.iconURL)
          .addField("Name", `${message.guild.name}`, true)
          .addField("ID", `:id: ${message.guild.id}`, true)
          .addField("Owner", `:crown: ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
          .addField("Region", region[message.guild.region], true)
          .addField("Total | Humans | Bots", `:beginner:${message.guild.members.size} | ${emote.user}${message.guild.members.filter(member => !member.user.bot).size} | :robot: ${message.guild.members.filter(member => member.user.bot).size}`, true)
          .addField("Verification Level", `${emote.weewoo}${verifLevels[message.guild.verificationLevel]}`, true)
          .addField("Channels", `:file_folder: ${message.guild.channels.size}`, true)
          .addField("Roles", `:trident: ${message.guild.roles.size}`, true)
          .addField("Creation Date", `:calendar_spiral:${message.channel.guild.createdAt.toUTCString().substr(0, 16)} `, true)
          .addField(`Premium Server?`, `${premiumServer}`, true)
          .setImage(image)
          .setTimestamp()
      message.channel.send(embed);
      let embed2 = new Discord.RichEmbed()
      .setColor("#06d139")
      .setAuthor("ServerInfo command has been used!", message.guild.iconURL)
      .setDescription(`The Server's information has been shown!\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
      .setTimestamp()
      botLogsChannel.send(embed2)

};
module.exports.config = {
  name: "serverinfo",
  noalias: "No Aliases",
  aliases: [],
  usage: `serverinfo`,
  category: `miscellaneous`,
  description: "information on the server!",
  accessableby: "everyone"
}
