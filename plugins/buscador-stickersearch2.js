/* Created By https://github.com/ALBERTO9883 */
import fs from 'fs';
import fetch from 'node-fetch';
import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {text, usedPrefix, command, conn}) => {
  if (!text) throw `*𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄𝐋 𝐏𝐀𝐐𝐔𝐄𝐓𝐄 𝐐𝐔𝐄 𝐃𝐄𝐒𝐄𝐄 𝐁𝐔𝐒𝐂𝐀𝐑*`;
  try {
    const res2 = await googleImage(text);
    const sfoto = res2.getRandom();
    const json = await fetch(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkeysapi}&query=${text}`);
    const jsons = await json.json();
    const {stickers} = jsons.result[0];
    const res = jsons.result.map((v, index) => ` • Resultado: ${1 + index}\n* • Nombre:* ${v.title}\n* • Autor:* ${v.author}\n* • Url:* ${v.url}`).join`\n\n───\n\n`;
    await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m);
  } catch {
    await m.reply('*𝐄𝐑𝐑𝐎𝐑, 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑 𝐕𝐔𝐄𝐋𝐕𝐀 𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎*');
  }
};
handler.command = ['stickersearch2', 'searchsticker2', 'stickerssearch2', 'searchstickers2'];
export default handler;
