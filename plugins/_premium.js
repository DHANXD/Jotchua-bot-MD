const handler = (m) => m;

export async function all(m) {
  for (const user of Object.values(global.db.data.users)) {
    if (user.premiumTime != 0 && user.premium) {
      if (new Date() * 1 >= user.premiumTime) {
        user.premiumTime = 0;
        user.premium = false;
        const JID = Object.keys(global.db.data.users).find((key) => global.db.data.users[key] === user);
        const usuarioJid = JID.split`@`[0];
        const textoo = `* @${usuarioJid} 𝐓𝐔 𝐓𝐈𝐄𝐌𝐏𝐎 𝐂𝐎𝐌𝐎 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐀 𝐄𝐗𝐏𝐈𝐑𝐀𝐃𝐎, 𝐘𝐀 𝐍𝐎 𝐄𝐑𝐄𝐒 𝐔𝐍 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌.*`;
        await this.sendMessage(JID, {text: textoo, mentions: [JID]}, {quoted: ''});
      }
    }
  }
}

/* let handler = m => m

export async function all(m) {
  let user = global.db.data.users[m.sender]
  if (m.chat.endsWith('broadcast')) return

  if (user.premiumTime != 0 && user.premium && new Date() * 1 >= user.premiumTime) {
    user.premiumTime = 0
    user.premium = false

    await m.reply(`* @${m.sender.split`@`[0]} 𝐓𝐔 𝐓𝐈𝐄𝐌𝐏𝐎 𝐂𝐎𝐌𝐎 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐀 𝐄𝐗𝐏𝐈𝐑𝐀𝐃𝐎, 𝐘𝐀 𝐍𝐎 𝐄𝐑𝐄𝐒 𝐔𝐍 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌.*`, m.sender, { mentions: [m.sender] })
  }
}*/
