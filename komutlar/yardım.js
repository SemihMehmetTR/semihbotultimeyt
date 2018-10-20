const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**TROLL KOMUTLARI :point_down: :**", `?banned = **Ban Çekicini Sallarsınız** \n?sigarayak = **Sigara İçersiniz.** \n?roliste = **BOT Size Rol Verir.** \n?stresçarkı = **Stres Çarkı Çevirirsiniz** \n?ulliminati = **Ülliminatiye Üye Olup Olmadığınızı İfşa Eder** \n?avatarım = **Avatarınınızı Gösterir.** \n?balıktut = **Balık Tutarsınız.** \n?emojiyazı = **Yazınızı Emoji Haline Çevirir.** \n?öldür = **İstediğiniz Kullanıcıyı Öldürürsünüz.** \n?herkesebendençay = **Herkese Çay Ismarlarsınız.** \n?elharaketi = **Haraket Çekersiniz.** \n?surfyap = **Sörf Yaparsınız.** \n?koş = **Koşarsınız.** \n?çayiç = **Çay İçersiniz.** \n?çekiç = **İstediğiniz Kişiye Çekiç Atarsınız.** \n?hiyaa = **İstediğiniz Kişiye Karate Yaparsınız.** \n?osmanlıtokadı = **İstediğiniz Kişiye Tokat Atarsınız.**\n?yumrukat = **Yumruk Atarsınız.** \n?yaz = **Bota İstediğiniz Şeyi Yazdırırsınız.** \n?sunucuresmi = **BOT Sunucunun Resmini Atar.** \n?sunucubilgi = **BOT Sunucu Hakkında Bilgi Verir.** \n?kullanıcıbilgim = **Sizin Hakkınızda Bilgi Verir.** `)
  .addField("**ADMİN KOMUTLARI :point_down: **", `?ban = **İstediğiniz Kişiyi Sunucudan Banlar.** \n?kick  = **İstediğiniz Kişiyi Sunucudan Atar.** \n?unban = **İstediğiniz Kişinin Yasağını Açar.** \n?uyar  = **İstediğiniz Kullanıcıyı Uyarırsınız.** \n?sustur = **İstediğiniz Kişiyi Susturur.** \n?oylama = **Oylama Açar.** \n?duyuru = **Güzel Bir Duyuru Görünümü Sağlar.**`)
  .addField("**ANA KOMUTLAR**", "?yardım = **BOT Komutlarını Atar.** \n?öneri = **BOT Sahibine Öneri Bildirirsiniz.** \n?bilgi = **BOT Kendisi Hakkında Bilgi Verir.** \n?ping = **BOT Gecikme Süresini Söyler.** \n?davet = **BOT Davet Linkini Atar.** \n?istatistik = **BOT İstatistiklerini Atar.**")
  .addField("**Yapımcım**", " **⛏ SemihMehmetTR 🔨** ")
  .setFooter('ßy SemihMehmetTR')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
