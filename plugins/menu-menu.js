import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen5;
    // let vn = './Menu2.jpg'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = 
`╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃     *𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐛𝐨𝐭-𝐌𝐃* 
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃➜ *𝗛ola, ${taguser}*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃➜ 𝐎𝐰𝐧𝐞𝐫: 𝐀𝐋𝐒
┃➜ 𝐧𝐮𝐦𝐞𝐫𝐨: wa.me/5491156673266
┃➜ ʙᴏᴛ ᴏꜰᴄ: wa.me/?
┃➜ ꜰᴇᴄʜᴀ: ${date}
┃➜ ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ: ${uptime}
┃➜ 𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬 𝐫𝐞𝐠𝐬: ${rtotalreg}
┃➜ 𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬 𝐭𝐨𝐭𝐚𝐥𝐞𝐬: ${rtotal}
┃ © 𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐛𝐨𝐭-𝐌𝐃 | 𝐁𝐲 𝐀𝐋𝐒
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ * 𝙽𝚒𝚟𝚎𝚕:* ${level}
┃ * 𝙴𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊:* ${exp}
┃ * 𝚁𝚊𝚗𝚐𝚘:* ${role}
┃ * 𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜:* ${limit}
┃ * 𝙹𝚘𝚝𝚌𝚑𝚞𝚊𝙲𝚘𝚒𝚗𝚜:* ${money}
┃ * 𝚃𝚘𝚔𝚎𝚗𝚜:* ${joincount}
┃ * 𝙿𝚛𝚎𝚖𝚒𝚞𝚖:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
${readMore}
╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐁𝐎𝐓 𝐎𝐅𝐂 𝐎 𝐒𝐔𝐁 𝐁𝐎𝐓 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐒𝐎𝐋𝐔𝐂𝐈𝐎𝐍 𝐀 𝐄𝐑𝐑𝐎𝐑𝐄𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃➜ Mensajes en espera
┃ ☾  _${usedPrefix}fixmsgespera_
┃➜ Mensajes en espera (owner)
┃ ☾  _${usedPrefix}dsowner_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ ☾  _${usedPrefix}terminosycondiciones_
┃ ☾  _${usedPrefix}grupos_
┃ ☾  _${usedPrefix}estado_
┃ ☾  _${usedPrefix}infobot_
┃ ☾  _${usedPrefix}speedtest
┃ ☾  _${usedPrefix}owner_
┃ ☾  _${usedPrefix}script_
┃ ☾  _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐔𝐍𝐄 𝐄𝐋 𝐁𝐎𝐓 𝐀 𝐓𝐔 𝐆𝐑𝐔𝐏𝐎 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ ☽  _${usedPrefix}join *<enlace / link / url>*_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐒𝐄𝐑𝐁𝐎𝐓 - 𝐉𝐀𝐃𝐈𝐁𝐎𝐓 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ ☽  _${usedPrefix}serbot --code_
┃ ☽  _${usedPrefix}serbot_
┃ ☽  _${usedPrefix}deletebot_
┃ ☽  _${usedPrefix}token
┃ ☽  _${usedPrefix}stop_
┃ ☽  _${usedPrefix}bots_
┃
┃ ☽  _${usedPrefix}enable restrict_
┃ ☽  _${usedPrefix}disable restrict_
┃ ☽  _${usedPrefix}enable autoread_
┃ ☽  _${usedPrefix}disable autoread_
┃ ☽  _${usedPrefix}enable antispam_
┃ ☽  _${usedPrefix}disable antispam_
┃ ☽  _${usedPrefix}enable anticall_
┃ ☽  _${usedPrefix}disable anticall_
┃ ☽  _${usedPrefix}enable modoia_
┃ ☽  _${usedPrefix}disable modoia_
┃ ☽  _${usedPrefix}enable audios_bot_
┃ ☽  _${usedPrefix}disable audios_bot_
┃ ☽  _${usedPrefix}enable antiprivado_
┃ ☽  _${usedPrefix}disable antiprivado_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊ 

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐉𝐔𝐄𝐆𝐎𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ ☽  _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┃ ☽  _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
┃ ☽  _${usedPrefix}ppt *<papel / tijera /piedra>*_
┃ ☽  _${usedPrefix}prostituto *<nombre / @tag>*_
┃ ☽  _${usedPrefix}prostituta *<nombre / @tag>*_
┃ ☽  _${usedPrefix}gay2 *<nombre / @tag>*_
┃ ☽  _${usedPrefix}lesbiana *<nombre / @tag>*_
┃ ☽  _${usedPrefix}pajero *<nombre / @tag>*_
┃ ☽  _${usedPrefix}pajera *<nombre / @tag>*_
┃ ☽  _${usedPrefix}puto *<nombre / @tag>*_
┃ ☽  _${usedPrefix}puta *<nombre / @tag>*_
┃ ☽  _${usedPrefix}manco *<nombre / @tag>*_
┃ ☽  _${usedPrefix}manca *<nombre / @tag>*_
┃ ☽  _${usedPrefix}rata *<nombre / @tag>*_
┃ ☽  _${usedPrefix}love *<nombre / @tag>*_
┃ ☽  _${usedPrefix}doxear *<nombre / @tag>*_
┃ ☽  _${usedPrefix}pregunta *<texto>*_
┃ ☽  _${usedPrefix}suitpvp *<@tag>*_
┃ ☽  _${usedPrefix}slot *<apuesta>*_
┃ ☽  _${usedPrefix}ttt *<nombre sala>*_
┃ ☽  _${usedPrefix}delttt_
┃ ☽  _${usedPrefix}acertijo_
┃ ☽  _${usedPrefix}simi *<texto>*_
┃ ☽  _${usedPrefix}top *<texto>*_
┃ ☽  _${usedPrefix}topgays_
┃ ☽  _${usedPrefix}topotakus_
┃ ☽  _${usedPrefix}formarpareja_
┃ ☽  _${usedPrefix}verdad_
┃ ☽  _${usedPrefix}reto_
┃ ☽  _${usedPrefix}cancion_
┃ ☽  _${usedPrefix}pista_
┃ ☽  _${usedPrefix}wordfind_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ ☽  _${usedPrefix}enable *welcome*_
┃ ☽  _${usedPrefix}enable *modohorny*_
┃ ☽  _${usedPrefix}disable *modohorny*_
┃ ☽  _${usedPrefix}enable *antilink*_
┃ ☽  _${usedPrefix}disable *antilink*_
┃ ☽  _${usedPrefix}enable *antilink2*_
┃ ☽  _${usedPrefix}disable *antilink2*_
┃ ☽  _${usedPrefix}enable *detect*_
┃ ☽  _${usedPrefix}disable *detect*_
┃ ☽  _${usedPrefix}enable *audios*_
┃ ☽  _${usedPrefix}disable *audios*_
┃ ☽  _${usedPrefix}enable *autosticker*_
┃ ☽  _${usedPrefix}disable *autosticker*_
┃ ☽  _${usedPrefix}enable *antiviewonce*_
┃ ☽  _${usedPrefix}disable *antiviewonce*_
┃ ☽  _${usedPrefix}enable *antitoxic*_
┃ ☽  _${usedPrefix}disable *antitoxic*_
┃ ☽  _${usedPrefix}enable *antitraba*_
┃ ☽  _${usedPrefix}disable *antitraba*_
┃ ☽  _${usedPrefix}enable *antiarabes*_
┃ ☽  _${usedPrefix}disable *antiarabes*_
┃ ☽  _${usedPrefix}enable *modoadmin*_
┃ ☽  _${usedPrefix}disable *modoadmin*_
┃ ☽  _${usedPrefix}enable *antidelete*_
┃ ☽  _${usedPrefix}disable *antidelete*_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐑𝐄𝐏𝐎𝐑𝐓𝐀𝐑 𝐄𝐑𝐑𝐎𝐑𝐄𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ ☽  _${usedPrefix}reporte *<texto>*_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ☽  _${usedPrefix}instagram *<enlace / link / url>*_
┣ ☽  _${usedPrefix}mediafire *<enlace / link / url>*_
┣ ☽  _${usedPrefix}gitclone *<enlace / link / url>*_
┣ ☽  _${usedPrefix}gdrive *<enlace / link / url>*_
┣ ☽  _${usedPrefix}tiktok *<enlace / link / url>*_
┣ ☽  _${usedPrefix}tiktokimg *<enlace / link / url>*_
┣ ☽  _${usedPrefix}xnxxdl *<enlace / link / url>*_
┣ ☽  _${usedPrefix}xvideosdl *<enlace / link / url>*_
┣ ☽  _${usedPrefix}twitter *<enlace / link / url>*_
┣ ☽  _${usedPrefix}fb *<enlace / link / url>*_
┣ ☽  _${usedPrefix}ytshort *<enlace / link / url>*_
┣ ☽  _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣ ☽  _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣ ☽  _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣ ☽  _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┣ ☽  _${usedPrefix}videodoc *<enlace / link / url>*_
┣ ☽  _${usedPrefix}dapk2 *<enlace / link / url>*_
┣ ☽  _${usedPrefix}stickerpack *<enlace / link / url>*_
┣ ☽  _${usedPrefix}play *<texto>*_
┣ ☽  _${usedPrefix}play2 *<texto>*_
┣ ☽  _${usedPrefix}play.1 *<texto>*_
┣ ☽  _${usedPrefix}play.2 *<texto>*_
┣ ☽  _${usedPrefix}playdoc *<texto>*_
┣ ☽  _${usedPrefix}playdoc2 *<texto>*_
┣ ☽  _${usedPrefix}playlist *<texto>*_
┣ ☽  _${usedPrefix}spotify *<texto>*_
┣ ☽  _${usedPrefix}ringtone *<texto>*_
┣ ☽  _${usedPrefix}soundcloud *<texto>*_
┣ ☽  _${usedPrefix}imagen *<texto>*_
┣ ☽  _${usedPrefix}pinterest *<texto>*_
┣ ☽  _${usedPrefix}wallpaper *<texto>*_
┣ ☽  _${usedPrefix}pptiktok *<nombre de usuario>*_
┣ ☽  _${usedPrefix}igstalk *<nombre de usuario>*_
┣ ☽  _${usedPrefix}igstory *<nombre de usuario>*_
┣ ☽  _${usedPrefix}tiktokstalk *<username>*_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ☽  _${usedPrefix}githubsearch *<texto>*_
┣ ☽  _${usedPrefix}pelisplus *<texto>*_
┣ ☽  _${usedPrefix}modapk *<texto>*_
┣ ☽  _${usedPrefix}stickersearch *<texto>*_
┣ ☽  _${usedPrefix}stickersearch2 *<texto>*_
┣ ☽  _${usedPrefix}xnxxsearch *<texto>*_
┣ ☽  _${usedPrefix}animeinfo *<texto>*_
┣ ☽  _${usedPrefix}google *<texto>*_
┣ ☽  _${usedPrefix}letra *<texto>*_
┣ ☽  _${usedPrefix}wikipedia *<texto>*_
┣ ☽  _${usedPrefix}ytsearch *<texto>*_
┣ ☽  _${usedPrefix}playstore *<texto>*_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐆𝐑𝐔𝐏𝐎𝐒 >* 
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ☽  _${usedPrefix}add *<numero>*_
┣ ☽  _${usedPrefix}kick *<@tag>*_
┣ ☽  _${usedPrefix}kick2 *<@tag>*_
┣ ☽  _${usedPrefix}listanum *<texto>*_
┣ ☽  _${usedPrefix}kicknum *<texto>*_
┣ ☽  _${usedPrefix}grupo *<abrir / cerrar>*_
┣ ☽  _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣ ☽  _${usedPrefix}promote *<@tag>*_
┣ ☽  _${usedPrefix}demote *<@tag>*_
┣ ☽  _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ☽  _${usedPrefix}demote *<@tag>*_
┣ ☽  _${usedPrefix}infogroup_
┣ ☽  _${usedPrefix}resetlink_
┣ ☽  _${usedPrefix}link_
┣ ☽  _${usedPrefix}setname *<texto>*_
┣ ☽  _${usedPrefix}setdesc *<texto>*_
┣ ☽  _${usedPrefix}invocar *<texto>*_
┣ ☽  _${usedPrefix}setwelcome *<texto>*_
┣ ☽  _${usedPrefix}setbye *<texto>*_
┣ ☽  _${usedPrefix}hidetag *<texto>*_
┣ ☽  _${usedPrefix}hidetag *<audio>*_
┣ ☽  _${usedPrefix}hidetag *<video>*_
┣ ☽  _${usedPrefix}hidetag *<imagen>*_
┣ ☽  _${usedPrefix}warn *<@tag>*_
┣ ☽  _${usedPrefix}unwarn *<@tag>*_
┣ ☽  _${usedPrefix}listwarn_
┣ ☽  _${usedPrefix}fantasmas_
┣ ☽  _${usedPrefix}destraba_
┣ ☽  _${usedPrefix}setpp *<imagen>*_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ☽  _${usedPrefix}toanime *<imagen>*_
┣ ☽  _${usedPrefix}togifaud *<video>*_
┣ ☽  _${usedPrefix}toimg *<sticker>*_
┣ ☽  _${usedPrefix}tomp3 *<video>*_
┣ ☽  _${usedPrefix}tomp3 *<nota de voz>*_
┣ ☽  _${usedPrefix}toptt *<video / audio>*_
┣ ☽  _${usedPrefix}tovideo *<sticker>*_
┣ ☽  _${usedPrefix}tourl *<video / imagen / audio>*_
┣ ☽  _${usedPrefix}tts *<idioma> <texto>*_
┣ ☽  _${usedPrefix}tts *<efecto> <texto>*_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ☽  _${usedPrefix}logos *<efecto> <texto>*_
┣ ☽  _${usedPrefix}logochristmas *<texto>*_
┣ ☽  _${usedPrefix}logocorazon *<texto>*_
┣ ☽  _${usedPrefix}ytcomment *<texto>*_
┣ ☽  _${usedPrefix}hornycard *<@tag>*_
┣ ☽  _${usedPrefix}simpcard *<@tag>*_
┣ ☽  _${usedPrefix}lolice *<@tag>*_
┣ ☽  _${usedPrefix}itssostupid_
┣ ☽  _${usedPrefix}pixelar_
┣ ☽  _${usedPrefix}blur_
┣☽   _${usedPrefix}toanime_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ☽  _${usedPrefix}piropo_
┣ ☽  _${usedPrefix}consejo_
┣ ☽  _${usedPrefix}fraseromantica_
┣ ☽  _${usedPrefix}historiaromantica_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐑𝐀𝐍𝐃-𝐀𝐍𝐈𝐌𝐄𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ☽  _${usedPrefix}menuanimes_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐑𝐀𝐍𝐃𝐎𝐌 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ☽  _${usedPrefix}kpop *<blackpink / exo / bts>*_
┣ ☽  _${usedPrefix}cristianoronaldo_
┣ ☽  _${usedPrefix}messi_
┣ ☽  _${usedPrefix}cat_
┣ ☽  _${usedPrefix}dog_
┣ ☽  _${usedPrefix}meme_
┣ ☽  _${usedPrefix}itzy_
┣ ☽  _${usedPrefix}blackpink_
┣ ☽  _${usedPrefix}navidad_
┣ ☽  _${usedPrefix}wpmontaña_
┣ ☽  _${usedPrefix}pubg_
┣ ☽  _${usedPrefix}wpgaming_
┣ ☽  _${usedPrefix}wpaesthetic_
┣ ☽  _${usedPrefix}wpaesthetic2_
┣ ☽  _${usedPrefix}wprandom_
┣ ☽  _${usedPrefix}wallhp_
┣ ☽  _${usedPrefix}wpvehiculo_
┣ ☽  _${usedPrefix}wpmoto_
┣ ☽  _${usedPrefix}coffee_
┣ ☽  _${usedPrefix}pentol_
┣ ☽  _${usedPrefix}caricatura_
┣ ☽  _${usedPrefix}ciberespacio_
┣ ☽  _${usedPrefix}technology_
┣ ☽  _${usedPrefix}doraemon_
┣ ☽  _${usedPrefix}hacker_
┣ ☽  _${usedPrefix}planeta_
┣ ☽  _${usedPrefix}randomprofile_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 +𝟏𝟖 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ☽  _${usedPrefix}labiblia_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ ☽  _${usedPrefix}bass_
┣ ☽  _${usedPrefix}blown_
┣ ☽  _${usedPrefix}deep_
┣ ☽  _${usedPrefix}earrape_
┣ ☽  _${usedPrefix}fast_
┣ ☽  _${usedPrefix}fat_
┣ ☽  _${usedPrefix}nightcore_
┣ ☽  _${usedPrefix}reverse_
┣ ☽  _${usedPrefix}robot_
┣ ☽  _${usedPrefix}slow_
┣ ☽  _${usedPrefix}smooth_
┣ ☽  _${usedPrefix}tupai_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ☽  _${usedPrefix}start_
┣ ☽  _${usedPrefix}next_
┣ ☽  _${usedPrefix}leave_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐀𝐔𝐃𝐈𝐎𝐒 >*   
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ☽  _${usedPrefix}menuaudios_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ☽  _${usedPrefix}inspect *<link wa_gc>*_
┣ ☽  _${usedPrefix}chatgpt *<texto>*_
┣ ☽  _${usedPrefix}delchatgpt
┣ ☽  _${usedPrefix}gptvoz *<texto>*_
┣ ☽  _${usedPrefix}dall-e *<texto>*_
┣ ☽  _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┣ ☽  _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┣ ☽  _${usedPrefix}readviewonce *<imagen / video>*_
┣ ☽  _${usedPrefix}clima *<país> <ciudad>*_
┣ ☽  _${usedPrefix}encuesta *<texto1|texto2...>*_
┣ ☽  _${usedPrefix}afk *<motivo>*_
┣ ☽  _${usedPrefix}ocr *<responde a imagen>*_
┣ ☽  _${usedPrefix}hd *<responde a imagen>*_
┣ ☽  _${usedPrefix}acortar *<enlace / link / url>*_
┣ ☽  _${usedPrefix}calc *<operacion math>*_
┣ ☽  _${usedPrefix}del *<mensaje>*_
┣ ☽  _${usedPrefix}whatmusic *<audio>*_
┣ ☽  _${usedPrefix}readqr *<imagen (QR)>*_
┣ ☽  _${usedPrefix}qrcode *<texto>*_
┣ ☽  _${usedPrefix}readmore *<texto1| texto2>*_
┣ ☽  _${usedPrefix}styletext *<texto>*_
┣ ☽  _${usedPrefix}traducir *<texto>*_
┣ ☽  _${usedPrefix}nowa *<numero>*_
┣ ☽  _${usedPrefix}covid *<pais>*_
┣ ☽  _${usedPrefix}horario_
┣ ☽  _${usedPrefix}dropmail_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐑𝐏𝐆 - 𝐋𝐈𝐌𝐈𝐓𝐄𝐒 - 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ☽  _${usedPrefix}adventure_
┣ ☽  _${usedPrefix}cazar_
┣ ☽  _${usedPrefix}cofre_
┣ ☽  _${usedPrefix}balance_
┣ ☽  _${usedPrefix}claim_
┣ ☽  _${usedPrefix}heal_
┣ ☽  _${usedPrefix}lb_
┣ ☽  _${usedPrefix}levelup_
┣ ☽  _${usedPrefix}myns_
┣ ☽  _${usedPrefix}perfil_
┣ ☽  _${usedPrefix}work_
┣ ☽  _${usedPrefix}minar_
┣ ☽  _${usedPrefix}minar2_
┣ ☽  _${usedPrefix}buy_
┣ ☽  _${usedPrefix}buyall_
┣ ☽  _${usedPrefix}verificar_
┣ ☽  _${usedPrefix}robar *<cantidad> <@tag>*_
┣ ☽  _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┣ ☽  _${usedPrefix}unreg *<numero de serie>*_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ☽  _${usedPrefix}sticker *<responder a imagen o video>*_
┣ ☽  _${usedPrefix}sticker *<enlace / link / url>*_
┣ ☽  _${usedPrefix}sticker2 *<responder a imagen o video>*_
┣ ☽  _${usedPrefix}sticker2 *<enlace / link / url>*_
┣ ☽  _${usedPrefix}s *<responder a imagen o video>*_
┣ ☽  _${usedPrefix}s *<enlace / link / url>*_
┣ ☽  _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ ☽  _${usedPrefix}scircle *<imagen>*_
┣ ☽  _${usedPrefix}sremovebg *<imagen>*_
┣ ☽  _${usedPrefix}semoji *<tipo> <emoji>*_
┣ ☽  _${usedPrefix}qc *<texto>*_
┣ ☽  _${usedPrefix}attp *<texto>*_
┣ ☽  _${usedPrefix}attp2 *<texto>*_
┣ ☽  _${usedPrefix}attp3 *<texto>*_
┣ ☽  _${usedPrefix}ttp *<texto>*_
┣ ☽  _${usedPrefix}ttp2 *<texto>*_
┣ ☽  _${usedPrefix}ttp3 *<texto>*_
┣ ☽  _${usedPrefix}ttp4 *<texto>*_
┣ ☽  _${usedPrefix}ttp5 *<texto>*_
┣ ☽  _${usedPrefix}pat *<@tag>*_
┣ ☽  _${usedPrefix}slap *<@tag>*_
┣ ☽  _${usedPrefix}kiss *<@tag>*_
┣ ☽  _${usedPrefix}dado_
┣ ☽  _${usedPrefix}wm *<packname> <author>*_
┣ ☽  _${usedPrefix}stickermarker *<efecto> <imagen>*_
┣ ☽  _${usedPrefix}stickerfilter *<efecto> <imagen>*_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐎𝐖𝐍𝐄𝐑 𝐘 𝐌𝐎𝐃𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ☽  > *<funcion>*
┣ ☽  => *<funcion>*
┣ ☽  $ *<funcion>*
┣ ☽  _${usedPrefix}setprefix *<prefijo>*_
┣ ☽  _${usedPrefix}resetprefix_
┣ ☽  _${usedPrefix}autoadmin_
┣ ☽  _${usedPrefix}grouplist_
┣ ☽  _${usedPrefix}chetar_
┣ ☽  _${usedPrefix}leavegc_
┣ ☽  _${usedPrefix}cajafuerte_
┣ ☽  _${usedPrefix}blocklist_
┣ ☽  _${usedPrefix}addowner *<@tag / numero>*_
┣ ☽  _${usedPrefix}delowner *<@tag / numero>*_
┣ ☽  _${usedPrefix}block *<@tag / numero>*_
┣ ☽  _${usedPrefix}unblock *<@tag / numero>*_
┣ ☽  _${usedPrefix}enable *restrict*_
┣ ☽  _${usedPrefix}disable *restrict*_
┣ ☽  _${usedPrefix}enable *autoread*_
┣ ☽  _${usedPrefix}disable *autoread*_
┣ ☽  _${usedPrefix}enable *public*_
┣ ☽  _${usedPrefix}disable *public*_
┣ ☽  _${usedPrefix}enable *pconly*_
┣ ☽  _${usedPrefix}disable *pconly*_
┣ ☽  _${usedPrefix}enable *gconly*_
┣ ☽  _${usedPrefix}disable *gconly*_
┣ ☽  _${usedPrefix}enable *anticall*_
┣ ☽  _${usedPrefix}disable *anticall*_
┣ ☽  _${usedPrefix}enable *antiprivado*_
┣ ☽  _${usedPrefix}disable *antiprivado*_
┣ ☽  _${usedPrefix}enable *modejadibot*_
┣ ☽  _${usedPrefix}disable *modejadibot*_
┣ ☽  _${usedPrefix}enable *audios_bot*_
┣ ☽  _${usedPrefix}disable *audios_bot*_
┣ ☽  _${usedPrefix}enable *antispam*_
┣ ☽  _${usedPrefix}disable *antispam*_
┣ ☽  _${usedPrefix}msg *<texto>*_
┣ ☽  _${usedPrefix}banchat_
┣ ☽  _${usedPrefix}unbanchat_
┣ ☽  _${usedPrefix}resetuser *<@tag>*_
┣ ☽  _${usedPrefix}banuser *<@tag>*_
┣ ☽  _${usedPrefix}unbanuser *<@tag>*_
┣ ☽  _${usedPrefix}dardiamantes *<@tag> <cantidad>*_
┣ ☽  _${usedPrefix}añadirxp *<@tag> <cantidad>*_
┣ ☽  _${usedPrefix}banuser *<@tag>*_
┣ ☽  _${usedPrefix}bc *<texto>*_
┣ ☽  _${usedPrefix}bcchats *<texto>*_
┣ ☽  _${usedPrefix}bcgc *<texto>*_
┣ ☽  _${usedPrefix}bcgc2 *<audio>*_
┣ ☽  _${usedPrefix}bcgc2 *<video>*_
┣ ☽  _${usedPrefix}bcgc2 *<imagen>*_
┣ ☽  _${usedPrefix}bcbot *<texto>*_
┣ ☽  _${usedPrefix}cleartpm_
┣ ☽  _${usedPrefix}restart_
┣ ☽  _${usedPrefix}update_
┣ ☽  _${usedPrefix}banlist_
┣ ☽  _${usedPrefix}addprem *<@tag> <tiempo>*_
┣ ☽  _${usedPrefix}addprem2 *<@tag> <tiempo>*_
┣ ☽  _${usedPrefix}addprem3 *<@tag> <tiempo>*_
┣ ☽  _${usedPrefix}addprem4 *<@tag> <tiempo>*_
┣ ☽  _${usedPrefix}delprem *<@tag>*_
┣ ☽  _${usedPrefix}listcmd_
┣ ☽  _${usedPrefix}setppbot *<responder a imagen>*_
┣ ☽  _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┣ ☽  _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┣ ☽  _${usedPrefix}saveimage
┣ ☽  _${usedPrefix}viewimage
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
