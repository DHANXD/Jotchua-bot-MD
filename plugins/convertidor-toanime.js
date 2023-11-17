import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  if (!/image/g.test(mime)) throw '*𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐀 𝐎 𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐄 𝐀 𝐔𝐍𝐀 𝐈𝐌𝐀𝐆𝐄𝐍*';
  m.reply('*𝐂𝐎𝐍𝐕𝐈𝐑𝐓𝐈𝐄𝐍𝐃𝐎 𝐈𝐌𝐀𝐆𝐄𝐍 𝐀 𝐃𝐈𝐒𝐄Ñ𝐎 𝐀𝐍𝐈𝐌𝐄, 𝐒𝐄𝐀 𝐏𝐀𝐂𝐈𝐄𝐍𝐓𝐄 𝐄𝐍 𝐋𝐎 𝐐𝐔𝐄 𝐄𝐍𝐕𝐈𝐎 𝐄𝐋 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎*');
  const data = await q.download?.();
  const image = await uploadImage(data);
  try {
    const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
    await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
  } catch (i) {
    try {
      const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
      await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
    } catch (a) {
      try {
        const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
        await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
      } catch (e) {
        throw '*𝐄𝐑𝐑𝐎𝐑, 𝐕𝐄𝐑𝐈𝐅𝐈𝐐𝐔𝐄 𝐐𝐔𝐄 𝐄𝐍 𝐋𝐀 𝐈𝐌𝐀𝐆𝐄𝐍 𝐒𝐄𝐀 𝐕𝐈𝐒𝐈𝐁𝐋𝐄 𝐄𝐋 𝐑𝐎𝐒𝐓𝐑𝐎 𝐃𝐄 𝐔𝐍𝐀 𝐏𝐄𝐑𝐒𝐎𝐍𝐀*';
      }
    }
  }
};
handler.help = ['toanime'];
handler.tags = ['tools'];
handler.command = /^(jadianime|toanime)$/i;
export default handler;
