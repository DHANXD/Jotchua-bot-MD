import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
  const info = `
╭⚊ *_𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓_*
┃𝙲𝚁𝙴𝙰𝙳𝙾𝚁: *_𝙰𝙻𝚂_*
┃𝙽𝚄𝙼𝙴𝚁𝙾: *+5491156673266*
┃𝙿𝚁𝙴𝙵𝙸𝙹𝙾: *${usedPrefix}*
┃𝙲𝙷𝙰𝚃𝚂 𝙿𝚁𝙸𝚅𝙰𝙳𝙾𝚂: *${chats.length - groups.length}*
┃𝙲𝙷𝙰𝚃𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂: *${groups.length}* 
┃𝙲𝙷𝙰𝚃𝚂 𝚃𝙾𝚃𝙰𝙻𝙴𝚂: *${chats.length}* 
┃𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳: *${uptime}*
┃𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: *${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜*
┃𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳: ${autoread ? "*_𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*" : "*_𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*"}
┃𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃: ${restrict ? "*_𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*" : "*_𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*"} 
┃𝙿𝙲𝙾𝙽𝙻𝚈: ${pconly ? "*_𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*" : "*_𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*"}
┃𝙶𝙲𝙾𝙽𝙻𝚈: ${gconly ? "*_𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*" : "*_𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*"}
┃𝙼𝙾𝙳𝙾: ${self ? "*_𝐏𝐫𝐢𝐯𝐚𝐝𝐨_*" : "*_𝐏𝐮𝐛𝐥𝐢𝐜𝐨_*"}
┃𝙰𝙽𝚃𝙸𝙿𝚁𝙸𝚅𝙰𝙳𝙾: ${antiprivado ? "*_𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*" : "*_𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*"}
┃𝙼𝙾𝙳𝙴𝙹𝙰𝙳𝙸𝙱𝙾𝚃: ${modejadibot ? "*_𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*" : "*_𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*"}
┃𝙰𝙽𝚃𝙸𝙻𝙻𝙰𝙼𝙰𝙳𝙰: ${antiCall ? "*_𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*" : "*_𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*"}
┃𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳: *${speed} ms* 
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ -- *_𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐛𝐨𝐭_* --
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://github.com/AleXD0009/Jotchua-bot-MD` },
    mimetype: `application/${document}`,
    fileName: `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://github.com/AleXD0009/Jotchua-bot-MD",
        mediaType: 2,
        previewType: "pdf",
        title: "un bot de whatsapp",
        body: wm,
        thumbnail: imagen1,
        sourceUrl: "https://chat.whatsapp.com/FWiLt4qnWgvHnlW7OnWDJl",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = /^(ping|speed|infobot)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
