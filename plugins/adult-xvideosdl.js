import fetch from 'node-fetch';
import axios from 'axios';
import cheerio from 'cheerio';
const handler = async (m, {conn, args, command, usedPrefix, text}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*𝐋𝐎𝐒 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 +𝟏𝟖 𝐄𝐒𝐓𝐀𝐍 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐃𝐎𝐒 𝐄𝐍 𝐄𝐒𝐓𝐄 𝐆𝐑𝐔𝐏𝐎, 𝐒𝐈 𝐄𝐒 𝐀𝐃𝐌𝐈𝐍 𝐃𝐄𝐒𝐄𝐀  𝐀𝐂𝐓𝐈𝐕𝐀𝐑𝐋𝐎𝐒  𝐔𝐒𝐄 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 #enable modohorny*';
  if (!args[0]) throw `*𝐈𝐍𝐆𝐑𝐄𝐒𝐀 𝐔𝐍 𝐄𝐍𝐋𝐀𝐂𝐄 𝐕𝐀𝐋𝐈𝐃𝐎 𝐃𝐄 𝐗𝐕𝐈𝐃𝐄𝐎𝐒, 𝐄𝐉𝐄𝐌𝐏𝐋𝐎: ${usedPrefix + command} https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*`;
  try {
    conn.reply(m.chat, '𝐄𝐋 𝐕𝐈𝐃𝐄𝐎 𝐄𝐒𝐓𝐀 𝐒𝐈𝐄𝐍𝐃𝐎 𝐏𝐑𝐎𝐂𝐄𝐒𝐀𝐃𝐎, 𝐄𝐒𝐏𝐄𝐑𝐄 𝐔𝐍 𝐌𝐎𝐌𝐄𝐍𝐓𝐎 𝐄𝐍 𝐋𝐎 𝐐𝐔𝐄 𝐄𝐒 𝐄𝐍𝐕𝐈𝐀𝐃𝐎..\n\n﹣ 𝐄𝐋 𝐓𝐈𝐄𝐌𝐏𝐎 𝐃𝐄 𝐄𝐍𝐕𝐈𝐎 𝐃𝐄𝐏𝐄𝐍𝐃𝐄 𝐃𝐄𝐋 𝐏𝐄𝐒𝐎 𝐘 𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍 𝐃𝐄𝐋 𝐕𝐈𝐃𝐄𝐎', m);
    const res = await xvideosdl(args[0]);
    conn.sendMessage(m.chat, {document: {url: res.result.url}, mimetype: 'video/mp4', fileName: res.result.title}, {quoted: m});
  } catch (e) {
   throw '*𝐄𝐑𝐑𝐎𝐑, 𝐏𝐎𝐑𝐅𝐀𝐕𝐎𝐑 𝐕𝐔𝐄𝐋𝐕𝐀 𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎*\n\n*- 𝐂𝐎𝐑𝐑𝐎𝐁𝐎𝐑𝐄 𝐐𝐔𝐄 𝐄𝐋 𝐄𝐍𝐋𝐀𝐂𝐄 𝐒𝐄𝐀 𝐒𝐈𝐌𝐈𝐋𝐀𝐑 𝐀:*\n* https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*';
  }
};
handler.command = /^(xvideosdl)$/i;
export default handler;

async function xvideosdl(url) {
    return new Promise((resolve, reject) => {
		fetch(`${url}`, {method: 'get'})
		.then(res => res.text())
		.then(res => {
			let $ = cheerio.load(res, {xmlMode: false});
     const title = $("meta[property='og:title']").attr("content")
     const keyword = $("meta[name='keywords']").attr("content")
     const views = $("div#video-tabs > div > div > div > div > strong.mobile-hide").text()+" views"
     const vote = $("div.rate-infos > span.rating-total-txt").text()
     const likes = $("span.rating-good-nbr").text()
     const deslikes = $("span.rating-bad-nbr").text()
     const thumb = $("meta[property='og:image']").attr("content")
     const url = $("#html5video > #html5video_base > div > a").attr("href")
    resolve({status: 200, result: {title, url, keyword, views, vote, likes, deslikes, thumb}})
   })
 })
};

async function xvideosSearch(url) {
    return new Promise(async (resolve) => {
     await axios.request(`https://www.xvideos.com/?k=${url}&p=${Math.floor(Math.random() * 9) +1}`, {method: "get"}).then(async result => {
    let $ = cheerio.load(result.data, {xmlMod3: false});
    let title = [];
    let duration = [];
    let quality = [];
    let url = [];
    let thumb = [];
    let hasil = [];
  
    $("div.mozaique > div > div.thumb-under > p.title").each(function(a,b){
      title.push($(this).find("a").attr("title"));
      duration.push($(this).find("span.duration").text());
      url.push("https://www.xvideos.com"+$(this).find("a").attr("href"));
    });
    $("div.mozaique > div > div.thumb-under").each(function(a,b){
      quality.push($(this).find("span.video-hd-mark").text());
    });
    $("div.mozaique > div > div > div.thumb > a").each(function(a,b){
      thumb.push($(this).find("img").attr("data-src"));
    });
    for(let i=0; i < title.length; i++){
      hasil.push({
        title: title[i],
        duration: duration[i],
        quality: quality[i],
        thumb: thumb[i],
        url: url[i]
      });
    }
    resolve(hasil);
  });
  });
  };
