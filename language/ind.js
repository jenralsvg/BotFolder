exports.wait = () => {
	return`*「 WAIT 」 Sedang di Proses...*`
}

exports.succes = () => {
	return`*「 Succes 」*`
}

exports.lvlon = () => {
	return`*[❗] ENABLE Leveling*`
}

exports.lvloff = () => {
	return`*[❗] DISABLE Leveling*`
}

exports.lvlnul = () => {
	return`💤 *Your Level Is Still Empty*\n[❗] _Levelmu Masih Kosong_`
}

exports.lvlnoon = () => {
	return`💤 *The Level In The Group Has Not Been Activated*\n[❗] _Level Dalam Group Belum Di Aktifkan_`
}

exports.noregis = () => {
	return`*「 PENDAFTARAN 」*\n\n*Cara Daftar ${prefix}Daftar Nama|Umur* \n*Contoh ${prefix}Daftar IlhamNet|18*`
}

exports.rediregis = () => {
	return`*「 SUDAH TERDAFTAR 」*\n\n*Kamu Sudah Terdaftar Di Database Bot*`
}

exports.stikga = () => {
	return`*Gagal Coba Ulangi Beberapa Saat Lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「 GROUP ONLY 」*`
}

exports.ownerb = () => {
	return`*「 OWNER BOT ONLY 」*`
}

exports.ownerg = () => {
	return`*「 OWNER GROUP ONLY 」*`
}

exports.admin = () => {
	return`*「 ADMIN GROUP ONLY 」*`
}

exports.badmin = () => {
	return`*「 BOT HARUS JADI ADMIN 」*`
}

exports.nsfwoff = () => {
	return`[❗] *NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner, Laporan palsu atau main² tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`💤 *Teks nya mana Boss ?*`
}

exports.clears = () => {
	return`🚮 *Clear All Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE :\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\nKamu Sudah Terdaftar Dengan Data \n\n┏━⊱Nama\n┗⊱${namaUser}\n┏━⊱Nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱Umur\n┗⊱${umurUser}\n┏━⊱Waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : Gunakanlah Bot Ini Sesuka Hati !`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* Tidak Di Temukan Coba Ketik *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : Chat Selalu ON Untuk Mendapatkan XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `「 *JRL Enzet BOT* 」
◪ *INFO DEVELOPER*
  ❏ Nama: Ilham_Net
  ❏ Wa: wa.me/6285757196481
  ----------------------------------
◪ *INFO JRL Enzet Svg*
  ❏ Nama: JRL Svg
  ❏ Web Api: https://ilham-net.herokuapp
  ----------------------------------
◪ *YOUR INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Nama: ${pushname}
  ❏ Uang mu : Rp${uangku}
  ❏ Nomer: ${sender.split("@")[0]}
  ❏ XP: ${getLevelingXp(sender)}/${reqXp}
  ❏ Level: ${getLevelingLevel(sender)}
  ❏ User register : ${_registered.length}
  
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}snk
  ├─ ❏ ${prefix}lpr 
  ├─ ❏ ${prefix}request
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}ping
  ├─ ❏ ${prefix}buypremium
  ├─ ❏ ${prefix}hargaprem
  ├─ ❏ ${prefix}menupict
  └─ ❏ ${prefix}menuowner
  
◪ *NEW FEATURE*
  │
  ├─ ❏ ${prefix}nsfwloli
  ├─ ❏ ${prefix}asupan
  ├─ ❏ ${prefix}wiki
  ├─ ❏ ${prefix}spamcall
  ├─ ❏ ${prefix}tebakgambar
  ├─ ❏ ${prefix}babi
  ├─ ❏ ${prefix}caklontong
  ├─ ❏ ${prefix}katailham
  ├─ ❏ ${prefix}katabijak
  ├─ ❏ ${prefix}fakta
  ├─ ❏ ${prefix}mimpi
  ├─ ❏ ${prefix}husbu
  ├─ ❏ ${prefix}imagemountain
  ├─ ❏ ${prefix}loli
  ├─ ❏ ${prefix}imagegame
  ├─ ❏ ${prefix}imagecyberspace
  ├─ ❏ ${prefix}imageislamic
  ├─ ❏ ${prefix}blackpink
  ├─ ❏ ${prefix}randomexo
  ├─ ❏ ${prefix}randombts
  └─ ❏ ${prefix}menuownerwaifu

