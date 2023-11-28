import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `𝐘𝐀 𝐄𝐒𝐓𝐀𝐒 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎 \n\n¿𝐐𝐔𝐈𝐄𝐑𝐄 𝐕𝐎𝐋𝐕𝐄𝐑 𝐀 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐑𝐒𝐄?\n\n 𝐔𝐒𝐄 𝐄𝐒𝐓𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐏𝐀𝐑𝐀 𝐄𝐋𝐈𝐌𝐈𝐍𝐀𝐑 𝐒𝐔 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎\n*${usedPrefix}unreg* <Número de serie>`;
  if (!Reg.test(text)) throw `*𝐅𝐎𝐑𝐌𝐀𝐓𝐎 𝐈𝐍𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐎*\n\n* 𝐔𝐒𝐎 𝐃𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎: ${usedPrefix + command} nombre.edad*\n* Ejemplo: ${usedPrefix + command} ALS.18*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '*_𝐃𝐄𝐁𝐄𝐒 𝐏𝐎𝐍𝐄𝐑 𝐔𝐍 𝐍𝐎𝐌𝐁𝐑𝐄_*';
  if (!age) throw '*_𝐋𝐀 𝐄𝐃𝐀𝐃 𝐍𝐎 𝐏𝐔𝐄𝐃𝐄 𝐄𝐒𝐓𝐀𝐑 𝐕𝐀𝐂𝐈𝐀_*';
  if (name.length >= 30) throw '*_𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄 𝐄𝐒 𝐃𝐄𝐌𝐀𝐒𝐈𝐀𝐃𝐎 𝐋𝐀𝐑𝐆𝐎_*';
  age = parseInt(age);
  if (age > 100) throw '*Como es que todavia sigues vivo? *';
  if (age < 5) throw '*desde cuando los bebes saben usar whatsapp? *';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ *𝙽𝙾𝙼𝙱𝚁𝙴:* ${name}
┃ *𝙴𝙳𝙰𝙳:* ${age} años
┃ *𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴:* 
┃ ${sn}
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ ¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 
┃ 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 
┃ 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!
┗┅ ━━━━━━━━━━━━ ┅ ━`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;
