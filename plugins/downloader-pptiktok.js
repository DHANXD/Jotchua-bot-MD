import fetch from 'node-fetch';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw '*_𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄 𝐔𝐍 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐃𝐄 𝐔𝐍 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐃𝐄 𝐓𝐈𝐊𝐓𝐎𝐊_*';
  const res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`;
  conn.sendFile(m.chat, res, 'error.jpg', `*[ ✔ ] 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝙻𝙰 𝙵𝙾𝚃𝙾 𝙳𝙴 𝙿𝙴𝚁𝙵𝙸𝙻 𝙳𝙴 ${text}*`, m, false);
};
handler.help = ['tiktokfoto'].map((v) => v + ' <username>');
handler.tags = ['downloader'];
handler.command = /^(tiktokfoto|pptiktok)$/i;
export default handler;
