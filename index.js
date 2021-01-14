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
client.on('guildMemberRemove', member => {
	console.log(`${member.user.tag} left the guild... but was it of their own free will?`);
});
client.on('guildBanAdd', async (guild, user) => {
	console.log(`${user.tag} got hit with the ban hammer ${guild.name}.`);
});

client.on('message', message => {
	if(message.author.bot) return;
	if(config.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){
	  message.delete()
	}})
	client.on('messageDelete', message => {
		const channel01 = client.channels.cache.find(channel => channel.id === "799076668353413120");
	channel01.send(message.content)
	});
client.login(process.env.BOT_TOKEN)