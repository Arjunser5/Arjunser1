const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "Arjunser.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*😈𝐴𝑅𝐽𝑈𝑁𝑆𝐸𝑅😈*
*𝕆𝕨𝕟𝕖𝕣 𝕟𝕦𝕞𝕓𝕖𝕣 http://api.whatsapp.com/send?phone=+916238440754&text=🌹--𝐻𝐸𝐿𝐿𝑂-𝐴𝑅𝐽𝑈𝑁𝑆𝐸𝑅*
*𝘉𝘖𝘛 𝘒𝘏𝘐𝘓𝘈𝘋𝘐𝘐 𝑨𝑹𝑱𝑼𝑵𝑺𝑬𝑹 𝕘𝕚𝕥𝕙𝕦𝕓𝕝𝕚𝕟𝕜   https://github.com/Arjunser5/Arjunser1*
*𝑂𝑊𝑁𝐸𝑅 - 𝘈𝘙𝘑𝘜𝘕𝘚𝘌𝘙🍒💕*
`}) 

}));
