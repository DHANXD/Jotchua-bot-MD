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
┃*⛄ 𝐂𝐑𝐄𝐀𝐃𝐎𝐑*: *_𝙰𝙻𝚂_*
┃*⛄ 𝐍𝐔𝐌𝐄𝐑𝐎*: *+5491156673266*
┃*⛄ 𝐏𝐑𝐄𝐅𝐈𝐉𝐎*: *${usedPrefix}*
┃*⛄ 𝐂𝐇𝐀𝐓𝐒 𝐏𝐑𝐈𝐕𝐀𝐃𝐎𝐒*: *${chats.length - groups.length}*
┃*⛄ 𝐂𝐇𝐀𝐓𝐒 𝐃𝐄 𝐆𝐑𝐔𝐏𝐎𝐒*: *${groups.length}* 
┃*⛄ 𝐂𝐇𝐀𝐓𝐒 𝐓𝐎𝐓𝐀𝐋𝐄𝐒*: *${chats.length}* 
┃*⛄ 𝐀𝐂𝐓𝐈𝐕𝐈𝐃𝐀𝐃*: *${uptime}*
┃*⛄ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒*: *${totalreg} _𝐍𝐔𝐌𝐄𝐑𝐎𝐒_*
┃*⛄ 𝐀𝐔𝐓𝐎𝐑𝐄𝐀𝐃*: ${autoread ? "*_𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*" : "*_𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*"}
┃*⛄ 𝐑𝐄𝐒𝐓𝐑𝐈𝐂𝐓*: ${restrict ? "*_𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*" : "*_𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*"} 
┃*⛄ 𝐏𝐂𝐎𝐍𝐋𝐘*: ${pconly ? "*_𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*" : "*_𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*"}
┃*⛄ 𝐆𝐂𝐎𝐍𝐋𝐘*: ${gconly ? "*_𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*" : "*_𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*"}
┃*⛄ 𝐌𝐎𝐃𝐎*: ${self ? "*_𝐏𝐫𝐢𝐯𝐚𝐝𝐨_*" : "*_𝐏𝐮𝐛𝐥𝐢𝐜𝐨_*"}
┃*⛄ 𝐀𝐍𝐓𝐈𝐏𝐑𝐈𝐕𝐀𝐃𝐎*: ${antiprivado ? "*_𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*" : "*_𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*"}
┃*⛄ 𝐌𝐎𝐃𝐄𝐉𝐀𝐃𝐈𝐁𝐎𝐓*: ${modejadibot ? "*_𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*" : "*_𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*"}
┃*⛄ 𝐀𝐍𝐓𝐈𝐋𝐋𝐀𝐌𝐀𝐃𝐀*: ${antiCall ? "*_𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*" : "*_𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨_*"}
┃*⛄ 𝐕𝐄𝐋𝐎𝐂𝐈𝐃𝐀𝐃*: *${speed} ms* 
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
