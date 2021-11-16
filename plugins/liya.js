/* # Exclusively Liyamol
    # @lasiya99X t.me/lasiya99X
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const lol = "need some word\n💘enthelum ezhuthu nenba"
    

    if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'Arjunser ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/ttlogo?text1=${encodeURIComponent(match[1])}&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*😈𝑀𝑎𝑑𝑒 𝑏𝑦 ✩♎︎ꪶ𝑀𝑅♘︎ 𝐴𝑅𝐽𝑈𝑁𝑆𝐸𝑅🎌ꫂ⁩⁩♎︎✩🇮🇳*' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'Arjunser ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/ttlogo?text1=${encodeURIComponent(match[1])}&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*😈𝑀𝑎𝑑𝑒 𝑏𝑦 ✩♎︎ꪶ𝑀𝑅♘︎ 𝐴𝑅𝐽𝑈𝑁𝑆𝐸𝑅🎌ꫂ⁩⁩♎︎✩🇮🇳*' })

    }));
    
}
