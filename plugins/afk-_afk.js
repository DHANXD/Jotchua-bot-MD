export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`
  *𝐃𝐄𝐉𝐀𝐒𝐓𝐄 𝐃𝐄 𝐄𝐒𝐓𝐀𝐑 𝐈𝐍𝐀𝐂𝐓𝐈𝐕𝐎 (𝐀𝐅𝐊)${user.afkReason ? ' 𝐃𝐄𝐒𝐏𝐔𝐄𝐒 𝐃𝐄 𝐄𝐒𝐓𝐀𝐑 𝐈𝐍𝐀𝐂𝐓𝐈𝐕𝐎 (𝐀𝐅𝐊) 𝐏𝐎𝐑 𝐄𝐋 𝐌𝐎𝐓𝐈𝐕𝐎: ' + user.afkReason : ''}*
  
  * 𝐓𝐈𝐄𝐌𝐏𝐎 𝐃𝐄 𝐈𝐍𝐀𝐂𝐓𝐈𝐕𝐈𝐃𝐀𝐃 (𝐀𝐅𝐊): ${(new Date - user.afk).toTimeString()}*
  `.trim());
    user.afk = -1;
    user.afkReason = '';
  }
  const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
  for (const jid of jids) {
    const user = global.db.data.users[jid];
    if (!user) {
      continue;
    }
    const afkTime = user.afk;
    if (!afkTime || afkTime < 0) {
      continue;
    }
    const reason = user.afkReason || '';
    m.reply(`* 𝙽𝙾 𝙻𝙾 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴𝚂 *

*𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐐𝐔𝐄 𝐔𝐒𝐓𝐄𝐃 𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐎 𝐄𝐒𝐓𝐀 𝐈𝐍𝐀𝐂𝐓𝐈𝐕𝐎 (𝐀𝐅𝐊)*      
*${reason ? '𝐌𝐎𝐓𝐈𝐕𝐎 𝐃𝐄 𝐈𝐍𝐀𝐂𝐓𝐈𝐕𝐈𝐃𝐀𝐃 (𝐀𝐅𝐊): ' + reason : '𝐌𝐎𝐓𝐈𝐕𝐎 𝐃𝐄 𝐈𝐍𝐀𝐂𝐓𝐈𝐕𝐈𝐃𝐀𝐃 (𝐀𝐅𝐊): _𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐍𝐎 𝐄𝐒𝐏𝐄𝐂𝐈𝐅𝐈𝐂𝐎 𝐔𝐍 𝐌𝐎𝐓𝐈𝐕𝐎_'}*
*𝐓𝐈𝐄𝐌𝐏𝐎 𝐓𝐑𝐀𝐍𝐒𝐂𝐔𝐑𝐑𝐈𝐃𝐎 𝐃𝐄 𝐈𝐍𝐀𝐂𝐓𝐈𝐕𝐈𝐃𝐀𝐃𝙳 (𝐀𝐅𝐊): ${(new Date - afkTime).toTimeString()}*
  `.trim());
  }
  return true;
}
