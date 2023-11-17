import {webp2png} from '../lib/webp2mp4.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const notStickerMessage = `*𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐀  𝐀𝐋 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐐𝐔𝐄 𝐃𝐄𝐒𝐄𝐄 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐑 𝐄𝐍 𝐈𝐌𝐀𝐆𝐄𝐍 𝐂𝐎𝐍 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 ${usedPrefix + command}*`;
  if (!m.quoted) throw notStickerMessage;
  const q = m.quoted || m;
  const mime = q.mediaType || '';
  if (!/sticker/.test(mime)) throw notStickerMessage;
  const media = await q.download();
  const out = await webp2png(media).catch((_) => null) || Buffer.alloc(0);
  await conn.sendFile(m.chat, out, 'error.png', null, m);
};
handler.help = ['toimg (reply)'];
handler.tags = ['sticker'];
handler.command = ['toimg', 'jpg', 'img'];
export default handler;
