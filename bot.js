const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam Yeniden Hoşgeldin :handshake:');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'naber') {
    msg.reply('İyi Senden Naber');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'salak') {
    msg.delete(30)
    msg.reply('**:point_right: Argo Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi') {
    msg.reply('**İyi Olduğuna Sevindim :smile:**');
  }
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ii') {
    msg.reply('**İyi Olduğuna Sevindim :smile:**');
  }
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'gerizekalı') {
    msg.delete(30)
    msg.reply('**:point_right: Argo Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Gerizekalı') {
    msg.delete(30)
    msg.reply('**:point_right: Argo Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'şerefsiz') {
    msg.delete(30)
    msg.reply('**:point_right: Hakaret Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mal') {
    msg.delete(30)
    msg.reply('**:point_right: Argo Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Mal') {
    msg.delete(30)
    msg.reply('**:point_right: Argo Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'oc') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aq') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Aq') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'AQ') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aQ') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'a*') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'velet') {
    msg.delete(30)
    msg.reply('**:point_right: Aşağılama Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bebe') {
    msg.delete(30)
    msg.reply('**:point_right: Aşağılama Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bebek') {
    msg.delete(30)
    msg.reply('**:point_right: Aşağılama Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'veled') {
    msg.delete(30)
    msg.reply('**:point_right: Aşağılama Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'piç') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'orospu') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'orospu çocuğu') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'pezevenk') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'AMK') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Amk') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'siktir') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'SİKTİR') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Siktir') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ama siktir') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sik') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'SİK') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sokuk') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Sik') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'yarram') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'göt') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'oç') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'pic') {
    msg.delete(30)
    msg.reply('**:point_right: Küfür Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'https://discord.gg/') {
    msg.delete(30)
    msg.reply('**:point_right: Reklam Engellendi :no_entry_sign:**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'işe yaramaz bot') {
    msg.reply('**Öyle Olsun :sob: :sob: Bu İletilerinizin Hepsi Kurucuma Yapılmış Sayılacaktır :smiling_imp:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'semihbot efsane') {
    msg.reply('**Ne Sandın Yiğenim :wink:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'semihbot iyiymiş') {
    msg.reply('**Ne Sandın Yiğenim :wink:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'SemihBOT Ultimate efsane') {
    msg.reply('**Ne Sandın Yiğenim :wink:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'SemihBOT efsane') {
    msg.reply('**Ne Sandın Yiğenim :wink:** ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'SemihBOT efso') {
    msg.reply('**Ne Sandın Yiğenim :wink:** ');
  }
});

const discord = require('discord.js');

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
