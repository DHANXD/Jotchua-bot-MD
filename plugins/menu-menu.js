import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
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
┃➜ *𝐎𝐰𝐧𝐞𝐫:* 𝐀𝐋𝐒
┃➜ *𝐧𝐮𝐦𝐞𝐫𝐨:* wa.me/5491156673266
┃➜ *ʙᴏᴛ ᴏꜰᴄ:* wa.me/?
┃➜ *ꜰᴇᴄʜᴀ:* ${date}
┃➜ *ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ:* ${uptime}
┃➜ *​𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬 𝐫𝐞𝐠𝐬:* ${rtotalreg}
┃➜ *​𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬 𝐭𝐨𝐭𝐚𝐥𝐞𝐬:* ${rtotal}
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *🎖️ 𝙽𝚒𝚟𝚎𝚕:* ${level}
┃ *🧰 𝙴𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊:* ${exp}
┃ *⚓ 𝚁𝚊𝚗𝚐𝚘:* ${role}
┃ *💎 𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜:* ${limit}
┃ *🐶 𝙹𝚘𝚝𝚌𝚑𝚞𝚊𝙲𝚘𝚒𝚗𝚜:* ${money}
┃ *🪙 𝚃𝚘𝚔𝚎𝚗𝚜:* ${joincount}
┃ *🎟️ 𝙿𝚛𝚎𝚖𝚒𝚞𝚖:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
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
┣ ඬ⃟ 💎 _${usedPrefix}add *<numero>*_
┣ ඬ⃟ 💎 _${usedPrefix}kick *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}kick2 *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}listanum *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}kicknum *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┣ ඬ⃟ 💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣ ඬ⃟ 💎 _${usedPrefix}promote *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟ 💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟ 💎 _${usedPrefix}demote *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}infogroup_
┣ ඬ⃟ 💎 _${usedPrefix}resetlink_
┣ ඬ⃟ 💎 _${usedPrefix}link_
┣ ඬ⃟ 💎 _${usedPrefix}setname *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setdesc *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}invocar *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setwelcome *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}setbye *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}hidetag *<texto>*_
┣ ඬ⃟ 💎 _${usedPrefix}hidetag *<audio>*_
┣ ඬ⃟ 💎 _${usedPrefix}hidetag *<video>*_
┣ ඬ⃟ 💎 _${usedPrefix}hidetag *<imagen>*_
┣ ඬ⃟ 💎 _${usedPrefix}warn *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}unwarn *<@tag>*_
┣ ඬ⃟ 💎 _${usedPrefix}listwarn_
┣ ඬ⃟ 💎 _${usedPrefix}fantasmas_
┣ ඬ⃟ 💎 _${usedPrefix}destraba_
┣ ඬ⃟ 💎 _${usedPrefix}setpp *<imagen>*_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ඬ⃟ 🧧 _${usedPrefix}toanime *<imagen>*_
┣ ඬ⃟ 🧧 _${usedPrefix}togifaud *<video>*_
┣ ඬ⃟ 🧧 _${usedPrefix}toimg *<sticker>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tomp3 *<video>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tomp3 *<nota de voz>*_
┣ ඬ⃟ 🧧 _${usedPrefix}toptt *<video / audio>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tovideo *<sticker>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tourl *<video / imagen / audio>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tts *<idioma> <texto>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tts *<efecto> <texto>*_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ඬ⃟ 🖍️ _${usedPrefix}logos *<efecto> <texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logochristmas *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logocorazon *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}ytcomment *<texto>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}hornycard *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}simpcard *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}lolice *<@tag>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}itssostupid_
┣ ඬ⃟ 🖍️ _${usedPrefix}pixelar_
┣ ඬ⃟ 🖍️ _${usedPrefix}blur_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ඬ⃟ 🥀 _${usedPrefix}piropo_
┣ ඬ⃟ 🥀 _${usedPrefix}consejo_
┣ ඬ⃟ 🥀 _${usedPrefix}fraseromantica_
┣ ඬ⃟ 🥀 _${usedPrefix}historiaromantica_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐑𝐀𝐍𝐃-𝐀𝐍𝐈𝐌𝐄𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ඬ⃟ 🧿 _${usedPrefix}menuanimes_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐑𝐀𝐍𝐃𝐎𝐌 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ඬ⃟ 👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
┣ ඬ⃟ 👾 _${usedPrefix}cristianoronaldo_
┣ ඬ⃟ 👾 _${usedPrefix}messi_
┣ ඬ⃟ 👾 _${usedPrefix}cat_
┣ ඬ⃟ 👾 _${usedPrefix}dog_
┣ ඬ⃟ 👾 _${usedPrefix}meme_
┣ ඬ⃟ 👾 _${usedPrefix}itzy_
┣ ඬ⃟ 👾 _${usedPrefix}blackpink_
┣ ඬ⃟ 👾 _${usedPrefix}navidad_
┣ ඬ⃟ 👾 _${usedPrefix}wpmontaña_
┣ ඬ⃟ 👾 _${usedPrefix}pubg_
┣ ඬ⃟ 👾 _${usedPrefix}wpgaming_
┣ ඬ⃟ 👾 _${usedPrefix}wpaesthetic_
┣ ඬ⃟ 👾 _${usedPrefix}wpaesthetic2_
┣ ඬ⃟ 👾 _${usedPrefix}wprandom_
┣ ඬ⃟ 👾 _${usedPrefix}wallhp_
┣ ඬ⃟ 👾 _${usedPrefix}wpvehiculo_
┣ ඬ⃟ 👾 _${usedPrefix}wpmoto_
┣ ඬ⃟ 👾 _${usedPrefix}coffee_
┣ ඬ⃟ 👾 _${usedPrefix}pentol_
┣ ඬ⃟ 👾 _${usedPrefix}caricatura_
┣ ඬ⃟ 👾 _${usedPrefix}ciberespacio_
┣ ඬ⃟ 👾 _${usedPrefix}technology_
┣ ඬ⃟ 👾 _${usedPrefix}doraemon_
┣ ඬ⃟ 👾 _${usedPrefix}hacker_
┣ ඬ⃟ 👾 _${usedPrefix}planeta_
┣ ඬ⃟ 👾 _${usedPrefix}randomprofile_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 +𝟏𝟖 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ඬ⃟ 🔞 _${usedPrefix}labiblia_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ ඬ⃟ 🎤 _${usedPrefix}bass_
┣ ඬ⃟ 🎤 _${usedPrefix}blown_
┣ ඬ⃟ 🎤 _${usedPrefix}deep_
┣ ඬ⃟ 🎤 _${usedPrefix}earrape_
┣ ඬ⃟ 🎤 _${usedPrefix}fast_
┣ ඬ⃟ 🎤 _${usedPrefix}fat_
┣ ඬ⃟ 🎤 _${usedPrefix}nightcore_
┣ ඬ⃟ 🎤 _${usedPrefix}reverse_
┣ ඬ⃟ 🎤 _${usedPrefix}robot_
┣ ඬ⃟ 🎤 _${usedPrefix}slow_
┣ ඬ⃟ 🎤 _${usedPrefix}smooth_
┣ ඬ⃟ 🎤 _${usedPrefix}tupai_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ඬ⃟ 📳 _${usedPrefix}start_
┣ ඬ⃟ 📳 _${usedPrefix}next_
┣ ඬ⃟ 📳 _${usedPrefix}leave_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐀𝐔𝐃𝐈𝐎𝐒 >*   
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ඬ⃟ 🔊 _${usedPrefix}menuaudios_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ඬ⃟ 🛠️ _${usedPrefix}inspect *<link wa_gc>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}chatgpt *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}delchatgpt
┣ ඬ⃟ 🛠️ _${usedPrefix}gptvoz *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}dall-e *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readviewonce *<imagen / video>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}clima *<país> <ciudad>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}afk *<motivo>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}ocr *<responde a imagen>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}hd *<responde a imagen>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}calc *<operacion math>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}del *<mensaje>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}whatmusic *<audio>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readqr *<imagen (QR)>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}qrcode *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}styletext *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}traducir *<texto>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}nowa *<numero>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}covid *<pais>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}horario_
┣ ඬ⃟ 🛠️ _${usedPrefix}dropmail_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐑𝐏𝐆 - 𝐋𝐈𝐌𝐈𝐓𝐄𝐒 - 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ඬ⃟ 💵 _${usedPrefix}adventure_
┣ ඬ⃟ 💵 _${usedPrefix}cazar_
┣ ඬ⃟ 💵 _${usedPrefix}cofre_
┣ ඬ⃟ 💵 _${usedPrefix}balance_
┣ ඬ⃟ 💵 _${usedPrefix}claim_
┣ ඬ⃟ 💵 _${usedPrefix}heal_
┣ ඬ⃟ 💵 _${usedPrefix}lb_
┣ ඬ⃟ 💵 _${usedPrefix}levelup_
┣ ඬ⃟ 💵 _${usedPrefix}myns_
┣ ඬ⃟ 💵 _${usedPrefix}perfil_
┣ ඬ⃟ 💵 _${usedPrefix}work_
┣ ඬ⃟ 💵 _${usedPrefix}minar_
┣ ඬ⃟ 💵 _${usedPrefix}minar2_
┣ ඬ⃟ 💵 _${usedPrefix}buy_
┣ ඬ⃟ 💵 _${usedPrefix}buyall_
┣ ඬ⃟ 💵 _${usedPrefix}verificar_
┣ ඬ⃟ 💵 _${usedPrefix}robar *<cantidad> <@tag>*_
┣ ඬ⃟ 💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┣ ඬ⃟ 💵 _${usedPrefix}unreg *<numero de serie>*_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ඬ⃟ 👽 _${usedPrefix}sticker *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}sticker *<enlace / link / url>*_
┣ ඬ⃟ 👽 _${usedPrefix}sticker2 *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}sticker2 *<enlace / link / url>*_
┣ ඬ⃟ 👽 _${usedPrefix}s *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}s *<enlace / link / url>*_
┣ ඬ⃟ 👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ ඬ⃟ 👽 _${usedPrefix}scircle *<imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}sremovebg *<imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}semoji *<tipo> <emoji>*_
┣ ඬ⃟ 👽 _${usedPrefix}qc *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp2 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp3 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp2 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp3 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp4 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}ttp5 *<texto>*_
┣ ඬ⃟ 👽 _${usedPrefix}pat *<@tag>*_
┣ ඬ⃟ 👽 _${usedPrefix}slap *<@tag>*_
┣ ඬ⃟ 👽 _${usedPrefix}kiss *<@tag>*_
┣ ඬ⃟ 👽 _${usedPrefix}dado_
┣ ඬ⃟ 👽 _${usedPrefix}wm *<packname> <author>*_
┣ ඬ⃟ 👽 _${usedPrefix}stickermarker *<efecto> <imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
╰⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊

