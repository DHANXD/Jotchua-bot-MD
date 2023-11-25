import yts from 'yt-search';
import fs from 'fs';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `_𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄 𝐋𝐀 𝐂𝐀𝐍𝐂𝐈𝐎𝐍 𝐅𝐀𝐋𝐓𝐀𝐍𝐓𝐄, 𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 + 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄/𝐓𝐈𝐓𝐔𝐋𝐎 𝐃𝐄 𝐔𝐍𝐀 𝐂𝐀𝐍𝐂𝐈𝐎𝐍_\n\n* _𝐄𝐉𝐄𝐌𝐏𝐋𝐎_:\n${usedPrefix + command} Lumi Athena - SMOKE IT OFF! ☆ feat. jnhygs*`;
  try {
    const vids_ = {
      from: m.sender,
      urls: [],
    };
    if (!global.videoList) {
      global.videoList = [];
    }
    if (global.videoList[0]?.from == m.sender) {
      global.videoList.splice(0, global.videoList.length);
    }
    const results = await yts(text);
    const textoInfo = `*_𝐏𝐮𝐞𝐝𝐞𝐬 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐞𝐥 𝐯𝐢𝐝𝐞𝐨 𝐪𝐮𝐞 𝐪𝐮𝐢𝐞𝐫𝐚𝐬 𝐝𝐞 𝐥𝐚 𝐬𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 𝐟𝐨𝐫𝐦𝐚_:*
➸ ${usedPrefix}audio <numero>
➸ ${usedPrefix}video <numero> 

*Ejemplos:*
*➸ ${usedPrefix}audio 5*
*➸ ${usedPrefix}video 8*`.trim();
    const teks = results.all.map((v, i) => {
      const link = v.url;
      vids_.urls.push(link);
      return `[${i + 1}] ${v.title}
➸ *_Link :_* ${v.url}

➸ *_Duración :_* ${v.timestamp}

➸ *_Subido :_* ${v.ago}

➸ *_Vistas :_* ${v.views}`;
    }).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
    conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks, m);
    global.videoList.push(vids_);
  } catch {
    await m.reply('*_𝐄𝐑𝐑𝐎𝐑, 𝐕𝐔𝐄𝐋𝐕𝐀 𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎 𝐂𝐎𝐍 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄 𝐎𝐓𝐑𝐀 𝐂𝐀𝐍𝐂𝐈𝐎𝐍_*');
  }
};
handler.help = ['playlist *<texto>*'];
handler.tags = ['search'];
handler.command = /^playlist|playlist2$/i;
export default handler;
