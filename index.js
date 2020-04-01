const Discord = require("discord.js");
const bot = new Discord.Client();


const token = 'Njk0MjgxNDM1MzY3ODY2MzY4.XoJWEw.zw38H1FizUcAmPij3_I0QQ_QqfM';
const PREFIX = "!";
var version = "1.0.0";

const prefix = "*";

bot.on("ready", ()=>{
    console.log("This bot is online!");
})

bot.on("message", message=>{
    if (message.content.includes("stuff")){
        const exampleEmbed = new Discord.MessageEmbed()
            .setTitle("I'm Stuff")
            .attachFiles("imstuff.jpg")
            .setImage("https://i.kym-cdn.com/entries/icons/original/000/028/534/cover5.jpg");


        message.channel.send(exampleEmbed);

    } else {
        // This is where the rest of the commands would go
        let args = message.content.substring(prefix.length).split(" ");

        switch (args[0]){
            case "clear":
                if (!args[1]){
                    message.content.send("Error, please define how many messages you would like deleted")
                } else{
                    message.channel.bulkDelete(args[1]);
                    break;
                }
        }
    }

    
})

bot.login(token);
