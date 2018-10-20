const Discord = require('discord.js');
const jimp = require('jimp')

exports.run = (client, message, args) => {
    var img = "./img/balance/balance.png"
    
  var profileURL = message.author.avatarURL
  var images = [profileURL , img];
  var jimps = [];
  for (var i = 0; i< images.length; i++) {
    jimps.push(jimp.read(images[i]));
  }
  Promise.all(jimps).then(function(data) {
    return Promise.all(jimps);
  }).then(function(data) {
    data[0].resize(512,512)
    data[1].resize(512,512)
    data[0].composite(data[1],0,0)
    data[0].write("./images.png" , function() {
      message.channel.sendFile("./images.png")

    })
  })
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "balance",
    description: "Etiketlenen kullanıcıya balance efekti verir.",
    usage: "balance"
};