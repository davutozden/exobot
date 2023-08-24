const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.js")
const proton = require("proton-io")
require('./util/Loader.js')(client);
client.on('ready', () => {
  console.log(`Botun ${client.user.tag} aktifleştirildi!`);
});
let komutDosya = "/commands"

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleykümselam kanka, naber?');
  }
  
    if (msg.content.toLowerCase() === 'Sa') {
    msg.reply('Aleykümselam kanka, naber?');
  }


if (msg.content.toLowerCase() === 'merhaba') {
    msg.reply('Hoşgeldin :)');
  }


if (msg.content.toLowerCase() === 'napim') {
    msg.channel.send('Terbiyemizi bozma lan!');
}


if (msg.content.toLowerCase() === '!yardım') {
    msg.channel.send('Ex BOT:)');
        
    msg.channel.send('Prefix=!');

    msg.channel.send('`kodlamadili`=Botun yazıldığı dili görürsünüz');

    msg.channel.send('`web`= web sitemizi görürsünüz');

    msg.channel.send('`kurucu`= kurucuyu görürsünüz');

    msg.channel.send('`token`= tokeni alırsınız :D');

    msg.channel.send('nsfw:flushed: =bahsetmek istemiyorum 0_0');

    msg.channel.send('`davet`= botu sunucunuza davet edersiniz');

    msg.channel.send('`altyapı`= altyapıyı görürsünüz');

    msg.channel.send('`errorfix`=Js dilindeki bazı hataların çözümlerini görürsünüz. (BAKIMDA) ');
}
if (msg.content.toLowerCase() === '!kurucu') {
    msg.channel.send('İşte Ex Network kurucusu= `@baydoxin0` ');
}


if (msg.content.toLowerCase() === '!botkurucu') {
    msg.channel.send('İşte Ex Network kurucusu= `@davuttzden` ');
}
	

if (msg.content.toLowerCase() === '!kodlamadili') {
    msg.channel.send('***JavaScript (JS)*** ile yazıldım. Altyapım=https://discord.js.org  ');
}


if (msg.content.toLowerCase() === '!xaine') {
    msg.channel.send('Bot adı:Xaine * Kurucu:! TREFAX#0362 * Destek Sunucusu: https://discord.gg/s2tJtaCTkg ');
}


if (msg.content.toLowerCase() === 'bb') {
    msg.channel.send('görüşürüz brom');
}


if (msg.content.toLowerCase() === 'iyi geceler') {
    msg.channel.send('iyi geceler aşko');
}


if (msg.content.toLowerCase() === 'exo bot sa') {
    msg.channel.send('as bro ');
}


if (msg.content.toLowerCase() === 'exo bot') {
    msg.channel.send('Merhaba dostum bir sorun mu vardı?');
}


if (msg.content.toLowerCase() === 'exo  *********') {  //yıldızlı yerde technopat kurallarına uygun olmayan yazı var
    msg.channel.send('Lafını geri al');
}


if (msg.content.toLowerCase() === 'exo neden') {
    msg.channel.send('ne neden? ');
}


if (msg.content.toLowerCase() === 'andı ne lan') {
    msg.channel.send('şey mi dostum, yine yangınlar yine ben :d');
}


if (msg.content.toLowerCase() === 'bana küfret') {
msg.reply('sen istedin. Ama küfretmicem :D');
}


if (msg.content.toLowerCase() === 'exo hg') {
msg.reply('Hoşbulduk dostum.');
}


if (msg.content.toLowerCase() === 'exo naber') {
msg.reply('Napalım işte iyiyiz çok şükür senden naber');
}


if (msg.content.toLowerCase() === 'exo xaine yi tanıyon mu') {
msg.reply('Evet kendisi çok yakın dostum:heart::v: @Xaine#2841');
}


if (msg.content.toLowerCase() === 'exo piyango bana çıkar mı') {
msg.reply('E Şans işi ');
}


if (msg.content.toLowerCase() === 'exo bende iyi') {
msg.reply('Sevindim  ');
}
if (msg.content.toLowerCase() === 'exo frizone yi tanıyon mu') {
msg.reply('Evet kendisi çok yakın arkadaşım :heart::v: @Frizone#4647');
}
if (msg.content.toLowerCase() === '31') {
msg.reply('Evet çok komik :unamused:');
}
if (msg.content.toLowerCase() === 'exo neden bana küfretmicen') {
msg.reply('Ayıp olur');
}
if (msg.content.toLowerCase() === '!site') {
msg.reply('Ex Network Web Sitesi! https://exminecraft.xyz');
}
if (msg.content.toLowerCase() === 'exo nbr') {
msg.reply('iyi sen?');
}
if (msg.content.toLowerCase() === 'exo malsın') {
msg.reply('saol sende');
}
if (msg.content.toLowerCase() === 'exo kötü') {
msg.reply('Aga be.');
}
if (msg.content.toLowerCase() === 'exo iyi') {
msg.reply('Bu arada yapımcımı tanıyor musunuz?');
}
if (msg.content.toLowerCase() === 'exo ta kendisiyim') {
msg.reply('Ha... Merhaba kurucum ulu !  Poykisol#8584, Bir kahve ister misiniz?');
}
if (msg.content.toLowerCase() === 'kahveyi severim') {
msg.reply('Size bir Türk Kahvesi yapıyorum. Şekerli mi şekersiz mi?');
}
if (msg.content.toLowerCase() === 'şekerli') {
msg.reply('Hazır. Afiyet olsun ulu kurucum.');
}
if (msg.content.toLowerCase() === '!token') {
msg.reply('Kurucum hep bana tokenini kimselere verme derdi.');
}
if (msg.content.toLowerCase() === 'ilk') {
msg.reply('<==ilk yazmayınca olur gibi :hot_face:');
}
if (msg.content.toLowerCase() === 'exo iyi sen') {
msg.reply('Bende iyiyim demiyimde orta halliyim işte.');
}
if (msg.content.toLowerCase() === '!altyapı') {
msg.channel.send('Botun altyapısı! https://discord.js.org');
}
  if (msg.content.toLowerCase() === 'exo dostum') {
    msg.reply('Efendim kanki:heart:');
}
  if (msg.content.toLowerCase() === '!errorfix') {
   msg.channel.send('HATA :x: Bir hata yaşadınız tekrar deneyin. `hatakodu:komut_bakimda` ');
}
  if (msg.content.toLowerCase() === '!errorfix') {
   msg.channel.send('HATA :x: Bir hata yaşadınız tekrar deneyin. `hatakodu:komut_bakimda` ');
}

});

client.login('MTEyOTg3NDA3NzAzMzcwNTUyMg.Gcewcf.l1BPSozq4CiJiF1KyAhVMgxIjaq1tzEp94Wk9Y');