// manden porno test
const linkRegex = /https:/i;
export async function before(m, {conn, isAdmin, isBotAdmin, text}) {
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
  if (chat.antiLink2 && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      const linkThisGroup2 = `https://www.youtube.com/`;
      const linkThisGroup3 = `https://youtu.be/`;
      if (m.text.includes(linkThisGroup)) return !0;
      if (m.text.includes(linkThisGroup2)) return !0;
      if (m.text.includes(linkThisGroup3)) return !0;
    }
    await this.sendMessage(m.chat, {text: `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n*𝐀𝐝𝐢𝐨𝐬 👋 ${user} 𝚁𝐫𝐨𝐦𝐩𝐢𝐬𝐭𝐞 𝐥𝐚𝐬 𝐫𝐞𝐠𝐥𝐚𝐬 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨, 𝐬𝐞𝐫𝐚𝐬 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐝𝐨...👻*`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐞𝐥 𝐛𝐨𝐭 (𝐲𝐨) 𝐧𝐨 𝐞𝐬 𝐚𝐝𝐦𝐢𝐧, 𝐧𝐨 𝐩𝐮𝐞𝐝𝐨 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐬*');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐞𝐥 𝐩𝐫𝐨𝐩𝐢𝐞𝐭𝐚𝐫𝐢𝐨 𝐝𝐞𝐥 𝐛𝐨𝐭 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞 𝐡𝐚𝐛𝐢𝐥𝐢𝐭𝐚𝐝𝐨 𝐥𝐚𝐬 𝐫𝐞𝐬𝐭𝐫𝐢𝐜𝐜𝐢𝐨𝐧𝐞𝐬 (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐞 𝐜𝐨𝐧 𝐞𝐥 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐥𝐨 𝐡𝐚𝐛𝐢𝐥𝐢𝐭𝐞 🐶*');
  }
  return !0;
}
