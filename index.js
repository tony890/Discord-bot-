require('dotenv').config()
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});

client.on('message', message => {
if (message.content === 'watermelon') 
    message.react('🍉');

});
client.on('messageDelete', message => {
	console.log(`A message by ${message.author.tag} was deleted, but we don't know by who yet.`);
});
client.on('message', message => {
    if (message.content === 'what is my avatar') { 
        message.reply(message.author.displayAvatarURL());
  }
});   
client.on('messageDelete', message => {
    message.reply('Stop deleting messages!!😡😡');
});
client.on('guildMemberRemove', member => {
	console.log(`${member.user.tag} left the guild... but was it of their own free will?`);
});
client.on('guildBanAdd', async (guild, user) => {
	console.log(`${user.tag} got hit with the ban hammer ${guild.name}.`);
});

client.login(process.env.BOT_TOKEN)