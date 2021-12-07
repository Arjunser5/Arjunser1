const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/qP1JyPR.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*✩♎︎ꪶ𝑀𝑅♘︎ 𝚲ᏒڵบȠֆƩᏒ🎌ꫂ⁩⁩♎︎✩🇮🇳*
*𝕆𝕨𝕟𝕖𝕣 𝕟𝕦𝕞𝕓𝕖𝕣 wa.me/916238440754?text=𝘏𝘪_✩♎︎ꪶ𝑀𝑅♘︎ 𝚲ᏒڵบȠֆƩᏒ🎌ꫂ⁩⁩♎︎✩🇮🇳🍒✨*
*𝔸ℝ𝕁𝕌ℕ𝕃𝔸𝕃 𝔸ℝ𝕁𝕌ℕ𝕊𝔼ℝ 𝕘𝕚𝕥𝕙𝕦𝕓𝕝𝕚𝕟𝕜   https://github.com/Arjunser5/Arjunser1*
*𝔸ℝ𝕁𝕌ℕ𝕊𝔼ℝ  𝕘𝕚𝕥𝕙𝕦𝕓𝕝𝕚𝕟𝕜 https://github.com/arjunserz/arjunser*
`}) 

}));
