const Discord =  require("discord.js")
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix

module.exports =  bot => {
  var botonmessage = `
  ------------------------------------------------------
  > Logging in...
  ------------------------------------------------------
  Logged in as ${bot.user.tag}
  Working on ${bot.guilds.size} servers!
  access to ${bot.channels.size} channels and working with ${bot.users.size} users!
  I am logged in and ready to roll!
  LET'S GO!
  ------------------------------------------------------
  ----------Bot created by Legend X#0001----------------
  ------------------------------------------------------
  `
      console.log(botonmessage);
      // console.log(`${bot.user.username} is ready for action!`)
      let statuses = [
        `${bot.users.size} users have fun!`,
      ]

      setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});
      }, 5000)
}
