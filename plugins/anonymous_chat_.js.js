export async function before(m, {match}) {
  if (!m.chat.endsWith('@s.whatsapp.net')) {
    return !0;
  }
  this.anonymous = this.anonymous ? this.anonymous : {};
  const room = Object.values(this.anonymous).find((room) => [room?.a, room?.b].includes(m.sender) && room?.state === 'CHATTING');
  if (room) {
    if (/^(next|leave|start)/.test(m.text)) {
      const other = [room?.a, room?.b].find((user) => user !== m.sender);
      if (other) {
        await m.copyNForward(other, true);
      } else {
        conn.sendMessage(m.chat, {text: `*𝐍𝐨 𝐞𝐬𝐭𝐚𝐬 𝐞𝐧 𝐮𝐧 𝐜𝐡𝐚𝐭, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐞𝐬𝐩𝐞𝐫𝐚 𝐚 𝐞𝐬𝐭𝐚𝐫 𝐞𝐧 𝐮𝐧𝐨.*`}, {quoted: m});
      }
    }
  } else {
    if (!/^(next|leave|start)/.test(m.text)) {
      return;
    }
    conn.sendMessage(m.chat, {text: `*𝐍𝐨 𝐞𝐬𝐭𝐚𝐬 𝐞𝐧 𝐮𝐧 𝐜𝐡𝐚𝐭, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐞𝐬𝐩𝐞𝐫𝐚 𝐚 𝐞𝐬𝐭𝐚𝐫 𝐞𝐧 𝐮𝐧𝐨.*`}, {quoted: m});
  }
  return !0;
}
