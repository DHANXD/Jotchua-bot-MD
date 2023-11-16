import fetch from 'node-fetch';
import cheerio from 'cheerio';
const handler = async (m, {conn, args, command, usedPrefix}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*𝐋𝐎𝐒 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 +𝟏𝟖 𝐄𝐒𝐓𝐀𝐍 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎𝐒 𝐄𝐍 𝐄𝐒𝐓𝐄 𝐆𝐑𝐔𝐏𝐎, 𝐒𝐈 𝐄𝐒 𝐀𝐃𝐌𝐈𝐍 𝐘 𝐃𝐄𝐒𝐄𝐀 𝐔𝐒𝐀𝐑𝐋𝐎𝐒 𝐔𝐒𝐄 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 #enable modohorny*';
  if (!args[0]) throw `*𝐈𝐍𝐆𝐑𝐄𝐒𝐀 𝐔𝐍 𝐄𝐍𝐋𝐀𝐂𝐄 𝐕𝐀𝐋𝐈𝐃𝐎 𝐃𝐄 𝐗𝐍𝐗𝐗, 𝐄𝐉𝐄𝐌𝐏𝐋𝐎: ${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*`;
  try {
    await conn.reply(m.chat, '𝐄𝐋 𝐕𝐈𝐃𝐄𝐎 𝐄𝐒𝐓𝐀 𝐒𝐈𝐄𝐍𝐃𝐎 𝐏𝐑𝐎𝐂𝐄𝐒𝐀𝐃𝐎, 𝐄𝐒𝐏𝐄𝐑𝐄 𝐔𝐍 𝐌𝐎𝐌𝐄𝐍𝐓𝐎 𝐄𝐍 𝐋𝐎 𝐐𝐔𝐄 𝐄𝐒 𝐄𝐍𝐕𝐈𝐀𝐃𝐎..\n\n﹣ 𝐄𝐋 𝐓𝐈𝐄𝐌𝐏𝐎 𝐃𝐄 𝐄𝐍𝐕𝐈𝐎 𝐃𝐄𝐏𝐄𝐍𝐃𝐄 𝐃𝐄𝐋 𝐏𝐄𝐒𝐎 𝐘 𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍 𝐃𝐄𝐋 𝐕𝐈𝐃𝐄𝐎', m);
    let xnxxLink = '';
    if (args[0].includes('xnxx')) {
      xnxxLink = args[0];
    } else {
      const index = parseInt(args[0]) - 1;
      if (index >= 0) {
        if (Array.isArray(global.videoListXXX) && global.videoListXXX.length > 0) {
          const matchingItem = global.videoListXXX.find((item) => item.from === m.sender);
          if (matchingItem) {
            if (index < matchingItem.urls.length) {
              xnxxLink = matchingItem.urls[index];
            } else {
              throw `*𝐍𝐎 𝐒𝐄 𝐄𝐂𝐎𝐍𝐓𝐑𝐎 𝐔𝐍 𝐄𝐍𝐋𝐀𝐂𝐄 𝐏𝐀𝐑𝐀 𝐄𝐒𝐄 𝐍𝐔𝐌𝐄𝐑𝐎, 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑 𝐈𝐍𝐆𝐑𝐄𝐒𝐀 𝐔𝐍 𝐍𝐔𝐌𝐄𝐑𝐎 𝐄𝐍𝐓𝐑𝐄 𝐄𝐋 𝟏 𝐘 𝐄𝐋 ${matchingItem.urls.length}*`;
            }
          } else {
            throw `*𝐏𝐀𝐑𝐀 𝐏𝐎𝐃𝐄𝐑 𝐔𝐒𝐀𝐑 𝐄𝐒𝐓𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐃𝐄 𝐄𝐒𝐓𝐀 𝐅𝐎𝐑𝐌𝐀 (${usedPrefix + command} <numero>), 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑 𝐑𝐄𝐀𝐋𝐈𝐙𝐀 𝐋𝐀 𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀 𝐃𝐄 𝐕𝐈𝐃𝐄𝐎𝐒 𝐂𝐎𝐍 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 ${usedPrefix}xnxxsearch <texto>*`;
          }
        } else {
          throw `*𝐏𝐀𝐑𝐀 𝐏𝐎𝐃𝐄𝐑 𝐔𝐒𝐀𝐑 𝐄𝐒𝐓𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐃𝐄 𝐄𝐒𝐓𝐀 𝐅𝐎𝐑𝐌𝐀 (${usedPrefix + command} <numero>), 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑 𝐑𝐄𝐀𝐋𝐈𝐙𝐀 𝐋𝐀 𝐁𝐔𝐒𝐐𝐔𝐄𝐃𝐀 𝐃𝐄 𝐕𝐈𝐃𝐄𝐎𝐒 𝐂𝐎𝐍 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 ${usedPrefix}xnxxsearch <texto>*`;
        }
      }
    }
    const res = await xnxxdl(xnxxLink);
    const json = await res.result.files;
    conn.sendMessage(m.chat, {document: {url: json.high}, mimetype: 'video/mp4', fileName: res.result.title}, {quoted: m});
  } catch {
    throw '*𝐄𝐑𝐑𝐎𝐑, 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑 𝐕𝐔𝐄𝐋𝐕𝐀  𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎*\n\n*- 𝐂𝐎𝐑𝐑𝐎𝐁𝐎𝐑𝐄 𝐐𝐔𝐄 𝐄𝐋 𝐄𝐍𝐋𝐀𝐂𝐄 𝐒𝐄𝐀 𝐒𝐈𝐌𝐈𝐋𝐀𝐑 𝐀:*\n* https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*';
  }
};
handler.command = /^(xnxxdl)$/i;
export default handler;

async function xnxxdl(URL) {
  return new Promise((resolve, reject) => {
    fetch(`${URL}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = $('meta[property="og:title"]').attr('content');
      const duration = $('meta[property="og:duration"]').attr('content');
      const image = $('meta[property="og:image"]').attr('content');
      const videoType = $('meta[property="og:video:type"]').attr('content');
      const videoWidth = $('meta[property="og:video:width"]').attr('content');
      const videoHeight = $('meta[property="og:video:height"]').attr('content');
      const info = $('span.metadata').text();
      const videoScript = $('#video-player-bg > script:nth-child(6)').html();
      const files = {
        low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
        high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
        HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
        thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
        thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
        thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
        thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1]};
      resolve({status: 200, result: {title, URL, duration, image, videoType, videoWidth, videoHeight, info, files}});
    }).catch((err) => reject({code: 503, status: false, result: err}));
  });
}
