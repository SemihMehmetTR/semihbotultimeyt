const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimi Öldüreceğini Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + 'Seni Bu Dünyadan Sildi :gun::gun:**')
		.setImage(`https://78.media.tumblr.com/dc9d9fc7e4a0b00fee2c9d3d1a2196e7/tumblr_inline_p82fo0uq0F1szaa83_500.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öldür',
  description: 'İstediğiniz Kişiyi Öldürürsünüz.',
  usage: 'öldür'
};
