const Discord = require("discord.js")
const csu = require("useful-tools")
exports.run = async (client, message, args) => {
 
  let csonline = message.guild.members.cache.filter(cs => cs.presence.status === "online").size
  let csdnd = message.guild.members.cache.filter(cs => cs.presence.status === "dnd").size
  let csidle = message.guild.members.cache.filter(cs => cs.presence.status === "idle").size
  let csoff = message.guild.members.cache.filter(cs => cs.presence.status === "offline").size

  let css = csonline + csidle + csdnd

  let cse = new Discord.MessageEmbed()
    .setTitle(message.guild.name + " Sunucu Bilgileri")
    .setColor("RANDOM")
    .setThumbnail(message.guild.iconURL())
    .addField("Sunucu Sahibi", message.guild.owner)
    .addField("Kanal Sayıları",`🔊 | \`${message.guild.channels.cache.filter(m => m.type === "voice").size}\`\n📖 | \`${message.guild.channels.cache.filter(m => m.type === "text").size}\``)
    .addField("Emoji Sayısı", `\`${message.guild.emojis.cache.size}\``)
    .addField("Rol Sayısı", `\`${message.guild.roles.cache.size}\``)
    .addField("Sunucu Bölgesi", `\`${message.guild.region}\``)
    .addField("Oluşturulma Tarihi:",`\`${csu.tarih(message.guild.createdTimestamp)}\``)
    .addField(
"Üye Durumları",`
**👥 Toplam Üye: \`${message.guild.memberCount}\`
⚃ Toplam Online: \`${csonline}\`
⚀ Toplam DND: \`${csdnd}\`
⚂ Toplam Idle: \`${csidle}\`
⚅ Toplam Offline: \`${csoff}\`
⚄ Toplam Durum: \`${css}\`**`)
    .setFooter("developer davuttzden")
    .setTimestamp()
  message.channel.send(cse)
}

exports.conf = {
  aliases: ["sb"]
}

exports.help = {
  name: "sunucu-bilgi"
}