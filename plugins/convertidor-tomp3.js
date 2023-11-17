import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `*𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐀  𝐀𝐋 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐐𝐔𝐄 𝐃𝐄𝐒𝐄𝐄 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐑 𝐄𝐍 𝐈𝐌𝐀𝐆𝐄𝐍 𝐂𝐎𝐍 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎*`;
  const media = await q.download();
  if (!media) throw '*𝐋𝐎 𝐋𝐀𝐌𝐄𝐍𝐓𝐎 𝐎𝐂𝐔𝐑𝐑𝐈𝐎 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 𝐀𝐋 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑 𝐒𝐔 𝐕𝐈𝐃𝐄𝐎, 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑 𝐕𝐔𝐄𝐋𝐕𝐀  𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*𝐋𝐎 𝐋𝐀𝐌𝐄𝐍𝐓𝐎 𝐎𝐂𝐔𝐑𝐑𝐈𝐎 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 𝐀𝐋 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐑 𝐒𝐔 𝐍𝐎𝐓𝐀 𝐃𝐄 𝐕𝐎𝐙 𝐀 𝐀𝐔𝐃𝐈𝐎/𝐌𝐏𝟑, 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑 𝐕𝐔𝐄𝐋𝐕𝐀  𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = /^to(mp3|audio)$/i;
export default handler;
