const handler = async (m, {conn, usedPrefix, text, command}) => {
  let hash = text;
  if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
  if (!hash) throw `*𝐒𝐎𝐋𝐎 𝐒𝐄 𝐏𝐔𝐄𝐃𝐄𝐍 𝐀𝐒𝐈𝐆𝐍𝐀𝐑 𝐓𝐄𝐗𝐓𝐎𝐒 𝐎 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐀𝐒𝐈𝐆𝐍𝐀𝐃𝐎𝐒 𝐀 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐎 𝐈𝐌𝐀𝐆𝐄𝐍𝐄𝐒, 𝐏𝐀𝐑𝐀 𝐎𝐁𝐓𝐄𝐍𝐄𝐑 𝐄𝐋 𝐂𝐎𝐃𝐈𝐆𝐎 𝐀𝐒𝐈𝐆𝐀𝐍𝐃𝐎 𝐔𝐒𝐄 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 ${usedPrefix}listcmd*`;
  const sticker = global.db.data.sticker;
  if (sticker[hash] && sticker[hash].locked) throw '*𝐒𝐎𝐋𝐎 𝐄𝐋 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐏𝐔𝐄𝐃𝐄 𝐑𝐄𝐀𝐋𝐈𝐙𝐀𝐑 𝐋𝐀 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐂𝐈𝐎𝐍*';
  delete sticker[hash];
  m.reply(`*𝙴𝙻 𝚃𝙴𝚇𝚃𝙾/𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝚂𝙸𝙶𝙽𝙰𝙳𝙾 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁/𝙸𝙼𝙰𝙶𝙴𝙽 𝙵𝚄𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 𝙳𝙴 𝙻𝙰 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴*`);
};
handler.command = ['delcmd'];
handler.rowner = true;
export default handler;
