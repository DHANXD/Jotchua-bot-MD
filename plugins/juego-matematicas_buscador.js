global.math = global.math ? global.math : {};
const handler = async (m, {conn}) => {
  const id = m.chat;
  if (!m.quoted) return;
  if (m.quoted.sender != conn.user.jid) return;
  if (!/^cuanto es el resultado de/i.test(m.quoted.text)) return;
  if (!(m.chat in global.math)) return conn.reply(m.chat, `*ya se ah respondido a esa pregunta*`, m);
  // conn.sendButton(m.chat, '*ya se ah respondido a esa pregunta*', author, null, [['volver a jugar', '/mates']], m)
  if (m.quoted.id == global.math[id][0].id) {
    const math = global.math[id][1];
    if (m.text == math.result) {
      conn.reply(m.chat, `*respuesta correcta!!*\n*𝙷𝙰𝚉 𝙶𝙰𝙽𝙰𝙳𝙾: ${math.bonus} 𝚇𝙿*`, m);
      // conn.sendButton(m.chat, `*respuesta correcta!!*\n*haz ganado: ${math.bonus} xp*`, author, null, [['volver a jugar', `/math ${math.mode}`]], m)
      global.db.data.users[m.sender].exp += math.bonus;
      clearTimeout(global.math[id][3]);
      delete global.math[id];
    } else {
      if (--global.math[id][2] == 0) {
        conn.reply(m.chat, `*se acabaron tus oportunidades*\n*la respuesta es: ${math.result}*`, m);
        // conn.sendButton(m.chat, `*se acabaron tus oportunidades*\n*la respuesta es: ${math.result}*`, author, null, [['volver a jugar', `/math ${math.mode}`]], m)
        clearTimeout(global.math[id][3]);
        delete global.math[id];
      } else conn.reply(m.chat, `*respuesta incorrecta!!*\n*aun disponibles ${global.math[id][2]} oportunidades*`, m);
    }
  }
};
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/;
handler.command = new RegExp;
export default handler;