◪ *MAKER*
  │
  ├─ ❏ ${prefix}nulis
  ├─ ❏ ${prefix}sticker
  ├─ ❏ ${prefix}stickergif
  ├─ ❏ ${prefix}toimg
  ├─ ❏ ${prefix}hartatata
  ├─ ❏ ${prefix}quotemaker
  ├─ ❏ ${prefix}galaxtext
  ├─ ❏ ${prefix}pupycut
  ├─ ❏ ${prefix}galaxstyle
  ├─ ❏ ${prefix}hologram
  ├─ ❏ ${prefix}textbyname
  ├─ ❏ ${prefix}herrypoter
  ├─ ❏ ${prefix}greanneon
  └─ ❏ ${prefix}metallogo
  
◪ *MEDIA*
  │
  └─ ❏ ${prefix}tribunews
  
◪ *OTHER FITUR*
  │
  ├─ ❏ ${prefix}ssweb
  ├─ ❏ ${prefix}hilih [teks]
  ├─ ❏ ${prefix}alay [teks]
  ├─ ❏ ${prefix}say [teks]
  ├─ ❏ ${prefix}wiki [teks]
  ├─ ❏ ${prefix}kbbi [teks]
  ├─ ❏ ${prefix}map [teks]
  ├─ ❏ ${prefix}kalkulator
  ├─ ❏ ${prefix}lirik [teks]
  ├─ ❏ ${prefix}brainly [teks]
  ├─ ❏ ${prefix}bitly
  ├─ ❏ ${prefix}chord [teks]
  ├─ ❏ ${prefix}katabijak 
  ├─ ❏ ${prefix}faktaunik 
  ├─ ❏ ${prefix}faktaunikl
  ├─ ❏ ${prefix}holoh
  ├─ ❏ ${prefix}halah
  ├─ ❏ ${prefix}huluh
  ├─ ❏ ${prefix}heleh
  ├─ ❏ ${prefix}hurufterbalik
  ├─ ❏ ${prefix}lirik
  ├─ ❏ ${prefix}alay2
  ├─ ❏ ${prefix}fml
  ├─ ❏ ${prefix}katadilan
  ├─ ❏ ${prefix}katabucin
  ├─ ❏ ${prefix}katabucin2
  ├─ ❏ ${prefix}cerpen
  ├─ ❏ ${prefix}quotes
  ├─ ❏ ${prefix}bacotanhacker
  ├─ ❏ ${prefix}quotedoraemon
  ├─ ❏ ${prefix}infofilm
  ├─ ❏ ${prefix}igvideo
  ├─ ❏ ${prefix}pantun
  └─ ❏ ${prefix}artinama [teks]
  
◪ *KERANG AJAIB*
  │
  ├─ ❏ ${prefix}gantengcek
  ├─ ❏ ${prefix}cantikcek
  ├─ ❏ ${prefix}sangecek
  ├─ ❏ ${prefix}gaycek
  ├─ ❏ ${prefix}lesbicek
  ├─ ❏ ${prefix}watak
  ├─ ❏ ${prefix}hobby
  ├─ ❏ ${prefix}apakah
  ├─ ❏ ${prefix}kapankah
  ├─ ❏ ${prefix}bisakah
  ├─ ❏ ${prefix}bagaimanakah
  └─ ❏ ${prefix}rate
  
