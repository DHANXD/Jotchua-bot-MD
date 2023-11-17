import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*𝐈𝐍𝐆𝐑𝐄𝐒𝐀 𝐔𝐍 𝐓𝐄𝐗𝐓𝐎 𝐏𝐀𝐑𝐀 𝐁𝐔𝐒𝐂𝐀𝐑, 𝐄𝐉𝐄𝐌𝐏𝐋𝐎: ${usedPrefix + command} Jotchua-bot-MD*`;
  const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
    q: text,
  }));
  const json = await res.json();
  if (res.status !== 200) throw json;
  //const imagen = await conn.getFile(json.items[0].owner.avatar_url).data
  const str = json.items.map((repo, index) => {
  return `
*${1 + index}. ${repo.full_name}${repo.fork ? ' (fork)' : ''}*
 *Url:* ${repo.html_url}
 *Creado el:* ${formatDate(repo.created_at)}
 *Actualizado el:* ${formatDate(repo.updated_at)}
 *Clone:* $ git clone ${repo.clone_url}
 ${repo.watchers} |  ${repo.forks} | ${repo.stargazers_count}  |
${repo.description ? ` *Descripción:*\n${repo.description}` : ''}
`.trim()}).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
  conn.sendMessage(m.chat, {text: str.trim()}, {quoted: m})
//conn.sendMessage(m.chat, {text: str.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen, "mediaUrl": `https://chat.whatsapp.com/D98qLrpbfNa3B8meS3NoWw`, "sourceUrl": `https://chat.whatsapp.com/D98qLrpbfNa3B8meS3NoWw`}}}, {quoted: m});  
};
handler.help = ['githubs'];
handler.tags = ['buscadores'];
handler.command = /^(ghs|githubs|githubs|githubsearch|gits|gitsearch)$/i;
export default handler;

function formatDate(n, locale = 'es') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
}
