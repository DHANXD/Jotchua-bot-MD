/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐀  𝐀 𝐔𝐍 𝐕𝐈𝐃𝐄𝐎 𝐐𝐔𝐄 𝐃𝐄𝐒𝐄𝐄 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐑 𝐄𝐍 𝐆𝐈𝐅 𝐂𝐎𝐍 𝐀𝐔𝐃𝐈𝐎*`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `*𝐄𝐋 𝐓𝐈𝐏𝐎 𝐃𝐄 𝐀𝐑𝐂𝐇𝐈𝐕𝐎𝙾 ${mime} 𝐍𝐎 𝐄𝐒 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐎, 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐀 𝐀 𝐔𝐍 𝐕𝐈𝐃𝐄𝐎 𝐐𝐔𝐄 𝐃𝐄𝐒𝐄𝐄 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐑 𝐄𝐍 𝐆𝐈𝐅 𝐂𝐎𝐍 𝐀𝐔𝐃𝐈𝐎*`;
  m.reply(global.wait);
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*ᴀϙᴜɪ ᴇsᴛᴀ sᴜ ɢɪғ ᴄᴏɴ ᴀᴜᴅɪᴏ, ᴀʟ ᴀʙʀɪʀʟᴏ sᴇ ʀᴇᴘʀᴏᴅᴜᴄᴇ ᴄᴏɴ ᴀᴜᴅɪᴏ*'}, {quoted: m});
};
handler.command = ['togifaud'];
export default handler;
