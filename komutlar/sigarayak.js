const Discord = require('discord.js');



exports.run = async (client, message) => {
    let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} **Püfür Püfür Sigara içiyor!**`,
            image: {
                url: "https://i.makeagif.com/media/6-17-2015/zcrV2C.gif"
            }
        }
    });

    let bitiş = (Math.random() * (60 - 5 +1)) + 5;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, **Sigarasını Bitirdi Etraf Toz Duman Altında Kaldı. \n[ *Unutmayın Sigara İçmek Sağlığa Zararlıdır* ]**`
            }
        });
    }, 5 * 1000);
};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'sigarayak', 
  description: 'Bu komut ile sigara içebilirsiniz!',
  usage: 'sigarayak'
};
