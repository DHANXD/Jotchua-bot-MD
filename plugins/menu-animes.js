import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen5;
    // let vn = './media/menu.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str =
`╭───────────────────────
│☢╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
│☢┃  — *𝐣𝐨𝐭𝐜𝐡𝐮𝐚-𝐛𝐨𝐭-𝐌𝐃* —
│☢┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
│☢┃ ⛄ *𝗛ola, ${taguser}*
│☢╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
╰────────────────────────

╭───────────────────────
│☢╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
│☢┃ *_𝐌𝐄𝐍𝐔 𝐀𝐍𝐈𝐌𝐄_*
│☢┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
│☢┣ ⛄  _${usedPrefix}lolivid_
│☢┣ ⛄  _${usedPrefix}loli_
│☢┣ ⛄  _${usedPrefix}ppcouple_
│☢┣ ⛄  _${usedPrefix}neko_
│☢┣ ⛄  _${usedPrefix}waifu_
│☢┣ ⛄  _${usedPrefix}akira_
│☢┣ ⛄  _${usedPrefix}akiyama_
│☢┣ ⛄  _${usedPrefix}anna_
│☢┣ ⛄  _${usedPrefix}asuna_
│☢┣ ⛄  _${usedPrefix}ayuzawa_
│☢┣ ⛄  _${usedPrefix}boruto_
│☢┣ ⛄  _${usedPrefix}chiho_
│☢┣ ⛄  _${usedPrefix}chitoge_
│☢┣ ⛄  _${usedPrefix}deidara_
│☢┣ ⛄  _${usedPrefix}erza_
│☢┣ ⛄  _${usedPrefix}elaina_
│☢┣ ⛄  _${usedPrefix}eba_
│☢┣ ⛄  _${usedPrefix}emilia_
│☢┣ ⛄  _${usedPrefix}hestia_
│☢┣ ⛄  _${usedPrefix}hinata_
│☢┣ ⛄  _${usedPrefix}inori_
│☢┣ ⛄  _${usedPrefix}isuzu_
│☢┣ ⛄  _${usedPrefix}itachi_
│☢┣ ⛄  _${usedPrefix}itori_
│☢┣ ⛄  _${usedPrefix}kaga_
│☢┣ ⛄  _${usedPrefix}kagura_
│☢┣ ⛄  _${usedPrefix}kaori_
│☢┣ ⛄  _${usedPrefix}keneki_
│☢┣ ⛄  _${usedPrefix}kotori_
│☢┣ ⛄  _${usedPrefix}kurumi_
│☢┣ ⛄  _${usedPrefix}madara_
│☢┣ ⛄  _${usedPrefix}mikasa_
│☢┣ ⛄  _${usedPrefix}miku_
│☢┣ ⛄  _${usedPrefix}minato_
│☢┣ ⛄  _${usedPrefix}naruto_
│☢┣ ⛄  _${usedPrefix}nezuko_
│☢┣ ⛄  _${usedPrefix}sagiri_
│☢┣ ⛄  _${usedPrefix}sasuke_
│☢┣ ⛄  _${usedPrefix}sakura_
│☢┣ ⛄  _${usedPrefix}cosplay_
│☢┃ © 𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐛𝐨𝐭-𝐌𝐃 | 𝐁𝐲 𝐀𝐋𝐒
│☢╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
╰────────────────────────`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*_𝐄𝐋 𝐌𝐄𝐍𝐔 𝐓𝐈𝐄𝐍𝐄 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 𝐘 𝐍𝐎 𝐄𝐒 𝐏𝐎𝐒𝐈𝐁𝐋𝐄 𝐄𝐍𝐕𝐈𝐀𝐑𝐋𝐎, 𝐑𝐄𝐏𝐎𝐑𝐓𝐄𝐋𝐎 𝐀𝐋 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓_*', m);
  }
};
handler.command = /^(animes|menuanimes)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
