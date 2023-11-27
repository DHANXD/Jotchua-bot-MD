import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    throw '*Proporciona un texto.*\n\n* Ejemplo:* _${usedPrefix + command} Hola Jotchua, ¿cómo estás?';
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const API_URL = `https://vihangayt.me/tools/bard?q=${encodeURIComponent(text)}`;
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.status && data.data) {
      const respuestaAPI = data.data;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw 'No se pudo obtener una respuesta válida';
    }
  } catch (error) {
    throw `Ocurrió un error`;
  }
};

handler.command = /^((sim)?simi|bot|alexa|cortana)$/i;

export default handler;
