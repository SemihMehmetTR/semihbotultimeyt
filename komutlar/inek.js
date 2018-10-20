 const Discord = require("discord.js");
const { stripIndents, oneLine } = require('common-tags');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('İneğin söylemesini istediğin yazıyı yazmalısın!');
  message.channel.sendCode('asciidoc',`
  < ${mesaj} >
          \   ^__^
           \  (oo)\_______
              (__)\       )/\/
                  ||----w||
                  ||     ||`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["inek", "inek-konuştur"],
  permLevel: "Yetki gerekmiyor."
};

exports.help = {
  name: 'inek',
  description: 'Yazdığınız yazıyı ineğe söyletir.',
  usage: 'inek'
}; 