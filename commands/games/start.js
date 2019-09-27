const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const work = botconfig.worker;
const ownerID = botconfig.ownerID;
const emote = require("../../emojis.json")

module.exports.run = async (bot, message, args, prefix, gsnWinner, botCommanderRole, gtnMode, winMsg, displaywinMsg, premiumServer, botLogsChannel) => {
  if(message.author.id != ownerID) {
    if(work != "true") return message.channel.send(`The bot is under maintenance do ` + "`" + `${prefix}support` + "`" + ` for more information`)
  }
  if(!message.member.permissions.has("MANAGE_MESSAGES")) {
    if(!message.member.roles.some(r=>[botCommanderRole].includes(r.name)) ) {
    return message.channel.send(`${emote.cross} You do not have access to use this command!\nRequired: **${botCommanderRole}** role or **manage messages** perms`)
  }
}

 let guessNum;
 let max = args;
 // start of mode 1
 if(gtnMode == "1"){
 if (args == "")
   {
             guessNum = Math.floor(Math.random() * 1000) + 1;
             message.channel.send(`${emote.guess} **| Generating a new random number!**\nGuess the number between **1** and **1000**!`)
             message.channel.setTopic('The number is between 1 and 1000 || there are no decimal numbers')
             inGame = true;
             let max = 1000;
             // embed
             let embed5 = new Discord.RichEmbed()
             .setColor("#FF9900")
             .setAuthor("The Start command is now in Loop!", message.guild.iconURL)
             .setDescription(`**Guess number** ${guessNum}\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
             .setTimestamp()
             botLogsChannel.send(embed5)
             console.log(guessNum)
             // next!
             const filter2 = m => m.content.startsWith(guessNum)
             message.channel.awaitMessages(filter2, { max: 1, time: 2147483647, errors: ['time'] })
                 .then(collected => {
                   // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                   //  GUILD WIN MESSAGES
                   if(message.guild.id === ""){
                   } else {
                     winMsg = `${emote.hypertada}**| Hooray! ${collected.first().author} has guessed the number** ` + "`" + guessNum + "`"
                    console.log(winMsg)
                   }
                   // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                   message.channel.send(winMsg).then((msg) => msg.pin());
                   console.log(winMsg)
                   botLogsChannel.send(collected)
                     console.log(collected)
                     let role = message.guild.roles.find(x => x.name === gsnWinner);

                     let member = message.author.guessNum;

                     collected.first().member.addRole(role).catch(console.error);
                 })
                 .catch(collected => {
                     console.log(collected)
                     botLogsChannel.send(embed)
                 });
         }
         else
         {
           guessNum = Math.floor(Math.random() * args) +  1;
           if(isNaN(guessNum))
           {
             message.channel.send(`${message.author}, ${args} is not a valid number`).then(msg => msg.delete(2000));
           }
           else
           {
           message.channel.send(`${emote.guess} **| Generating a new random number!**\nGuess the number between **1** and **${max}**`)
           message.channel.setTopic(`The number is between 1 and ${max} || there are no decimal numbers`)
           // embed
           let embed6 = new Discord.RichEmbed()
           .setColor("#FF9900")
           .setAuthor("The start command is now in motion!", message.guild.iconURL)
           .setDescription(`**Guess number** ${guessNum}\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
           .setTimestamp()
           botLogsChannel.send(embed6)
           console.log(guessNum)
           // next
          }
       const filter = m => m.content.startsWith(guessNum)
       message.channel.awaitMessages(filter, { max: 1, time: 2147483647, errors: ['time'] })
           .then(collected => {
             // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
             //  GUILD WIN MESSAGES
             if(message.guild.id === ""){
             } else {
               winMsg = `${emote.hypertada}**| Hooray! ${collected.first().author} has guessed the number** ` + "`" + guessNum + "`"
              console.log(winMsg)
             }
             // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
             message.channel.send(winMsg).then((msg) => msg.pin());
             botLogsChannel.send(collected)
             console.log(collected)
               let role = message.guild.roles.find(x => x.name === gsnWinner);

               let member = message.author.guessNum;

               collected.first().member.addRole(role).catch(console.error);
           })
           .catch(collected => {
               console.log(collected)
               botLogsChannel.send(collected)

           });


         }
  }
// end of mode 1
// mode 2
if(gtnMode == "2"){
if (args == ""){
            guessNum = Math.floor(Math.random() * 1000) + 1;

            message.channel.send(`${emote.guess} **| Generating a new random number!**\nGuess the number between **1** and **1000**!`)
            message.channel.setTopic('The number is between 1 and 1000 || there are no decimal numbers')
            let max = 1000;
            // embed
            let embed5 = new Discord.RichEmbed()
            .setColor("#FF9900")
            .setAuthor("The default start is now in motion!", message.guild.iconURL)
            .setDescription(`**Guess number** ${guessNum}\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
            .setTimestamp()
            botLogsChannel.send(embed5)
            console.log(guessNum)
            // next!
            const filter2 = m => m.content.startsWith(guessNum)
            message.channel.awaitMessages(filter2, { max: 1, time: 2147483647, errors: ['time'] })
                .then(collected => {
                  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                  //  GUILD WIN MESSAGES
                  if(message.guild.id === ""){
                  } else {
                    winMsg = `${emote.hypertada}**| Hooray! ${collected.first().author} has guessed the number** ` + "`" + guessNum + "`"
                   console.log(winMsg)
                  }
                  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                  message.channel.send(winMsg).then((msg) => msg.pin());
                  message.channel.send(`${prefix}start-guess`).then(msg => msg.delete(0));
                  console.log(winMsg)
                  botLogsChannel.send(collected)
                    console.log(collected)
                    let role = message.guild.roles.find(x => x.name === gsnWinner);

                    let member = message.author.guessNum;

                    collected.first().member.addRole(role).catch(console.error);
                })
                .catch(collected => {
                    console.log(collected)
                    botLogsChannel.send(embed)
                });
      }
        else
        {
          guessNum = Math.floor(Math.random() * args) +  1;
          if(isNaN(guessNum))
          {
            message.channel.send(`${message.author}, ${args} is not a valid number`).then(msg => msg.delete(2000));
          }
          else
          {
          message.channel.send(`${emote.guess} **| Generating a new random number!**\nGuess the number between **1** and **${max}**`)
          message.channel.setTopic(`The number is between 1 and ${max} || there are no decimal numbers`)
          // embed
          let embed6 = new Discord.RichEmbed()
          .setColor("#FF9900")
          .setAuthor("The start command is now in motion!", message.guild.iconURL)
          .setDescription(`**Guess number** ${guessNum}\n**Server Name:** ${message.guild.name}\n**Server ID:** ${message.guild.id}\n**by user:** ${message.author.tag}\n**User ID:** ${message.author.id}`)
          .setTimestamp()
          botLogsChannel.send(embed6)
          console.log(guessNum)
          // next
         }
      const filter = m => m.content.startsWith(guessNum)
      message.channel.awaitMessages(filter, { max: 1, time: 2147483647, errors: ['time'] })
          .then(collected => {
            // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            //  GUILD WIN MESSAGES
            if(message.guild.id === ""){
            } else {
              winMsg = `${emote.hypertada}**| Hooray! ${collected.first().author} has guessed the number** ` + "`" + guessNum + "`"
             console.log(winMsg)
            }
            // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            message.channel.send(winMsg).then((msg) => msg.pin());
            message.channel.send(`${prefix}start-guess ${max}`).then(msg => msg.delete(0));
            botLogsChannel.send(collected)
            console.log(collected)
              let role = message.guild.roles.find(x => x.name === gsnWinner);

              let member = message.author.guessNum;

              collected.first().member.addRole(role).catch(console.error);
          })
          .catch(collected => {
              console.log(collected)
              botLogsChannel.send(collected)

          });


        }
  }
// end of command
}
module.exports.config = {
  name: "start-guess",
  // noalias: "No Aliases",
  aliases: ["create-guess"],
  usage: `start`,
  category: `games`,
  description: "starts the guess the number!",
  accessableby: "everyone"
}
