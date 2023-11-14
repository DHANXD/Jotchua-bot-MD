import {sticker} from '../lib/sticker.js';

const handler = (m) => m;

handler.all = async function(m) {
  const chat = db.data.chats[m.chat];
  const user = db.data.users[m.sender];

  if (chat.autosticker && m.isGroup) {
    const q = m;
    let stiker = false;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/webp/g.test(mime)) return;
    if (/image/g.test(mime)) {
      const img = await q.download?.();
      if (!img) return;
      stiker = await sticker(img, false, packname, author);
    } else if (/video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return await m.reply(`*𝐄𝐋 𝐕𝐈𝐃𝐄𝐎 𝐍𝐎 𝐏𝐔𝐄𝐃𝐄 𝐃𝐔𝐑𝐀𝐑 𝐌𝐀𝐒 𝐃𝐄 𝟕 𝐒𝐄𝐆𝐔𝐍𝐃𝐎𝐒*\n\n𝐏𝐀𝐑𝐀 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐄𝐒𝐓𝐀 𝐎𝐏𝐂𝐈𝐎𝐍 𝐄𝐒𝐂𝐑𝐈𝐁𝐀 (#𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚊𝚞𝚝𝚘𝚜𝚝𝚒𝚌𝚔𝚎𝚛)`);
      // await this.sendButton(m.chat, '*𝐄𝐋 𝐕𝐈𝐃𝐄𝐎 𝐍𝐎 𝐏𝐔𝐄𝐃𝐄 𝐃𝐔𝐑𝐀𝐑 𝐌𝐀𝐒 𝐃𝐄 𝟕 𝐒𝐄𝐆𝐔𝐍𝐃𝐎𝐒*', wm, [['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝚄𝚃𝙾𝚂𝚃𝙸𝙲𝙺𝙴𝚁', '/disable autosticker']], m)
      const img = await q.download();
      if (!img) return;
      stiker = await sticker(img, false, packname, author);
    } else if (m.text.split(/\n| /i)[0]) {
      if (isUrl(m.text)) stiker = await sticker(false, m.text.split(/\n| /i)[0], packname, author);
      else return;
    }
    if (stiker) {
      await mconn.conn.sendFile(m.chat, stiker, null, {asSticker: true});
    }
  }
  return !0;
};
export default handler;

const isUrl = (text) => {
  return text.match(new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'));
};
