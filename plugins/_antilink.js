const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
export async function before(m, {conn, isAdmin, isBotAdmin}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);
  const grupo = `https://chat.whatsapp.com`;
  if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*𝐇𝐄𝐘! 𝐞𝐥 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐞𝐬𝐭𝐚 𝐡𝐚𝐛𝐢𝐥𝐢𝐭𝐚𝐝𝐨, 𝐩𝐞𝐫𝐨 𝐞𝐫𝐞𝐬 𝐚𝐝𝐦𝐢𝐧 😸*');
  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return !0;
    }
    await this.sendMessage(m.chat, {text: `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n*𝐀𝐝𝐢𝐨𝐬 👋 ${user} 𝐫𝐨𝐦𝐩𝐢𝐬𝐭𝐞 𝐥𝐚𝐬 𝐫𝐞𝐠𝐥𝐚𝐬 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨, 𝐬𝐞𝐫𝐚𝐬 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐝𝐨...👻*`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐞𝐥 𝐛𝐨𝐭 (𝐲𝐨) 𝐧𝐨 𝐞𝐬 𝐚𝐝𝐦𝐢𝐧, 𝐧𝐨 𝐩𝐮𝐞𝐝𝐨 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐬*');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐞𝐥 𝐩𝐫𝐨𝐩𝐢𝐞𝐭𝐚𝐫𝐢𝐨 𝐝𝐞𝐥 𝐛𝐨𝐭 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞 𝐡𝐚𝐛𝐢𝐥𝐢𝐭𝐚𝐝𝐨 𝐥𝐚𝐬 𝐫𝐞𝐬𝐭𝐫𝐢𝐜𝐜𝐢𝐨𝐧𝐞𝐬 (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐞 𝐜𝐨𝐧 𝐞𝐥 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐥𝐨 𝐡𝐚𝐛𝐢𝐥𝐢𝐭𝐞 🐶*');
  }
  return !0;
}
