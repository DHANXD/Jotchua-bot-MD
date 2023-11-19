const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `*𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄 𝐔𝐍 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐃𝐄 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌*\n\n*𝐄𝐉𝐄𝐌𝐏𝐋𝐎:*\n*${usedPrefix + command} luisitocomunica*`;
  await m.reply(global.wait);
  const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`);
  const anu = await res.json();
  const anuku = anu.result;
  if (anuku == '') return m.reply('*𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐈𝐍𝐕𝐀𝐋𝐈𝐃𝐎 𝐎 𝐒𝐈𝐍 𝐇𝐈𝐒𝐓𝐎𝐑𝐈𝐀𝐒*');
  for (const i of anuku) {
    const res = await axios.head(i);
    const mime = res.headers['content-type'];
    if (/image/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => {
        return m.reply('*𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐈𝐍𝐕𝐀𝐋𝐈𝐃𝐎 𝐎 𝐒𝐈𝐍 𝐇𝐈𝐒𝐓𝐎𝐑𝐈𝐀𝐒*');
      });
    }
    if (/video/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => {
        return m.reply('*𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐈𝐍𝐕𝐀𝐋𝐈𝐃𝐎 𝐎 𝐒𝐈𝐍 𝐇𝐈𝐒𝐓𝐎𝐑𝐈𝐀𝐒*');
      });
    }
  }
};
handler.help = ['igstory <username>'];
handler.tags = ['downloader'];
handler.command = ['igstory', 'ighistoria'];
export default handler;
