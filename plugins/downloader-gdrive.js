import fetch from 'node-fetch';
import {sizeFormatter} from 'human-readable';
const formatSize = sizeFormatter({
  std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`});
const handler = async (m, {conn, args}) => {
  if (!args[0]) throw '*𝐄𝐑𝐑𝐎𝐑, 𝐕𝐔𝐄𝐋𝐕𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎*\n\n*- 𝐂𝐎𝐑𝐑𝐎𝐁𝐎𝐑𝐄 𝐐𝐔𝐄 𝐄𝐋 𝐄𝐍𝐋𝐀𝐂𝐄 𝐒𝐄𝐀 𝐒𝐈𝐌𝐈𝐋𝐀𝐑 𝐀:*\n* https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view*';
  try {
    GDriveDl(args[0]).then(async (res) => {
      conn.reply(m.chat, '𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 𝐒𝐔 𝐀𝐑𝐂𝐇𝐈𝐕𝐎 𝐄𝐒𝐏𝐄𝐑𝐄...\n\n𝐄𝐋 𝐓𝐈𝐄𝐌𝐏𝐎 𝐃𝐄 𝐄𝐒𝐏𝐄𝐑𝐀 𝐏𝐔𝐄𝐃𝐄 𝐕𝐀𝐑𝐈𝐀𝐑 𝐃𝐄𝐏𝐄𝐍𝐃𝐈𝐄𝐍𝐃𝐎 𝐃𝐄𝐋 𝐏𝐄𝐒𝐎 𝐃𝐄𝐋 𝐀𝐑𝐂𝐇𝐈𝐕𝐎, 𝐒𝐈 𝐒𝐔𝐏𝐄𝐑𝐀 𝐄𝐋 𝐏𝐄𝐒𝐎 𝐃𝐄 𝟏𝟎𝟎𝐌𝐁 𝐏𝐔𝐄𝐃𝐄 𝐐𝐔𝐄 𝐒𝐔 𝐀𝐑𝐂𝐇𝐈𝐕𝐎 𝐍𝐎 𝐒𝐄𝐀 𝐄𝐍𝐕𝐈𝐀𝐃𝐎', m);
      if (!res) throw res;
      conn.sendFile(m.chat, res.downloadUrl, res.fileName, '', m, null, {mimetype: res.mimetype, asDocument: true});
    });
  } catch (e) {
    m.reply('*𝐄𝐑𝐑𝐎𝐑, 𝐕𝐔𝐄𝐋𝐕𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑𝐋𝐎*\n\n*- 𝐂𝐎𝐑𝐑𝐎𝐁𝐎𝐑𝐄 𝐐𝐔𝐄 𝐄𝐋 𝐄𝐍𝐋𝐀𝐂𝐄 𝐒𝐄𝐀 𝐒𝐈𝐌𝐈𝐋𝐀𝐑 𝐀:*\n* https://drive.google.com/file/d/1dmHlx1WTbH5yZoNa_ln325q5dxLn1QHU/view*');
    console.log(e);
  }
};
handler.command = /^(gdrive)$/i;
export default handler;
async function GDriveDl(url) {
  let id;
  if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL';
  id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1];
  if (!id) throw 'ID Not Found';
  const res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
    method: 'post',
    headers: {
      'accept-encoding': 'gzip, deflate, br',
      'content-length': 0,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'origin': 'https://drive.google.com',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
      'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
      'x-drive-first-party': 'DriveWebUi',
      'x-json-requested': 'true'}});
  const {fileName, sizeBytes, downloadUrl} = JSON.parse((await res.text()).slice(4));
  if (!downloadUrl) throw 'Link Download Limit!';
  const data = await fetch(downloadUrl);
  if (data.status !== 200) throw data.statusText;
  return {downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type')};
}
