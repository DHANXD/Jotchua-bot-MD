import fg from 'api-dylux';
import fetch from 'node-fetch';
import {savefrom, facebookdl, facebookdlv2} from '@bochilteam/scraper';
import fbDownloader from 'fb-downloader-scrapper';
import {facebook} from '@xct007/frieren-scraper';
import axios from 'axios';
const handler = async (m, {conn, args, command, usedPrefix}) => {
  if (!args[0]) throw `*𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐔𝐍 𝐄𝐍𝐋𝐀𝐂𝐄 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊, 𝐄𝐉𝐄𝐌𝐏𝐋𝐎: ${usedPrefix + command}* https://fb.watch/fOTpgn6UFQ/`;
  if (!args[0].match(/www.facebook.com|fb.watch/g)) throw `*𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐔𝐍 𝐄𝐍𝐋𝐀𝐂𝐄 𝐃𝐄 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊, 𝐄𝐉𝐄𝐌𝐏𝐋𝐎: ${usedPrefix + command}* https://fb.watch/fOTpgn6UFQ/`;
  try {
    await m.reply(`*𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 𝐒𝐔 𝐕𝐈𝐃𝐄𝐎, 𝐀𝐆𝐔𝐀𝐑𝐃𝐄 𝐔𝐍 𝐌𝐎𝐌𝐄𝐍𝐓𝐎 𝐄𝐒𝐓𝐎 𝐏𝐔𝐄𝐃𝐄 𝐓𝐀𝐑𝐃𝐄 𝐄𝐍𝐓𝐑𝐄 𝟐 𝐀 𝟏𝟎 𝐌𝐈𝐍𝐔𝐓𝐎𝐒 𝐃𝐄𝐏𝐄𝐍𝐃𝐈𝐄𝐍𝐃𝐎 𝐋𝐀 𝐃𝐔𝐑𝐀𝐂𝐈𝐎𝐍 𝐃𝐄𝐋 𝐕𝐈𝐃𝐄𝐎...*`);
    const d2ata = await facebook.v1(args[0]);
    let r2es = '';
    if (d2ata.urls && d2ata.urls.length > 0) {
      r2es = `${d2ata.urls[0]?.hd || d2ata.urls[1]?.sd || ''}`;
    }
    conn.sendFile(m.chat, r2es, 'error.mp4', `*𝐀𝐐𝐔𝐈 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐕𝐈𝐃𝐄𝐎*`, m);
  } catch (err1) {
    try {
      const req = await igeh(args[0]);
      conn.sendMessage(m.chat, {video: {url: req.url_list}}, m);
    } catch (err1_2) {
      try {
        const Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`);
        const Jjson = await Rres.json();
        let VIDEO = Jjson.result[0];
        if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1];
        conn.sendFile(m.chat, VIDEO, 'error.mp4', `*𝐀𝐐𝐔𝐈 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐕𝐈𝐃𝐄𝐎*`, m);
      } catch (err2) {
        try {
          const ress = await fg.fbdl(args[0]);
          const urll = await ress.data[0].url;
          await conn.sendFile(m.chat, urll, 'error.mp4', '*𝐀𝐐𝐔𝐈 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐕𝐈𝐃𝐄𝐎*', m);
        } catch (err3) {
          try {
            const res = await fbDownloader(args[0]);
            for (const result of res.download) {
              const ur = result.url;
              await conn.sendFile(m.chat, ur, 'error.mp4', '*𝐀𝐐𝐔𝐈 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐕𝐈𝐃𝐄𝐎*', m);
            }
          } catch (err4) {
            try {
              const res3 = await fetch(`https://latam-api.vercel.app/api/facebookdl?apikey=nekosmic&q=${args[0]}`);
              const json = await res3.json();
              const url3 = await json.video;
              await conn.sendFile(m.chat, url3, 'error.mp4', '*𝐀𝐐𝐔𝐈 𝐄𝐒𝐓𝐀 𝐓𝐔 𝐕𝐈𝐃𝐄𝐎*', m);
            } catch (err5) {
              try {
                const {result} = await facebookdl(args[0]).catch(async (_) => await facebookdlv2(args[0])).catch(async (_) => await savefrom(args[0]));
                for (const {url, isVideo} of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, '*𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝚂𝚄 𝚅𝙸𝙳𝙴𝙾*', m);
              } catch (err6) {
                throw `*𝐄𝐑𝐑𝐎𝐑, 𝐕𝐔𝐄𝐋𝐕𝐀 𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎*`;
              }
            }
          }
        }
      }
    }
  }
};
handler.command = /^(facebook|fb|facebookdl|fbdl|facebook2|fb2|facebookdl2|fbdl2|facebook3|fb3|facebookdl3|fbdl3|facebook4|fb4|facebookdl4|fbdl4|facebook5|fb5|facebookdl5|fbdl5)$/i;
export default handler;

async function igeh(url_media) {
  return new Promise(async (resolve, reject)=>{
    const BASE_URL = 'https://instasupersave.com/';
    try {
      const resp = await axios(BASE_URL);
      const cookie = resp.headers['set-cookie']; // get cookie from request
      const session = cookie[0].split(';')[0].replace('XSRF-TOKEN=', '').replace('%3D', '');
      const config = {method: 'post', url: `${BASE_URL}api/convert`, headers: {'origin': 'https://instasupersave.com', 'referer': 'https://instasupersave.com/pt/', 'sec-fetch-dest': 'empty', 'sec-fetch-mode': 'cors', 'sec-fetch-site': 'same-origin', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52', 'x-xsrf-token': session, 'Content-Type': 'application/json', 'Cookie': `XSRF-TOKEN=${session}; instasupersave_session=${session}`}, data: {url: url_media}};
      axios(config).then(function(response) {
        const ig = [];
        if (Array.isArray(response.data)) {
          response.data.forEach((post) => {
            ig.push(post.sd === undefined ? post.thumb : post.sd.url);
          });
        } else {
          ig.push(response.data.url[0].url);
        }
        resolve({results_number: ig.length, url_list: ig});
      }).catch(function(error) {
        reject(error.message);
      });
    } catch (e) {
      reject(e.message);
    }
  });
}
