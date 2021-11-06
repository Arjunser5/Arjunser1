const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😈𝐴𝑅𝐽𝑈𝑁𝑆𝐸𝑅😈═════╗*\n           \n*⚜═𝐴𝑅𝐽𝑈𝑁𝑆𝐸𝑅═⚜*\n\n*𝕆𝕨𝕟𝕖𝕣 𝔸ℝ𝕁𝕌ℕ𝕊𝔼ℝ - http://Wa.me/+916238440754*\n*            *\n*╚══════😈𝐴𝑅𝐽𝑈𝑁𝑆𝐸𝑅😈═════╝*\n\n*▷Creator: 𝔸ℝ𝕁𝕌ℕ𝕊𝔼ℝ*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═𝔸ℝ𝕁𝕌ℕ𝕊𝔼ℝ 𝕠𝕨𝕟𝕖𝕣 𝔸ℝ𝕁𝕌ℕ 𝕃𝔸𝕃═💥*\n\n*💘https://github.com/Arjunser5/Arjunser1*\n*     *\n💓𝔸𝕣𝕛𝕦𝕟𝕌𝕫𝕫═𝕆𝕨𝕟𝕖𝕣 𝔸ℝ𝕁𝕌ℕ𝕊𝔼ℝ═*\n\n*⚜https://github.com/arjunserz/arjunser*    *\n\n⚜yt link to set bot:- https://youtube.com/channel/UC3grd6T0ufddlG2uSh4K-1g*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════😈𝔸ℝ𝕁𝕌ℕ𝕊𝔼ℝ😈═════╗*\n           \n*⚜═𝔸ℝ𝕁𝕌ℕ𝕊𝔼ℝ═⚜*\n\n*𝕠𝕨𝕟𝕖𝕣 𝔸ℝ𝕁𝕌ℕ 𝕃𝔸𝕃 - http://Wa.me/+916238440754*\n*            *\n*╚══════😈𝔸ℝ𝕁𝕌ℕ𝕊𝔼ℝ😈═════╝*\n\n*▷Creator: 𝔸ℝ𝕁𝕌ℕ 𝕃𝔸𝕃*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n           *\n💥═𝔸ℝ𝕁𝕌ℤ 𝕠𝕨𝕟𝕖𝕣 𝔸ℝ𝕁𝕌ℕ𝕊𝔼ℝ═💥*\n\n*💘https://github.com/Arjunser5/Arjunser1*\n*     *\n💓𝔸𝕣𝕛𝕦𝕫𝕫═𝕆𝕨𝕟𝕖𝕣 𝔸ℝ𝕁𝕌ℕ𝕊𝔼ℝ═*\n\n*⚜https://github.com/arjunserz/arjunser*    *\n\n⚜yt link to set bot:- https://youtube.com/channel/UC3grd6T0ufddlG2uSh4K-1g*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
