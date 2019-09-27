const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const prefix = botconfig.prefix;
const bot = new Discord.Client({disableEveryone: true});
const emote = require("./emojis.json")

require("./util/eventHandler")(bot)
// start of commmand handler
const fs = require("fs");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

let foldernames = ["config", "fun", "games", "misc", "moderation", "owner", "shop"]; // feel free to add all the folders u have into this array

function loadCommands(folder) {
    fs.readdir(`./commands/${folder}`, (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");

        if (jsfiles.length <= 0) return console.log("There are no commands to load...");

        console.log(`Loading ${jsfiles.length} commands...`);
        jsfiles.forEach((f, i) => {
            let props = require(`./commands/${folder}/${f}`);
            console.log(`${i + 1}: ${f} loaded!`);
            bot.commands.set(props.config.name, props);
            props.config.aliases.forEach(alias => {
                bot.aliases.set(alias, props.config.name);
            });
        });
    });
}

foldernames.forEach(folder => {
     loadCommands(folder);
});

bot.on("guildCreate", guild => {
  let embed = new Discord.RichEmbed()
  .setColor("#08d32a")
  .setAuthor(`${guild.name}`, guild.iconURL)
  .addField("I joined a server!", `I am now in ${bot.guilds.size} servers.`)
  .addField("Owner", `${guild.owner}`, true)
  .addField("ID", `${guild.id}`, true)
  .addField("Member Count", `${guild.memberCount}`, true)
  bot.channels.get("623101405909090329").send(embed);
  let channelID;
     let channels = guild.channels;
     channelLoop:
     for (let c of channels) {
         let channelType = c[1].type;
         if (channelType === "text") {
             channelID = c[0];
             break channelLoop;
         }
     }

     let channel = bot.channels.get(guild.systemChannelID || channelID);
    channel.send(`
Hello there! thanks for adding me to your server!, My name is **${bot.user.username}**\n\
I was  created by **Legend X#0001**\n\
My default prefix is: ` + "`" + prefix + "`" + `! To change it use ` + "`" + `${prefix}setprefix [prefix]` + "`" + `\nyou can always change it back to the default prefix using: ` + "`" + `${prefix}setdefaultprefix` + "`" + `\n\
For help type: \`${prefix}help\`!\n\
\`${bot.user.username} - Support Server:\` https://discord.gg/4NwZgdq`);
});

bot.on("guildDelete", guild => {
  let embed = new Discord.RichEmbed()
  .setColor("#f70404")
  .setAuthor(`${guild.name}`, guild.iconURL)
  .addField("I Left a server!", `I am now in ${bot.guilds.size} servers.`)
  .addField("Owner", `${guild.owner}`, true)
  .addField("ID", `${guild.id}`, true)
  .addField("Member Count", `${guild.memberCount} members`, true)
  bot.channels.get("623101405909090329").send(embed);
});

bot.on('message', message => {
// suggestions for the suggestions channel
  if (message.channel.id === "623070382194425876") {
   message.react('👍')
     .then(() => {
       message.react('👎')
       message.react('🤷')
     });
 }

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json",  "utf8"));

    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: botconfig.prefix
      };
    }

 // start bot info key statments
    let prefix = prefixes[message.guild.id].prefixes;
    let sender = message.author;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    let botname = [`<@!${bot.user.id}> `, `<@${bot.user.id}> `];
    let max2 = 1000;
    let max3 = 0;

    if(message.author.id === "623102688602619914"){
      if(!message.content === `${prefix}start`) return;
    } else {
      if(message.author.bot || message.channel.type === "dm") return;
    }

    if(message.content == "<@623102688602619914>") {
      message.reply(`My prefix is ` + "`" + `${prefix}` + "`" + `\nfor help type ` + "`" + `${prefix}help` + "`")
    }
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      // server Requests!
      // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // users with this role has won a gtn game!
    let vicRole = message.guild.roles.find(role => role.name === "Guessing Winner");
    let vr;
    if (!vicRole){
      vr = "There is no **Winning Role** set for this server!\nuse the autosetup command to make one!"
    } else {
      vr = vicRole.name // vicRole.id = get the id of that channel || vicRole.name = get the name of the channel
    }
    let gsnWinner = vr;
    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // the users who have this role can set up the bot!
    let botCommander = message.guild.roles.find(role => role.name === `Commander`);
    let bcr;
    if (!botCommander){
      bcr = "There is no **bot commander role** set for this server!\nuse the autosetup command to make one!"
    } else {
      bcr = botCommander.name // botCommander.id = get the id of that channel || botCommander.name = get the name of the channel
    }

    let botCommanderRole = bcr;

    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // the mode for Guess The Number!
    let defaultGame;
    // 1 = normal guess game
    // 2 = the user is told if its higher or lower
    if(message.guild.id == "623059644134326272"){
      defaultGame = "2";
    } else {
      defaultGame = "1";
    }

    let gtnMode = defaultGame
    console.log(gtnMode)
    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // display winning message in settings!
    let winner = "{user}";
    let number = "{number}";
    let displaywinner_message = `${emote.hypertada} **| Hooray! ${winner} has guessed the number** ` + "`" + number + "`"

    let displaywinMsg = displaywinner_message
    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //  winning message!
    let winMsg;

    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // premium Servers
    let premiumServer;
    let premiumGuildID = message.guild.id
    if(premiumGuildID == "623059644134326272" || premiumGuildID == ""){
      premiumServer = true;
    } else {
      premiumServer = false;
    }
    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //  Bot Logs
    let logsChan = bot.channels.get("626760091474853888")
    let botLogsChannel = logsChan;
    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // send everything above to the commands!
    if(cmd.startsWith(prefix)) {
      let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
      if(commandfile) commandfile.run(bot,message,args,prefix,gsnWinner,botCommanderRole,gtnMode,winMsg,displaywinMsg,premiumServer,botLogsChannel);

    }

});

bot.login(botconfig.token)
