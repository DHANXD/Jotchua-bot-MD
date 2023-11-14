const handler = (m) => m;
handler.before = async function(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
  /* if (m.message) {
    console.log(m.message)
  }*/
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[conn.user.jid] || {};
  if (isBotAdmin && chat.antiArab2 && !isAdmin && !isOwner && !isROwner && bot.restrict) {
    if (m.sender.startsWith('212' || '212')) {
      m.reply(`*𝐞𝐧 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨 𝐧𝐨 𝐬𝐞 𝐩𝐞𝐫𝐦𝐢𝐭𝐞𝐧 𝐧𝐮𝐦𝐞𝐫𝐨𝐬 𝐚𝐫𝐚𝐛𝐞𝐬 𝐨 𝐫𝐚𝐫𝐨𝐬 𝐩𝐨𝐫 𝐥𝐨 𝐪𝐮𝐞 𝐬𝐞 𝐭𝐞 𝐬𝐚𝐜𝐚𝐫𝐚 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨*`);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }

    if (m.sender.startsWith('265' || '265')) {
      m.reply(`*𝐞𝐧 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨 𝐧𝐨 𝐬𝐞 𝐩𝐞𝐫𝐦𝐢𝐭𝐞𝐧 𝐧𝐮𝐦𝐞𝐫𝐨𝐬 𝐚𝐫𝐚𝐛𝐞𝐬 𝐨 𝐫𝐚𝐫𝐨𝐬 𝐩𝐨𝐫 𝐥𝐨 𝐪𝐮𝐞 𝐬𝐞 𝐭𝐞 𝐬𝐚𝐜𝐚𝐫𝐚 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨*`);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }

    if (m.sender.startsWith('92' || '92')) {
      m.reply(`*𝐞𝐧 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨 𝐧𝐨 𝐬𝐞 𝐩𝐞𝐫𝐦𝐢𝐭𝐞𝐧 𝐧𝐮𝐦𝐞𝐫𝐨𝐬 𝐚𝐫𝐚𝐛𝐞𝐬 𝐨 𝐫𝐚𝐫𝐨𝐬 𝐩𝐨𝐫 𝐥𝐨 𝐪𝐮𝐞 𝐬𝐞 𝐭𝐞 𝐬𝐚𝐜𝐚𝐫𝐚 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨*`);
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    }
  }
};
export default handler;
