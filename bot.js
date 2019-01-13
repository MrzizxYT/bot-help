const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "F";
client.on('message', message => { // Leaked by [ @Out Our server ]
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**??? ????? ??? ?????????**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return
const args = message.content.split(" ").slice(1).join(" ")
const BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`????? ??????? : ${args}`)
.setDescription(`**???????? ?? ???? ??\n???????? ???? ????? \n???? ????? ???????? ??? ????? ??????????**`)
if (!args) return message.reply('**??? ???? ????? ???? ?? ???? ?????? ??????????**');message.channel.send(BcList).then(msg => {
msg.react('??')
.then(() => msg.react('?'))
.then(() =>msg.react('??'))
 
var EmbedBcFilter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
var NormalBcFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
 
var EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
var NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
EmbedBc.on("collect", r => {
 
message.channel.send(`:ballot_box_with_check: ?? ????? ??????? ?????`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: ?? ????? ??????? ?????`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});

  client.on('message', message => {
    if (message.content.startsWith("????")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**?? ????? ?????? ?????? ????**")

message.author.send(`**??? ?????? : ????
??? ????????? ?????? : 2**`)


    }
});


client.on('message', function(message) {
    if (message.content == "Fclear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
        }
    }

});

  client.on('message', message => {
      if(message.content.startsWith ("Fmarry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' ?? **???? ???? ??? ????**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' ?? **??? ?? ????? ??? ???? ???? ?? ???**').catch(console.error);
       if(proposed === message.author) return message.reply(`**???? ? **`);
        if(proposed === client.user) return message.reply(`** ??? ???????? **`);
              message.channel.send(`**${proposed} 
 ??? ????? ??? ?????? ?? ${message.author} 
 ????? ???? 15 ?????  
 ????? ?????? ?? ??**`)

const filter = m => m.content.startsWith("??????");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} ? ${proposed} ??? ??? ????? ???? , ?????? ?????? ???????** `);
})

   const filte = m => m.content.startsWith("??");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} ?? ??? ????** `);
})
        
  }
});

client.on('message',  (message) => {
        if(message.content.startsWith('Fkf')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let slaps = [
    'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
    'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
    'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
    'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
    'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
    'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} ???? ?? ??? ???? ${user.username}!`,
      image: {
        url: slaps[Math.floor(Math.random() * slaps.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message', message => {

    if (message.content === "Fmc") {
                        if(!message.channel.guild) return message.reply(' ??? ????? ??? ????????? !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ??? ???? ???????');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("?? ????? ????? ? ")
           });
             }
if (message.content === "Fumc") {
    if(!message.channel.guild) return message.reply(' ??? ????? ??? ????????? !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('??? ???? ???????');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("?? ??? ??????")
           });
             }



});


client.on('message', message => {
    if (message.content.startsWith("Fhacked")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``???? ??? ????? ??? ??? ?????``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦ ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('?? ????? ????? ???? ???? ????? ?????')
           }, 6000)
           });
         }
 });
 
 
 
  client.on('message', async message => {
  if(message.content.startsWith(prefix + "apply")) {
    await message.channel.send("**?????**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**?????**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**???? ?????? ?? ???? ???????**').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('???? ??????? ..').then(b => {
        setTimeout(() => {
  b.edit(`**?? ??????? ????? ???? ?? ???? ???**`)
        },2000);
var gg = message.guild.channels.find('name', '?????????')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**  ????? :question:  : \n ${lan}\n????? :link: :\n ${md} \n ???? ?????? ?? ???? ??????? :question: :\n ${br}  \n?? ??????? ??????  : <@${message.author.id}> **`)  
          .setFooter(`????? ???????`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})

client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '^';
     
    if(cmd === `${prefix}report`){
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Idk who 2 report ??");
        let reason = args.join(" ").slice(22);
        if(!reason) return message.channel.send("What is the reason ??");
    
        let reportEmbed = new Discord.RichEmbed()
        .setTitle("User just reported...")
        .setColor("#f7abab")
        .addField("- Reported User :", `${rUser} (${rUser.id})`)
        .addField("- Reported By :", `${message.author} (${message.author.id})`)
        .addField("- Reported In :", message.channel)
        .addField("- Report Time :", message.createdAt.toLocaleString(),true)
        .addField("- Reason :", reason);
    
        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("You should to make `reports` channel.");
    
    
        message.delete().catch(O_o=>{});
        message.author.send(`<@${rUser.id}>, Reported Successfully!!`)
        reportschannel.send(reportEmbed);
    };
});


client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = 'F'; //???? ???? ???????
    
    if(args[0] === `F{prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});

client.on('message', message => {
    if (message.content.startsWith("Fbans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} ??? ????? ??????? ?? ??????? `))
  .catch(console.error);
}
});

client.on("message", (message) => {
if (message.content.startsWith("Fct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('??? ?????? ??? ???????')

}
});
client.on("message", (message) => {
if (message.content.startsWith("Fcv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('??? ?????? ??? ?????')
    
}
});


client.on('message',async message => {
    if(message.content.startsWith(prefix + "setVoice")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('? **??? ???? ????????? ???????**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('? **??? ??? ????????? ???????**');
    message.channel.send('?| **?? ??? ????? ?????**');
    message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
      console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
      },1000);
    });
    }
  });
  
  
  
client.on('message', message => {
    var prefix = "F";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``???????? ????? ???? ??? ????? : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`??? ??? ???? <@${usermentioned}> ??? ????? ?????? ????? ??? `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``?? ?????? ??? "+ message.mentions.members.first() +" `??? ?? ???? ??? ????? ?? ??? ????`")
}
} else {
 message.channel.send("**``??? ?? ???? ?? ??? ???? ??? ???? ???? ????? ????``**")
}
} else {
message.react("?")
 }}});
 
  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**??? ?? ???? ????????? ????????**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**???? ???**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**??? ?? ???? ???? ????? ???? ?? ???? ????? ?????? ??????**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});


