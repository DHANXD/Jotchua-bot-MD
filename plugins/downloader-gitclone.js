import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `*𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐔𝐍 𝐄𝐍𝐋𝐀𝐂𝐄 𝐃𝐄 𝐆𝐈𝐓𝐇𝐔𝐁, 𝐄𝐉𝐄𝐌𝐏𝐋𝐎: ${usedPrefix + command} https://github.com/AleXD0009/Jotchua-bot-MD*`;
  if (!regex.test(args[0])) throw '*𝐋𝐈𝐍𝐊 𝐈𝐍𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐎!*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`*𝐄𝐒𝐏𝐄𝐑𝐄 𝐔𝐍 𝐌𝐎𝐌𝐄𝐍𝐓𝐎 𝐄𝐍 𝐋𝐎 𝐐𝐔𝐄 𝐄𝐍𝐕𝐈𝐎 𝐒𝐔 𝐀𝐑𝐂𝐇𝐈𝐕𝐎, 𝐒𝐈 𝐍𝐎 𝐒𝐄 𝐄𝐍𝐕𝐈𝐄 𝐏𝐔𝐄𝐃𝐄 𝐒𝐄𝐑 𝐏𝐎𝐑𝐐𝐔𝐄 𝐄𝐋 𝐑𝐄𝐏𝐎𝐒𝐈𝐓𝐎𝐑𝐈𝐎 𝐄𝐒 𝐌𝐔𝐘 𝐏𝐄𝐒𝐀𝐃𝐎*`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone <url>'];
handler.tags = ['downloader'];
handler.command = /gitclone/i;
export default handler;
