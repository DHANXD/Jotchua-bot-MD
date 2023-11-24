import {pinterest} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*_𝐄𝐉𝐄𝐌𝐏𝐋𝐎 𝐃𝐄 𝐔𝐒𝐎 𝐃𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎_ ${usedPrefix + command} Minecraft*`;
  const json = await pinterest(text);
  conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
*_𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐃𝐄 𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀_*
${text}
`.trim(), m);
};
handler.help = ['pinterest <keyword>'];
handler.tags = ['internet'];
handler.command = /^(pinterest)$/i;
export default handler;
