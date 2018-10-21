const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimi Hackleyeceğini Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + 'Senin Bilgisayarına Sızdı Maalesef Yapabileceğin Birşey Yok**')
		.setImage(`https://tenor.com/view/cyberpunk-hacker-gif-5648648`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hackle',
  description: 'Kimi Hackleyeceğini Yazmalısın',
  usage: 'hackle'
};
