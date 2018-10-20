const Discord = require('discord.js');

const cevaplar = [
    "**Evet Sen Bir Ülliminati Üyesisin**",
    "**Hayır Sen Bir Ülliminati Üyesi Değilsin Aferim Temiz Yoldasın :slight_smile: :ok_hand:**",
    "**Sen Sanırım Ülliminati Üyesisin**",
    "**Senin Ülliminati Üyesi Olup Olmadığını Araştırıyoruz**",
    "**Sen Ülliminati Örgütünün Kurucususun Sormana Gerek Yoktu**",
    "**Senin Ülliminati Üyesi Olman İmkansız**"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('**Doğru Kullanım**:?ulliminati Ulliminatiye Üyemiyim')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'ulliminati', 
  description: 'Ülliminati Üyesi Olup Olmadığınızı İfşa Eder',
  usage: 'ulliminati Ulliminatiye Üyemiyim'
};