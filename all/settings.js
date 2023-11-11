const fs = require('fs')
const chalk = require('chalk')

global.owner = "6283844381740"
global.ownerStore = "6283844381740"
global.namabot = "DXM-BOT"
global.namaCreator = "DCN"
global.namaStore = "DCM"
global.autoJoin = false
global.antilink = false
global.themeemoji = '🪀'
global.versisc = '8.0.0'
global.namasc = 'CAMPURAN V8 FITUR ADDPM2'
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.apitokendo = '-'
global.domain = 'https://panellku.isrooffc.my.id' // Isi Domain Lu
global.apikey = 'ptla_FuP9UlzFLqqLx2pbCE59z6ks2QsI7YDYUFMuc9zXRHH' // Isi Apikey Plta Lu
global.capikey = 'ptlc_j08CLnBJbAOODLsOO725jjox2VB1cgYq3SxOKd8j0xj' // Isi Apikey Pltc Lu
global.domainotp = "-"
global.apikeyotp = "-"
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
global.tekspushkonv4 = ""
global.packname = ""
global.author = "Sticker By Dxm"
global.jumlah = "5"
global.youtube = "-"
global.grup = "-"
global.telegram = "*Masih Proses Kak*"
global.instagram = "-"
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
