import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `*𝐈𝐧𝐠𝐫𝐞𝐬𝐚 𝐄𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐥𝐚 𝐀𝐏𝐊 𝐪𝐮𝐞 𝐪𝐮𝐢𝐞𝐫𝐞 𝐛𝐮𝐬𝐜𝐚𝐫.*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐝𝐨𝐫 𝐝𝐞 𝐚𝐩𝐭𝐨𝐢𝐝𝐞\n\n *𝐍𝐨𝐦𝐛𝐫𝐞:* ${data5.name}\n *𝐏𝐚𝐜𝐤𝐚𝐠𝐞:* ${data5.package}\n *𝐔𝐥𝐭𝐢𝐦𝐚 𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐜𝐢𝐨𝐧:* ${data5.lastup}\n *𝐓𝐚𝐦𝐚ñ𝐨:* ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*𝐄𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨 𝐞𝐬 𝐦𝐮𝐲 𝐩𝐞𝐬𝐚𝐝𝐨 𝐩𝐨𝐫 𝐥𝐨 𝐪𝐮𝐞 𝐧𝐨 𝐬𝐞 𝐞𝐧𝐯𝐢𝐚𝐫𝐚.*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*𝐄𝐫𝐫𝐨𝐫, 𝐧𝐨 𝐬𝐞 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐨𝐧 𝐫𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨𝐬 𝐩𝐚𝐫𝐚 𝐬𝐮 𝐛𝐮𝐬𝐪𝐮𝐞𝐝𝐚.*`;
  }    
};
handler.command = /^(apkmod|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;