client.on('message', message => {
const prefix = "F";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("???? ???");
  if(!reason) return message.reply ("???? ??? ?????");
  if (!message.guild.member(user)
  .bannable) return message.reply("???????? ??? ??? ???? ?? ?????");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("531502410590584843").send({embed : banembed})
}
});

client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();//kinggamer ???? ???? ???? ?
    if(!mention) return  message.channel.send('').then(msg => { //kinggamer ???? ???? ???? ?
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer ???? ???? ???? ?
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: ?? ???? ????? ???? ?????? ???????**`); //kinggamer ???? ???? ???? ?
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer ???? ???? ???? ?
    });
   
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = " [ **?? ???? ?????** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**?? ?????? ????**')
    .addField('**__???????__**',[ message.guild.name ]) //kinggamer ???? ???? ???? ?
    .addField('**__?? ?????? ???? ??????__**', [ message.author ])
    .addField('**__?????__**',reason)
    .addField('**__??? ??????__**',duration)
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 //kinggamer ???? ???? ???? ?
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false, //kinggamer ???? ???? ???? ?
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); //kinggamer ???? ???? ???? ?
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); //kinggamer ???? ???? ???? ?
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); //kinggamer ???? ???? ???? ?
  }
});
client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  //kinggamer ???? ???? ???? ?
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); //kinggamer ???? ???? ???? ?
    });
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} ??? ?? ?? ?????? ??? ?????**`)
 
  await kinggamer.removeRole(role) //kinggamer ???? ???? ???? ?
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});



  client.on('message', message => {
    if (message.content === "Frooms") {
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
    if (message.content === "Froles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('?????:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});
client.on('message' , message => {
  var prefix = "F";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });
 
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`??? ???? ???????`**');


   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.on('message', message => {
    const prefix = 'F'
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |??.";
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField(': ?? | ????',`**<@` + `${z.id}` + `>**`, true)
.addField(': ?? | ?????', "**"+ `${z.id}` +"**",true)
.addField(': ? | Playing','**'+y+'**' , true)
.addField(': ?? | ??? ?? ?????',"**#" +  `${z.discriminator}**`,true)
.addField('**: ?? | ??????? ???? ???? ??? ?????**', message.author.createdAt.toLocaleString())
.addField("**: ? | ????? ????? ???????**", message.member.joinedAt.toLocaleString())    

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**?? ???????? ???? ????  ? **').catch(console.error);

}

});

client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("Fnew")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`???? ???? ???? ????? \`Support Team\` ????? ????? ??????? ??? ???? ???? ??????? ????? ???????`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: ?? ????? ??????, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `?? ??? ????? ?????? ?????? ??? ??? ???? ???? ????? ???? ????`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("Fclose")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`?? ??? ????? ?? ?????? ??????? ??? ????? ???? $confirm`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '$confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })    /// ALPHA CODES
                   .then((collected) => {
                       message.channel.delete();
                   })    /// ALPHA CODES
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});
 

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Relax`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Relax ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Fhelp | Fenixo system`,"http://twitch.tv/DJ")
client.user.setStatus("dnd")
});
 
 
 
client.on('message' , message => {
if(message.content === 'Fhelp') {
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
message.author.send(`
─════════════ {✯اوامر البوت✯} ════════════─
❧ Fbc ➺ برودكاست ب امبيد وبدون
❧ FLink ➺ رابط انفايت للسيرفر
❧ Fclear ➺ مسح الشات
❧ Fserver ➺ لعرض معلومات السيرفر
❧ Fmarry ➺ لعبة الزواج
❧ Fkf ➺ لعبة كف
❧ Fmc ➺ قفل الشات
❧ Fumc ➺ فتح الشات
❧ Fhacked ➺ لعبة التهكير
❧ Fapply ➺ تقديم / لازم في روم اسمه التقديمات
❧ Freport ➺ تبليغ / لازم في روم اسمه repoerts
❧ Favatar ➺ عرض صورتك او شخص تمنشنه
❧ Fbans ➺ يقولك عدد الاشخاص المبندين من السيرفر
❧ Fct ➺ انشاء روم كتابي
❧ Fcv ➺ انشاء روم صوتي
❧ FsetVoice ➺ يسويلك روم ويقولك عدد الاشخاص في الرومات الصوتية
❧ Fmove ➺ سحب عضو للروم الصوتي
❧ Fban ➺ تبنيد عضو من السيرفر
❧ Fkick ➺ طرد عضو من السيرفر
❧ Fmute ➺ اعطاء ميوت كتابي
❧ Funmute ➺ فك الميوت الكتابي
❧ Frooms ➺ لعرض الرومات الموجودة في السيرفر
❧ Froles ➺ لعرض الرتب الموجودة في السيرفر
❧ Fsay ➺ البوت يكرر كلام انته تحدده
❧ Fid ➺ لعرض معلوماتك
❧ Fnew ➺ لانشاء تذكرة
❧ سيرفر دعم https://discord.gg/5jZ7UbQ
❧ bot https://discordapp.com/api/oauth2/authorize?client_id=531499767604314114&permissions=8&scope=bot
─════════════ {✯ By !Relax#0002 ✯} ════════════─

`);
}
})
 
client.login(process.env.BOT_TOKEN);// ?? ???? ???? ???
