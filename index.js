const Discord = require('discord.js');
const bot = new Discord.Client ();
const token = process.env.token;
bot.on('guildMemberAdd', member => {
   const embed = new Discord.MessageEmbed()
      .setTitle(`안녕하세요 ${member.displayName}님`) // 여기는 임베드에서 타이틀로 사용됩니다!
      .addField("테스트보러들어오신건가요? 아님 타클랜으로 들어오신건가요?", "Miasoul#0811 로 친추 걸어주신뒤 테스트보러오신건지 아님 타클랜인지 보내주세요")
      member.send(embed)
});

bot.login(token);
