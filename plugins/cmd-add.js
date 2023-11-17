const handler = async (m, {conn, text, usedPrefix, command}) => {
  global.db.data.sticker = global.db.data.sticker || {};
  if (!m.quoted) throw '*𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄 𝐀𝐋 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐎 𝐈𝐌𝐀𝐆𝐄𝐍 𝐀𝐋 𝐂𝐔𝐀𝐋 𝐃𝐄𝐒𝐄𝐀 𝐀𝐆𝐑𝐄𝐆𝐀𝐑 𝐔𝐍 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐎 𝐓𝐄𝐗𝐓𝐎*';
  if (!m.quoted.fileSha256) throw '*𝐒𝐎𝐋𝐎 𝐏𝐔𝐄𝐃𝐄𝐒 𝐀𝐒𝐈𝐆𝐍𝐀𝐑 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐎 𝐓𝐄𝐗𝐓𝐎𝐒 𝐀 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐄 𝐈𝐌𝐀𝐆𝐄𝐍𝐄𝐒*';
  if (!text) throw `*𝐄𝐑𝐑𝐎𝐑 𝐃𝐄 𝐔𝐒𝐎, 𝐓𝐄𝐗𝐓𝐎 𝐅𝐀𝐋𝐓𝐀𝐍𝐓𝐄*\n\n*𝐔𝐒𝐎 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐎 𝐃𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃:*\n* ${usedPrefix + command} <texto> <responder a sticker o imagen>*\n\n*𝐄𝐉𝐄𝐌𝐏𝐋𝐎 𝐃𝐄 𝐔𝐒𝐎 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐎 𝐃𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎:*\n* ${usedPrefix + command} <#menu> <responder a sticker o imagen>*`;
  const sticker = global.db.data.sticker;
  const hash = m.quoted.fileSha256.toString('base64');
  if (sticker[hash] && sticker[hash].locked) throw '*𝐒𝐎𝐋𝐎 𝐄𝐋 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐏𝐔𝐄𝐃𝐄 𝐑𝐄𝐀𝐋𝐈𝐙𝐀𝐑 𝐋𝐀 𝐌𝐎𝐃𝐈𝐅𝐈𝐂𝐀𝐂𝐈𝐎𝐍*';
  sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false};
  m.reply(`*𝙴𝙻 𝚃𝙴𝚇𝚃𝙾/𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝚂𝙸𝙶𝙽𝙰𝙳𝙾 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁/𝙸𝙼𝙰𝙶𝙴𝙽 𝙵𝚄𝙴 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾 𝙰 𝙻𝙰 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴*`);
};
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset'];
handler.rowner = true;
export default handler;
