const { Client, Intents } = require('discord.js');
var botintents = new Intents();
botintents.add(Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES);
const bot = new Client({ intents: botintents });
var T = "OTkxNzExOTI5MzY4MzI2MTk0.GDKqbq.AtIG511ZFoxkLq4MKSljwSykq4RwJPLOsSzwp8";

var keyword=",";

bot.on("ready",function(){
    console.log("ready");
});

bot.on("messageCreate",function(message){
    if(message.author.bot == true) return;
    if(!message.content.startsWith(keyword)) return;


if(message.channel.name=="general"){

    console.log(message.author.username);
    if(message.author.username=="Rokku"){
    var a = message.content.substring(keyword.length).split(" ");

    console.log(a[0]);
    lockread = "";
    switch (a[0].toLowerCase()){

        case "Greeting":

        message.channel.send("Hello Guys, How can I help you?");

       break;

       case "help":

       message.channel.send("For English Service, please refer to Rock, For Japanese Service, please refer to Rokku")

       break;

        default:
        break;

        }
    }

}
})

//bot.channels.resolve("493375682936832003").send("");//
bot.login(T);