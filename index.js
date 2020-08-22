const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === `${prefix}ping`) {
	    message.channel.send('Pong!');
}   else if (message.content.startsWith(`${prefix}lol`)) {
	    message.channel.send('lul');
}   else if (message.content === `${prefix}server`) {
	    message.channel.send(`**Server Name:** ${message.guild.name}\n**Members:** ${message.guild.memberCount}\n**Created At:** ${message.guild.createdAt}\n**Region:** ${message.guild.region}`);
}   else if (message.content === `${prefix}user-info`) {
	    message.channel.send(`**Your username:** ${message.author.username}\n**Your ID:** ${message.author.id}`);
}

});

client.login(token);
