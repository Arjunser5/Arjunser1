const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😈𝐴𝑅𝐽𝑈𝑁𝑆𝐸𝑅😈═════╗*\n           \n*⚜═𝘼𝙍𝙅𝙐𝙉𝙎𝙀𝙍═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 𝙰𝚁𝙹𝚄𝙽𝚂𝙴𝚁🍒💕 - http://Wa.me/+916238440754*\n*            *\n*╚══════😈𝘼𝙍𝙅𝙐𝙉𝙎𝙀𝙍😈═════╝*\n\n*▷Creator: 𝑨𝑹𝑱𝑼𝑵𝑺𝑬𝑹🍒"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═𝐴𝑅𝐽𝑈𝑁𝑆𝐸𝑅 𝕠𝕨𝕟𝕖𝕣 𝐀𝐑𝐉𝐔𝐍𝐙𝐙🧞═💥*\n\n*💘https://github.com/Arjunser5/Arjunser1*\n*     *\𝕆𝕨𝕟𝕖𝕣 𝗔𝗥𝗝𝗨𝗡𝗦𝗘𝗥 ═http://api.whatsapp.com/send?phone=+916238440754&text=🌹--𝐻𝐸𝐿𝐿𝑂-𝐴𝑅𝐽𝑈𝑁𝑆𝐸𝑅   *\n\n⚜𝗚𝗜𝗩𝗘 𝗦𝗔𝗟𝗨𝗧𝗘 𝗧𝗢 𝗔𝗥𝗝𝗨𝗡𝗦𝗘𝗥*\n*

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😈𝔻𝕖𝕒𝕕𝕡𝕠𝕠𝕝😈═════╗*\n           \n*⚜═𝔻𝕖𝕒𝕕𝕡𝕠𝕠𝕝═⚜*\n\n*𝕠𝕨𝕟𝕖𝕣 𝕊𝕙𝕒𝕙𝕚𝕕𝕤𝕙𝕒𝕫𝕫 - http://Wa.me/+918078391406*\n*            *\n*╚══════😈𝔻𝕖𝕒𝕕𝕡𝕠𝕠𝕝😈═════╝*\n\n*▷Creator: 𝕊𝕙𝕒𝕙𝕚𝕕𝕤𝕙𝕒𝕫𝕫*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═𝔻𝕖𝕒𝕕𝕡𝕠𝕠𝕝 𝕠𝕨𝕟𝕖𝕣 𝕊𝕙𝕒𝕙𝕚𝕕 𝕤𝕙𝕒𝕫𝕫═💥*\n\n*💘https://github.com/shazz-shahid/Deadpool*\n*     *\n💓ℙ𝕚𝕜𝕒𝕔𝕙𝕦═𝕆𝕨𝕟𝕖𝕣 𝔸𝕞𝕖𝕖𝕣 𝕜𝕒𝕝𝕝𝕦𝕞𝕥𝕙𝕠𝕕𝕚═*\n\n*⚜https://github.com/ameer-kallumthodi/Pikachu*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