◪ *DOWNLOADER*
  │
  ├─ ❏ ${prefix}1cak
  ├─ ❏ ${prefix}pinterest [teks]
  ├─ ❏ ${prefix}ytmp3 [link]
  ├─ ❏ ${prefix}ytmp4 [link]
  ├─ ❏ ${prefix}play [teks]
  ├─ ❏ ${prefix}fototiktok
  ├─ ❏ ${prefix}igpost [teks]
  ├─ ❏ ${prefix}igtv
  └─ ❏ ${prefix}joox [teks]
  
◪ *FIND TARGET*
  │
  ├─ ❏ ${prefix}mutual
  └─ ❏ ${prefix}next
  
◪ *RANDOM PICTUE*
  │ *ANIME*
  ├─ ❏ ${prefix}loli
  ├─ ❏ ${prefix}neko
  ├─ ❏ ${prefix}waifu
  ├─ ❏ ${prefix}animecry
  ├─ ❏ ${prefix}animehug
  ├─ ❏ ${prefix}osakana
  ├─ ❏ ${prefix}naruto
  ├─ ❏ ${prefix}anime
  ├─ ❏ ${prefix}husbu
  ├─ ❏ ${prefix}animegirl
  ├─ ❏ ${prefix}animeboy
  ├─ ❏ ${prefix}nekonime
  │
  │ *RANDOM KPOP*
  ├─ ❏ ${prefix}randomkpop
  ├─ ❏ ${prefix}randombts
  ├─ ❏ ${prefix}randomexo
  ├─ ❏ ${prefix}blackpink
  │
  │ *CARTOON*
  ├─ ❏ ${prefix}doraemon
  ├─ ❏ ${prefix}pokemon
  │
  │ *ANIMAL*
  ├─ ❏ ${prefix}anjing
  ├─ ❏ ${prefix}kucing
  ├─ ❏ ${prefix}hamster
  ├─ ❏ ${prefix}kelinci
  │
  │ *TRANSPORT*
  ├─ ❏ ${prefix}mobil
  ├─ ❏ ${prefix}motor
  ├─ ❏ ${prefix}sepeda
  │
  │ *AESTHETIC*
  ├─ ❏ ${prefix}aesthetic
  ├─ ❏ ${prefix}bluesky
  ├─ ❏ ${prefix}flower
  ├─ ❏ ${prefix}icecream
  ├─ ❏ ${prefix}pemandangan
  │
  │ *QUOTES*
  ├─ ❏ ${prefix}quotes
  ├─ ❏ ${prefix}quoteskehidupan
  ├─ ❏ ${prefix}quotesislami
  ├─ ❏ ${prefix}katabijak
  ├─ ❏ ${prefix}katailham
  ├─ ❏ ${prefix}quotesnasehat
  └─ ❏ ${prefix}quotesmotivasi
  

◪ *LIMIT & UANG & LB*
  │
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}buylimit
  ├─ ❏ ${prefix}buypremiumlimit
  ├─ ❏ ${prefix}transfer
  └─ ❏ ${prefix}leaderboard
  
◪ *GROUP*
  │
  ├─ ❏ ${prefix}promote [@tag]
  ├─ ❏ ${prefix}demote [@tag]
  ├─ ❏ ${prefix}tagall
  ├─ ❏ ${prefix}listadmin
  ├─ ❏ ${prefix}wakillist
  ├─ ❏ ${prefix}premiumlist
  ├─ ❏ ${prefix}banlist
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}linkgc
  ├─ ❏ ${prefix}mining
  ├─ ❏ ${prefix}hidetag
  ├─ ❏ ${prefix}grouplist
  ├─ ❏ ${prefix}add [62]
  ├─ ❏ ${prefix}kick [@tag]
  ├─ ❏ ${prefix}setname
  ├─ ❏ ${prefix}setdesc
  ├─ ❏ ${prefix}setpp
  ├─ ❏ ${prefix}listadmin
  ├─ ❏ ${prefix}linkgc
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}mining
  ├─ ❏ ${prefix}level
  ├─ ❏ ${prefix}grup [buka/tutup)
  ├─ ❏ ${prefix}welcome [1/0]
  ├─ ❏ ${prefix}nsfw [1/0]
  ├─ ❏ ${prefix}antilink [1/0]
  ├─ ❏ ${prefix}leveling [1/0]
  └─ ❏ ${prefix}simih [1/0]
  
