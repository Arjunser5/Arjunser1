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
    
    r_text[1] = "*╔═════😈𝘈𝘙𝘑𝘜𝘕𝘚𝘌𝘙😈═════╗*\n           \n*⚜═𝘈𝘙𝘑𝘜𝘕𝘚𝘌𝘙═⚜*\n\n*𝕠𝕨𝕟𝕖𝕣 𝘈𝘙𝘑𝘜𝕫𝕫 - http://Wa.me/+916238440754*\n*            *\n*╚══════😈𝘈𝘙𝘑𝘜𝘕𝘚𝘌𝘙😈═════╝*\n\n*▷Creator: 𝐴𝑅𝐽𝑈𝑁𝑆𝐸𝑅🍒✨*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═𝐴𝑅𝐽𝑈𝑁𝑆𝐸𝑅 𝕠𝕨𝕟𝕖𝕣 𝐴𝑅𝐽𝑈𝑍𝑍═💥*\n\n*💘https://github.com/Arjunser5/Arjunser1*\n*     *\n💓𝐴𝑟𝑗𝑢𝑧═𝕆𝕨𝕟𝕖𝕣 𝕡𝕝𝕒𝕔𝕖 𝐴𝑘𝑘𝑖𝑘𝑎𝑣𝑢═*\n\n 𝐺𝐼𝑉𝐸 𝑆𝐴𝐿𝑈𝑇𝐸 𝑇𝑂 𝐴𝑅𝐽𝑈𝑁𝑆𝐸𝑅*    *\n\n♘︎http://api.whatsapp.com/send?phone=+916238440754&text=🌹--𝐻𝐸𝐿𝐿𝑂-𝐴𝑅𝐽𝑈𝑁𝑆𝐸𝑅*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
