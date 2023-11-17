import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`*𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐄𝐋 𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄 𝐀𝐋𝐆𝐔𝐍 𝐀𝐍𝐈𝐌𝐄 𝐀 𝐁𝐔𝐒𝐂𝐀𝐑*`);
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
    const AnimeInfo = `
 • *Título:* ${result.title}
 • *Formato:* ${result.type}
 • *Estado:* ${result.status.toUpperCase().replace(/\_/g, ' ')}
 • *Episodios totales:* ${result.episodes}
 • *Duración: ${result.duration}*
 • *Basado en:* ${result.source.toUpperCase()}
 • *Estrenado:* ${result.aired.from}
 • *Finalizado:* ${result.aired.to}
 • *Popularidad:* ${result.popularity}
 • *Favoritos:* ${result.favorites}
 • *Clasificación:* ${result.rating}
 • *Rango:* ${result.rank}
 • *Trailer:* ${result.trailer.url}
 • *URL:* ${result.url}
 • *Background:* ${resultes.text}
❄ • *Ringkasan:* ${resultes2.text}`;
    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `*𝐄𝐑𝐑𝐎𝐑, 𝐈𝐍𝐓𝐄𝐍𝐓𝐄𝐋𝐎 𝐃𝐄𝐍𝐔𝐕𝐎*`;
  }
};
handler.command = /^(anime|animeinfo)$/i;
export default handler;
