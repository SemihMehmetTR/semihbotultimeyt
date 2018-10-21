const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Rahats�z Etti�im ��in �ok �z�r Diliyorum Fakat Beni Sunucuna Almak �stermisin Diye Soracakt�m ��te Davet Linkim', 'https://discordapp.com/oauth2/authorize?client_id=484783968965623820&scope=bot&permissions=805314622')
    return message.author.sendEmbed(ozelmesajuyari); }

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Bir�ey Yazmal�s�n�z');

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

message.channel.send(`:white_check_mark: Mesaj basariyla **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullaniciya gonderildi.`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  description: 'Mesaj�n�z� botun bulundu�u sunucudaki insanlara duyurur. (BOT SAH�B� �ZEL)',
  name: 'herkeseduyur',
  usage: 'herkeseduyur [mesaj�n�z]'
};