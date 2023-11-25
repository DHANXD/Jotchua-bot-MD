import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
const handler = async (m, {conn, args}) => {
  if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 / 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴*';
  await m.reply(`*_𝐬𝐞 𝐞𝐬𝐭𝐚 𝐩𝐫𝐨𝐜𝐞𝐬𝐚𝐧𝐝𝐨 𝐞𝐥 𝐚𝐮𝐝𝐢𝐨_*\n\n*_𝐬𝐢 𝐬𝐮 𝐚𝐮𝐝𝐢𝐨 𝐧𝐨 𝐞𝐬 𝐞𝐧𝐯𝐢𝐚𝐝𝐨 𝐩𝐫𝐮𝐞𝐛𝐞 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨_ #playdoc ᴏ #play.2 ᴏ #ytmp4doc *`);
  try {
    const q = '128kbps';
    const v = args[0];
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.audio[q].download();
    const ttl = await yt.title;
    const size = await yt.audio[q].fileSizeH;
    const cap = `
    *_𝙹𝚘𝚝𝚌𝚑𝚞𝚊-𝙱𝚘𝚝_* | *_𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙳𝙲_*\n
    ➸ *𝚃𝙸𝚃𝚄𝙻𝙾:* ${ttl}\n
    ➸ *𝙿𝙴𝚂𝙾:* ${size}`.trim();
    await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m});
  } catch {
    try {
      const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`);
      const lolh = await lolhuman.json();
      const n = lolh.result.title || 'error';
      const n2 = lolh.result.link;
      const n3 = lolh.result.size;
      const cap2 = `
      *_𝙹𝚘𝚝𝚌𝚑𝚞𝚊-𝙱𝚘𝚝_* | *_𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙳𝙻_*\n
      ➸ *𝚃𝙸𝚃𝚄𝙻𝙾:* ${n}\n
      
      ➸ *𝙿𝙴𝚂𝙾:* ${n3}`.trim();
      await conn.sendMessage(m.chat, {document: {url: n2}, caption: cap2, mimetype: 'audio/mpeg', fileName: `${n}.mp3`}, {quoted: m});
    } catch {
      await conn.reply(m.chat, '*[❗] 𝙴𝚁𝚁𝙾𝚁 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝙰𝚄𝙳𝙸𝙾*', m);
    }
  }
};
handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta.2$/i;
export default handler;
