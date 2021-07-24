const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.login(auth.token);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    //前置判斷
    try {
        if (!msg.guild || !msg.member) return; //訊息內不存在guild元素 = 非群組消息(私聊)
        if (!msg.member.user) return; //幫bot值多拉一層，判斷上層物件是否存在
        if (msg.member.user.bot) return; //訊息內bot值為正 = 此消息為bot發送
    } catch (err) {
        return;
    }

    //字串分析
    try {
        const prefix = '!' //前綴符號定義
        if (msg.content.substring(0, prefix.length) === prefix) //如果訊息的開頭~前綴字長度的訊息 = 前綴字
        {
            const cmd = msg.content.substring(prefix.length).split(' '); //以空白分割前綴以後的字串

            //功能實作
            switch (cmd[0]) {
                case 'ping':
                    msg.channel.send('pong');
                    break;
                case '老婆':
                    msg.reply('你沒有老婆!!');
                    break;
                case 'myAvatar':
                    const embed = new Discord.MessageEmbed()
                          .setColor('#0099ff')
                          .setTitle('Some title')
                          .setURL('https://discord.js.org/')
                          .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
                          .setDescription('Some description here')
                          .setThumbnail('https://i.imgur.com/wSTFkRM.png')
                          .addField('Regular field title', 'Some value here')
                          .addField('\u200B', '\u200B')
                          .addField('Inline field title', 'Some value here', true)
                          .addField('Inline field title', 'Some value here', true)
                          .addField('Inline field title', 'Some value here', true)
                          .setImage('https://i.imgur.com/wSTFkRM.png')
                          .setTimestamp()
                          .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
                    msg.channel.send(embed);
                    break;
            }
        }
    } catch (err) {
        console.log('OnMessageError', err);
    }
});

//獲取頭像
function GetMyAvatar(msg) {
    try {
        return {
            files: [{
                attachment: msg.author.displayAvatarURL,
                name: 'avatar.jpg'
            }]
        };
    } catch (err) {
        console.log('GetMyAvatar,Error');
    }
}