◪ *SOUND*
  │
  ├─ ❏ ${prefix}hai
  ├─ ❏ ${prefix}hallo [only computer]
  ├─ ❏ ${prefix}aine
  ├─ ❏ ${prefix}soundplaydate [only computer]
  ├─ ❏ ${prefix}soundbakahentai [only computer]
  ├─ ❏ ${prefix}sayonichan [only computer]
  └─ ❏ ${prefix}gtts
  
◪ *ISLAM*
  │
  └─ ❏ ${prefix}quran
  
◪ *STALK*
  │
  ├─ ❏ ${prefix}tiktokstalk
  └─ ❏ ${prefix}igstalk
  
◪ *WIBU*
  │
  ├─ ❏ ${prefix}neonime
  └─ ❏ ${prefix}wait
  
◪ *APK*
  ├─ ❏ ${prefix}apkpure [teks]
  ├─ ❏ ${prefix}happymod [teks]
  ├─ ❏ ${prefix}moddroid [teks]
  
◪ *18+ Nsfw*
  |
  ├─ ❏ ${prefix}blowjob
  ├─ ❏ ${prefix}randomhentai
  ├─ ❏ ${prefix}sfw
  ├─ ❏ ${prefix}nsfw
  ├─ ❏ ${prefix}randomsfw
  ├─ ❏ ${prefix}randomnsfw
  └─ ❏ ${prefix}nsfwneko
  
◪ *FUN*
  │
  ├─ ❏ ${prefix}truth
  ├─ ❏ ${prefix}dare
  ├─ ❏ ${prefix}slap
  ├─ ❏ ${prefix}tampar
  ├─ ❏ ${prefix}nangis
  ├─ ❏ ${prefix}cium
  └─ ❏ ${prefix}simi
  
◪ *INFORMATION*
  │
  ├─ ❏ ${prefix}bahasa
  ├─ ❏ ${prefix}kodenegara
  ├─ ❏ ${prefix}infogempa
  ├─ ❏ ${prefix}infocuaca
  ├─ ❏ ${prefix}infonomor
  ├─ ❏ ${prefix}covidindo
  ├─ ❏ ${prefix}covidglobal
  ├─ ❏ ${prefix}ceknamaff
  ├─ ❏ ${prefix}namaninja
  ├─ ❏ ${prefix}newsinfo
  └─ ❏ ${prefix}ceknamaml
  
◪ *OWNER*
  │
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}setreply
  ├─ ❏ ${prefix}setppbot
  ├─ ❏ ${prefix}block
  ├─ ❏ ${prefix}unblock
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}kickall
  ├─ ❏ ${prefix}event [1/0]
  ├─ ❏ ${prefix}bc
  ├─ ❏ ${prefix}bcgc
  ├─ ❏ ${prefix}clone
  └─ ❏ ${prefix}clearall
  
◪ *OTHER*
  │
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}qrcode
  └─ ❏ ${prefix}afk
  
◪ *Powered Ilham_Net*
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
  ❏ Nama : ${pushname}
  ❏ Nomer : ${sender.split("@")[0]}
  ❏ Xp : ${getLevelingXp(sender)}
  ❏ Limit :  +3
  ❏ Pangkat :  ${role}
  ❏ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit hari ini habis*\n*Hubungi kami* : wa.me/6285757196481\n\n*Note : Kami akan berikan random dari 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}

exports.satukos = () => {
	return`💤 *Add Parameters [ 1 ] Enable Or [ 0 ] Disable*\n${prefix}${command} [❗] _Tambah Parameter [ 1 ] Aktifkan atau [ 0 ] Nonaktifkan`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *「 ATM 」*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : ${uangkau}
`}
