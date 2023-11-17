const handler = async (m, {text}) => {
  const user = global.db.data.users[m.sender];
  user.afk = + new Date;
  user.afkReason = text;
  m.reply(`*𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 ${conn.getName(m.sender)} 𝐄𝐒𝐓𝐀𝐑𝐀 𝐈𝐍𝐀𝐂𝐓𝐈𝐕𝐎 (𝐀𝐅𝐊), 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑 𝐍𝐎 𝐋𝐎 𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐄𝐍*\n\n* 𝐌𝐎𝐓𝐈𝐕𝐎 𝐃𝐄 𝐋𝐀 𝐈𝐍𝐀𝐂𝐓𝐈𝐕𝐈𝐃𝐀𝐃 (𝐀𝐅𝐊)${text ? ': ' + text : ''}*
`);
};
handler.help = ['afk [alasan]'];
handler.tags = ['main'];
handler.command = /^afk$/i;
export default handler;