╭⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┃ *< 𝐎𝐖𝐍𝐄𝐑 𝐘 𝐌𝐎𝐃𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒 >*
┃⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊⚊
┣ ඬ⃟ 👑 > *<funcion>*
┣ ඬ⃟ 👑 => *<funcion>*
┣ ඬ⃟ 👑 $ *<funcion>*
┣ ඬ⃟ 👑 _${usedPrefix}setprefix *<prefijo>*_
┣ ඬ⃟ 👑 _${usedPrefix}resetprefix_
┣ ඬ⃟ 👑 _${usedPrefix}autoadmin_
┣ ඬ⃟ 👑 _${usedPrefix}grouplist_
┣ ඬ⃟ 👑 _${usedPrefix}chetar_
┣ ඬ⃟ 👑 _${usedPrefix}leavegc_
┣ ඬ⃟ 👑 _${usedPrefix}cajafuerte_
┣ ඬ⃟ 👑 _${usedPrefix}blocklist_
┣ ඬ⃟ 👑 _${usedPrefix}addowner *<@tag / numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}delowner *<@tag / numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}block *<@tag / numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}unblock *<@tag / numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *restrict*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *restrict*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *autoread*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *autoread*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *public*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *public*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *pconly*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *pconly*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *gconly*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *gconly*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *anticall*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *anticall*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *antiprivado*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *antiprivado*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *modejadibot*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *modejadibot*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *audios_bot*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *audios_bot*_
┣ ඬ⃟ 👑 _${usedPrefix}enable *antispam*_
┣ ඬ⃟ 👑 _${usedPrefix}disable *antispam*_
┣ ඬ⃟ 👑 _${usedPrefix}msg *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}banchat_
┣ ඬ⃟ 👑 _${usedPrefix}unbanchat_
┣ ඬ⃟ 👑 _${usedPrefix}resetuser *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}banuser *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}unbanuser *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}dardiamantes *<@tag> <cantidad>*_
┣ ඬ⃟ 👑 _${usedPrefix}añadirxp *<@tag> <cantidad>*_
┣ ඬ⃟ 👑 _${usedPrefix}banuser *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}bc *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcchats *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc2 *<audio>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc2 *<video>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc2 *<imagen>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcbot *<texto>*_
┣ ඬ⃟ 👑 _${usedPrefix}cleartpm_
┣ ඬ⃟ 👑 _${usedPrefix}restart_
┣ ඬ⃟ 👑 _${usedPrefix}update_
┣ ඬ⃟ 👑 _${usedPrefix}banlist_
┣ ඬ⃟ 👑 _${usedPrefix}addprem *<@tag> <tiempo>*_
┣ ඬ⃟ 👑 _${usedPrefix}addprem2 *<@tag> <tiempo>*_
┣ ඬ⃟ 👑 _${usedPrefix}addprem3 *<@tag> <tiempo>*_
┣ ඬ⃟ 👑 _${usedPrefix}addprem4 *<@tag> <tiempo>*_
┣ ඬ⃟ 👑 _${usedPrefix}delprem *<@tag>*_
┣ ඬ⃟ 👑 _${usedPrefix}listcmd_
┣ ඬ⃟ 👑 _${usedPrefix}setppbot *<responder a imagen>*_
┣ ඬ⃟ 👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┣ ඬ⃟ 👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┣ ඬ⃟ 👑 _${usedPrefix}saveimage
┣ ඬ⃟ 👑 _${usedPrefix}viewimage
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
