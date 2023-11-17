async function handler(m, {usedPrefix, command}) {
  command = command.toLowerCase();
  this.anonymous = this.anonymous ? this.anonymous : {};
  switch (command) {
    case 'next':
    case 'leave': {
      const room = Object.values(this.anonymous).find((room) => room.check(m.sender));
      if (!room) return this.sendMessage(other, {text: `*𝐍𝐎 𝐄𝐒𝐓𝐀𝐒 𝐄𝐍 𝐔𝐍 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎*\n\n*¿𝐐𝐔𝐈𝐄𝐑𝐄𝐒 𝐈𝐍𝐈𝐂𝐈𝐀𝐑 𝐔𝐍𝐎?*\n𝐄𝐒𝐂𝐑𝐈𝐁𝐄 ${usedPrefix}start`}, {quoted: m});
      // this.sendButton(m.chat, '*𝐍𝐎 𝐄𝐒𝐓𝐀𝐒 𝐄𝐍 𝐔𝐍 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎𝙾*\n\n*¿𝐐𝐔𝐈𝐄𝐑𝐄𝐒 𝐈𝐍𝐈𝐂𝐈𝐀𝐑 𝐔𝐍𝐎?*\n_𝐃𝐀 𝐂𝐋𝐈𝐂𝐊 𝐄𝐍 𝐄𝐋 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 𝐁𝐎𝐓𝐎𝐍_', author, null, [['𝐈𝐍𝐈𝐂𝐈𝐀𝐑 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎', `.start`]], m)
      m.reply('*[ ✔ ] 𝚂𝙰𝙻𝙸𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙳𝙴𝙻 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾*');
      const other = room.other(m.sender);
      if (other) await this.sendMessage(other, {text: `*𝐄𝐋 𝐎𝐓𝐑𝐎 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐇𝐀 𝐀𝐁𝐀𝐍𝐃𝐎𝐍𝐀𝐃𝐎 𝐄𝐋 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎*\n\n*¿𝐐𝐔𝐈𝐄𝐑𝐄𝐒 𝐈𝐑 𝐀 𝐎𝐓𝐑𝐎 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎?*\n𝐄𝐒𝐂𝐑𝐈𝐁𝐄 ${usedPrefix}start`}, {quoted: m});
      // this.sendButton(other, '*𝐄𝐋 𝐎𝐓𝐑𝐎 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐇𝐀 𝐀𝐁𝐀𝐍𝐃𝐎𝐍𝐀𝐃𝐎 𝐄𝐋 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎*\n\n*¿𝐐𝐔𝐈𝐄𝐑𝐄𝐒 𝐈𝐑 𝐀 𝐎𝐓𝐑𝐎 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎?*\n_𝐃𝐀 𝐂𝐋𝐈𝐂𝐊 𝐄𝐍 𝐄𝐋 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 𝐁𝐎𝐓𝐎𝐍_', author, null, [['𝐈𝐍𝐈𝐂𝐈𝐀𝐑 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎', `.start`]], m)
      delete this.anonymous[room.id];
      if (command === 'leave') break;
    }
    case 'start': {
      if (Object.values(this.anonymous).find((room) => room.check(m.sender))) return this.sendMessage(m.chat, {text: `*𝐓𝐎𝐃𝐀𝐕𝐈𝐀 𝐄𝐒𝐓𝐀𝐒 𝐄𝐍 𝐔𝐍 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎 𝐎 𝐄𝐒𝐏𝐄𝐑𝐀𝐍𝐃𝐎 𝐀 𝐐𝐔𝐄 𝐎𝐓𝐑𝐎 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐒𝐄 𝐔𝐍𝐀 𝐏𝐀𝐑𝐀 𝐈𝐍𝐈𝐂𝐈𝐀𝐑*\n\n*¿𝐐𝐔𝐈𝐄𝐑𝐄𝐒 𝐒𝐀𝐋𝐈𝐑 𝐃𝐄𝐋 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎?*\n𝐄𝐒𝐂𝐑𝐈𝐁𝐄 ${usedPrefix}leave`}, {quoted: m});
      // this.sendButton(m.chat, '*𝐓𝐎𝐃𝐀𝐕𝐈𝐀 𝐄𝐒𝐓𝐀𝐒 𝐄𝐍 𝐔𝐍 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎 𝐎 𝐄𝐒𝐏𝐄𝐑𝐀𝐍𝐃𝐎 𝐀 𝐐𝐔𝐄 𝐎𝐓𝐑𝐎 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐒𝐄 𝐔𝐍𝐀 𝐏𝐀𝐑𝐀 𝐈𝐍𝐈𝐂𝐈𝐀𝐑*\n\n*¿𝐐𝐔𝐈𝐄𝐑𝐄𝐒 𝐒𝐀𝐋𝐈𝐑 𝐃𝐄𝐋 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎?*\n_𝐃𝐀 𝐂𝐋𝐈𝐂𝐊 𝐄𝐍 𝐄𝐋 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 𝐁𝐎𝐓𝐎𝐍_', author, null, [['𝐒𝐀𝐋𝐈𝐑 𝐃𝐄𝐋 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎', `.leave`]], m)
      const room = Object.values(this.anonymous).find((room) => room.state === 'WAITING' && !room.check(m.sender));
      if (room) {
        await this.sendMessage(room.a, {text: `*𝐔𝐍𝐀 𝐏𝐄𝐑𝐒𝐎𝐍𝐀 𝐒𝐄 𝐀𝐇 𝐔𝐍𝐈𝐃𝐎 𝐀𝐋 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎, 𝐏𝐔𝐄𝐃𝐄𝐍 𝐈𝐍𝐈𝐂𝐈𝐀𝐑 𝐀 𝐂𝐇𝐀𝐓𝐄𝐀𝐑*`}, {quoted: m});
        // this.sendButton(room.a, '*𝐔𝐍𝐀 𝐏𝐄𝐑𝐒𝐎𝐍𝐀 𝐒𝐄 𝐀𝐇 𝐔𝐍𝐈𝐃𝐎 𝐀𝐋 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎, 𝐏𝐔𝐄𝐃𝐄𝐍 𝐈𝐍𝐈𝐂𝐈𝐀𝐑 𝐀 𝐂𝐇𝐀𝐓𝐄𝐀𝐑*', author, null, [['𝐈𝐑 𝐀 𝐎𝐓𝐑𝐎 𝐂𝐇𝐀𝐓', `.next`]], m)
        room.b = m.sender;
        room.state = 'CHATTING';
        await this.sendMessage(m.chat, {text: `*𝐔𝐍𝐀 𝐏𝐄𝐑𝐒𝐎𝐍𝐀 𝐒𝐄 𝐀𝐇 𝐔𝐍𝐈𝐃𝐎 𝐀𝐋 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎, 𝐏𝐔𝐄𝐃𝐄𝐍 𝐈𝐍𝐈𝐂𝐈𝐀𝐑 𝐀 𝐂𝐇𝐀𝐓𝐄𝐀𝐑*\n\n𝐈𝐑 𝐀 𝐎𝐓𝐑𝐎 𝐂𝐇𝐀𝐓 𝐄𝐒𝐂𝐑𝐈𝐁𝐄 ${usedPrefix}next`}, {quoted: m});
        // this.sendButton(m.chat, '*𝐔𝐍𝐀 𝐏𝐄𝐑𝐒𝐎𝐍𝐀 𝐒𝐄 𝐀𝐇 𝐔𝐍𝐈𝐃𝐎 𝐀𝐋 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎, 𝐏𝐔𝐄𝐃𝐄𝐍 𝐈𝐍𝐈𝐂𝐈𝐀𝐑 𝐀 𝐂𝐇𝐀𝐓𝐄𝐀𝐑*', author, null, [['𝐈𝐑 𝐀 𝐎𝐓𝐑𝐎 𝐂𝐇𝐀𝐓', `.next`]], m)
      } else {
        const id = + new Date;
        this.anonymous[id] = {
          id,
          a: m.sender,
          b: '',
          state: 'WAITING',
          check: function(who = '') {
            return [this.a, this.b].includes(who);
          },
          other: function(who = '') {
            return who === this.a ? this.b : who === this.b ? this.a : '';
          },
        };
        await this.sendMessage(m.chat, {text: `*𝐄𝐒𝐏𝐄𝐑𝐀𝐍𝐃𝐎 𝐀 𝐎𝐓𝐑𝐎 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐀𝐑𝐀 𝐄𝐌𝐏𝐄𝐙𝐀𝐑 𝐄𝐋 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎*\n\n*¿𝐐𝐔𝐈𝐄𝐑𝐄𝐒 𝐒𝐀𝐋𝐈𝐑 𝐃𝐄𝐋 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎?*\n𝐄𝐒𝐂𝐑𝐈𝐁𝐄 ${usedPrefix}leave`}, {quoted: m});
        // this.sendButton(m.chat, '*𝐄𝐒𝐏𝐄𝐑𝐀𝐍𝐃𝐎 𝐀 𝐎𝐓𝐑𝐎 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐀𝐑𝐀 𝐄𝐌𝐏𝐄𝐙𝐀𝐑 𝐄𝐋 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎*\n\n*¿𝐐𝐔𝐈𝐄𝐑𝐄𝐒 𝐒𝐀𝐋𝐈𝐑 𝐃𝐄𝐋 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎?*\n_𝐃𝐀 𝐂𝐋𝐈𝐂𝐊 𝐄𝐍 𝐄𝐋 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 𝐁𝐎𝐓𝐎𝐍_', author, null, [['𝐒𝐀𝐋𝐈𝐑 𝐃𝐄𝐋 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎', `.leave`]], m)
      }
      break;
    }
  }
}
handler.help = ['start', 'leave', 'next'];
handler.tags = ['anonymous'];
handler.command = ['start', 'leave', 'next'];
handler.private = true;
export default handler;
