/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '**_𝐔𝐬𝐚 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞𝐧 𝐞𝐥 𝐧𝐮𝐦𝐞𝐫𝐨 𝐩𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥 𝐝𝐞𝐥 𝐛𝐨𝐭_**'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: '*[❗] Iniciando proceso de eliminación de todos los archivos de sesión, excepto el archivo creds.json...*'}, {quoted: m});
  const sessionPath = './JotchuaSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(m.chat, {text: '*_𝐋𝐚 𝐜𝐚𝐫𝐩𝐞𝐭𝐚 𝐉𝐨𝐭𝐜𝐡𝐮𝐚𝐒𝐞𝐬𝐬𝐢𝐨𝐧 𝐧𝐨 𝐞𝐱𝐢𝐬𝐭𝐞 𝐨 𝐞𝐬𝐭á 𝐯𝐚𝐜í𝐚_.*'}, {quoted: m});
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '*_𝐍𝐨 𝐬𝐞 𝐞𝐧𝐜𝐨𝐧𝐭𝐫ó 𝐧𝐢𝐧𝐠ú𝐧 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐩𝐚𝐫𝐚 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐞𝐧 𝐥𝐚 𝐜𝐚𝐫𝐩𝐞𝐭𝐚 𝐉𝐨𝐭𝐜𝐡𝐮𝐚𝐒𝐞𝐬𝐬𝐢𝐨𝐧_.*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*_𝐒𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫𝐨𝐧_ ${filesDeleted} 𝐚𝐫𝐜𝐡𝐢𝐯𝐨𝐬 𝐝𝐞 𝐬𝐞𝐬𝐢ó𝐧, 𝐞𝐱𝐜𝐞𝐩𝐭𝐨 𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐜𝐫𝐞𝐝𝐬.𝐣𝐬𝐨𝐧._*`}, {quoted: m});
    }
  } catch (err) {
    console.error('Error al leer la carpeta o los archivos de sesión:', err);
    await conn.sendMessage(m.chat, {text: '*_𝐎𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐚𝐥 𝐛𝐨𝐫𝐫𝐚𝐫 𝐥𝐨𝐬 𝐚𝐫𝐜𝐡𝐢𝐯𝐨𝐬 𝐝𝐞 𝐬𝐞𝐬𝐢𝐨𝐧_.*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `*_𝐇𝐨𝐥𝐚, 𝐘𝐚 𝐩𝐮𝐞𝐝𝐞𝐬 𝐯𝐞𝐫𝐦𝐞?_*\n\n*_𝐒𝐢 𝐞𝐥 𝐁𝐨𝐭 𝐧𝐨 𝐥𝐞 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐬𝐮𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐡𝐚𝐠𝐚 𝐮𝐧 𝐩𝐞𝐪𝐮𝐞ñ𝐨 𝐬𝐩𝐚𝐦_*\n\n* Ejemplo:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, {quoted: m});
};
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|dsowner|clearallsession)$/i;
handler.rowner = true
export default handler;
