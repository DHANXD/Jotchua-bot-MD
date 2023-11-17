import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
async function wikipedia(querry) {
  try {
    const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`);
    const $ = cheerio.load(link.data);
    const judul = $('#firstHeading').text().trim();
    const thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`;
    const isi = [];
    $('#mw-content-text > div.mw-parser-output').each(function(rayy, Ra) {
      const penjelasan = $(Ra).find('p').text().trim();
      isi.push(penjelasan);
    });
    for (const i of isi) {
      const data = {
        status: link.status,
        result: {
          judul: judul,
          thumb: 'https:' + thumb,
          isi: i}};
      return data;
    }
  } catch (err) {
    const notFond = {
      status: link.status,
      Pesan: eror};
    return notFond;
  }
}
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*𝐄𝐒𝐓𝐀𝐒 𝐔𝐒𝐀𝐍𝐃𝐎 𝐌𝐀𝐋 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎!!*\n*𝐔𝐒𝐎 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐎:*\n*${usedPrefix + command} 𝙿𝚊𝚕𝚊𝚋𝚛𝚊 𝚌𝚕𝚊𝚟𝚎 𝚊 𝚋𝚞𝚜𝚌𝚊𝚛*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Estrellas*`;
  wikipedia(`${text}`).then((res) => {
    m.reply(`*𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝙻𝙰 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝙳𝙰:*\n\n` + res.result.isi);
  }).catch(() => {
    m.reply('*𝐍𝐎 𝐒𝐄 𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐎 𝐍𝐈𝐍𝐆𝐔𝐍𝐀 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍, 𝙿𝐏𝐑𝐔𝐄𝐁𝐀 𝐐𝐔𝐄 𝐇𝐀𝐘𝐀𝐒 𝐄𝐒𝐂𝐑𝐈𝐓𝐎 𝐔𝐍𝐀 𝐒𝐎𝐋𝐀 𝐏𝐀𝐋𝐀𝐁𝐑𝐀 𝐘 𝐋𝐎 𝐇𝐀𝐘𝐀𝐒 𝐄𝐒𝐂𝐑𝐈𝐓𝐎 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐀𝐌𝐄𝐍𝐓𝐄*');
  });
};
handler.help = ['wikipedia'].map((v) => v + ' <apa>');
handler.tags = ['internet'];
handler.command = /^(wiki|wikipedia)$/i;
export default handler;
