const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text =
`╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ _𝐄𝐋 𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄 𝐌𝐈 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐄𝐒_ wa.me/5491156673266*
⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃_𝐄𝐋 𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄𝐋 𝐂𝐎𝐋𝐀𝐁𝐎𝐑𝐀𝐃𝐎𝐑 𝐄𝐒_ wa.me/+18199751245
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊*`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/AleXD0009/Jotchua-bot-MD`},
    'mimetype': `application/${document}`,
    'fileName': `「  _𝐇𝐨𝐥𝐚_ 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/AleXD0009/Jotchua-bot-MD',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '_𝐮𝐧 𝐛𝐨𝐭 𝐝𝐞 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩_⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://chat.whatsapp.com/CTklazmF0byCPlV9KSlhF1'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creador|propietario)$/i;
export default handler;
