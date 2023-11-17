import {toPTT} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (m.quoted ? m.quoted : m.msg).mimetype || '';
  if (!/video|audio/.test(mime)) throw `*𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐀 𝐀𝐋 𝐕𝐈𝐃𝐄𝐎 𝐎 𝐀𝐔𝐃𝐈𝐎 𝐐𝐔𝐄 𝐃𝐄𝐒𝐄𝐄 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐑 𝐀 𝐍𝐎𝐓𝐀 𝐃𝐄 𝐕𝐎𝐙*`;
  const media = await q.download?.();
  if (!media && !/video/.test(mime)) throw '*𝐋𝐎 𝐋𝐀𝐌𝐄𝐍𝐓𝐎 𝐎𝐂𝐔𝐑𝐑𝐈𝐎 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 𝐀𝐋 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑 𝐒𝐔  𝐕𝐈𝐃𝐄𝐎, 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑 𝐕𝐔𝐄𝐋𝐕𝐀 𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎*';
  if (!media && !/audio/.test(mime)) throw '*𝐋𝐎 𝐋𝐀𝐌𝐄𝐍𝐓𝐎 𝐎𝐂𝐔𝐑𝐑𝐈𝐎 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 𝐀𝐋 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑 𝐒𝐔 𝐀𝐔𝐃𝐈𝐎, 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑 𝐕𝐔𝐄𝐋𝐕𝐀 𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎 *';
  const audio = await toPTT(media, 'mp4');
  if (!audio.data && !/audio/.test(mime)) throw '*𝐋𝐎 𝐋𝐀𝐌𝐄𝐍𝐓𝐎 𝐎𝐂𝐔𝐑𝐑𝐈𝐎 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 𝐀𝐋 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐑 𝐒𝐔 𝐀𝐔𝐃𝐈𝐎 𝐀 𝐍𝐎𝐓𝐀 𝐃𝐄 𝐕𝐎𝐙, 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑 𝐕𝐔𝐄𝐋𝐕𝐀 𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎*';
  if (!audio.data && !/video/.test(mime)) throw '*𝐋𝐎 𝐋𝐀𝐌𝐄𝐍𝐓𝐎 𝐎𝐂𝐔𝐑𝐑𝐈𝐎 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 𝐀𝐋 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐑 𝐒𝐔 𝐕𝐈𝐃𝐄𝐎 𝐀 𝐍𝐎𝐓𝐀 𝐃𝐄 𝐕𝐎𝐙, 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑 𝐕𝐔𝐄𝐋𝐕𝐀 𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎*';
  const aa = conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, {mimetype: 'audio/mpeg'});
  if (!aa) return conn.sendMessage(m.chat, {audio: {url: media}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
};
handler.help = ['tovn (reply)'];
handler.tags = ['audio'];
handler.command = /^to(vn|(ptt)?)$/i;
export default handler;
